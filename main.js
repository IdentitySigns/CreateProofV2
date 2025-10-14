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
const fs = __importStar(require("fs"));
const tmp = __importStar(require("tmp"));
const createProofHtml_1 = require("./helpers/createProofHtml");
// import { testData } from "./testData/testData";
async function jobArrived(s, flowElement, job) {
    try {
        const jobName = job.getName(false);
        let previewImageSrc = (await flowElement.getPropertyStringValue("previewImageSrc"));
        // get the jobs dataset path
        const standardizedDataPath = await job.getDataset("standardizedData", AccessLevel.ReadOnly);
        const revisionDataPath = await job.getDataset("revisionData", AccessLevel.ReadOnly);
        if (!previewImageSrc) {
            await job.log(LogLevel.Error, "** There was no Preview Image Src.");
        }
        if (!standardizedDataPath) {
            await job.log(LogLevel.Error, "** Could not find the path for the standardized data");
        }
        // Read the file synchronously
        const jsonData = fs.readFileSync(standardizedDataPath, 'utf-8');
        await job.log(LogLevel.Info, `Dataset Path: ${standardizedDataPath}`);
        const revisionJsonData = fs.readFileSync(revisionDataPath, 'utf-8');
        const standardizedData = JSON.parse(jsonData);
        const revisionData = JSON.parse(revisionJsonData);
        if (!standardizedData) {
            await job.log(LogLevel.Error, "** No Standardized data could be found");
        }
        if (!revisionData) {
            await job.log(LogLevel.Error, "** No Revision data could be found");
        }
        // Build HTML
        const builtHtml = (0, createProofHtml_1.createProofHtml)(standardizedData, revisionData, previewImageSrc);
        // log proof HTML for dev
        await job.log(LogLevel.Info, `Here is the Proof HTML -> ${builtHtml}`);
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
        await job.log(LogLevel.Error, "There was an error: " + error);
        await job.sendToData(Connection.Level.Error);
    }
}
//# sourceMappingURL=main.js.map