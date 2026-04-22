"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore-next-line: no types available
const fs = __importStar(require("fs"));
const tmp = __importStar(require("tmp"));
const createProofHtml_1 = require("./helpers/createProofHtml");
async function jobArrived(s, flowElement, job) {
    var _a, _b;
    const logger = async (log, isError = false) => {
        if (isError) {
            await job.log(LogLevel.Error, `[CreateProofV2] - ${log}`);
        }
        else {
            await job.log(LogLevel.Info, `[CreateProofV2] - ${log}`);
        }
    };
    try {
        const jobName = job.getName(false);
        // get the jobs dataset path
        const standardizedDataPath = await job.getDataset("standardizedData", AccessLevel.ReadOnly);
        const revisionDataPath = await job.getDataset("revisionData", AccessLevel.ReadOnly);
        if (!standardizedDataPath) {
            await logger("** Could not find the path for the standardized data", true);
        }
        // Read the file synchronously
        const jsonData = fs.readFileSync(standardizedDataPath, 'utf-8');
        const revisionJsonData = fs.readFileSync(revisionDataPath, 'utf-8');
        const standardizedData = JSON.parse(jsonData);
        const revisionData = JSON.parse(revisionJsonData);
        if (!standardizedData) {
            await logger("** No Standardized data could be found", true);
        }
        if (!revisionData) {
            await logger("** No Revision data could be found", true);
        }
        let orderDetailsDataPath;
        let orderDetailsJsonData;
        let orderData;
        await logger(`[Create Work Order]: Input type - ${standardizedData.inputType}`);
        if (standardizedData.inputType === "weborder") {
            await logger(`[Create Work Order]: Web Order - ${standardizedData.inputType}`);
            orderDetailsDataPath = await job.getDataset("orderDetails", AccessLevel.ReadOnly);
            orderDetailsJsonData = fs.readFileSync(orderDetailsDataPath, 'utf-8');
            orderData = JSON.parse(orderDetailsJsonData);
        }
        else {
            // hardcode for corebridge and submit point
            orderData = {
                needToCombine: false,
                numberToGroup: 1,
                lineItemNumber: 1,
                orderNumber: standardizedData.orderNumber,
                orderItemNumber: 1,
                jobNumber: undefined,
                shippingType: undefined
            };
        }
        let isJobDoubleSided = (_a = standardizedData === null || standardizedData === void 0 ? void 0 : standardizedData.itemInfo) === null || _a === void 0 ? void 0 : _a.itemPrintedSides.toLowerCase().includes('double');
        let previewImageSrc = (_b = standardizedData === null || standardizedData === void 0 ? void 0 : standardizedData.itemInfo) === null || _b === void 0 ? void 0 : _b.ItemPreviewFile; // array
        await logger(`[Create Work Order]: here is the preview img: ${previewImageSrc}`);
        await logger(`[Create Work Order]: Order Detail Json: ${JSON.stringify(orderData)}`);
        // Build HTML
        const builtHtml = (0, createProofHtml_1.createProofHtml)(standardizedData, revisionData, orderData, previewImageSrc, isJobDoubleSided);
        // log proof HTML for dev
        await logger(`Here is the Proof HTML -> ${builtHtml}`);
        // Create a temporary file to store the HTML
        const tempFile = tmp.fileSync({ postfix: ".html" });
        // Write the HTML content to the temp file
        fs.writeFileSync(tempFile.name, builtHtml, "utf8");
        // Create a new job with the HTML file and send it to the next step
        const newJob = await job.createChild(tempFile.name);
        // Send html file to the success channel
        await newJob.sendToData(Connection.Level.Success, `${jobName}.html`);
        // Clean up temporary file
        fs.unlinkSync(tempFile.name);
        // Remove original after children have been created and dispatched
        await job.sendToNull(); // for the file that came into the script
        // await job.sendToData(Connection.Level.Error); // uncomment for DEV
    }
    catch (error) {
        await logger("There was an error: " + error, true);
        await job.sendToData(Connection.Level.Error);
    }
}
//# sourceMappingURL=main.js.map