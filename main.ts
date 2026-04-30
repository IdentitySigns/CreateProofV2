import * as fs from "fs";
import * as tmp from "tmp";
import { createProofHtml } from "./helpers/createProofHtml";

async function jobArrived(s: Switch, flowElement: FlowElement, job: Job) {
  const logger = async (log: string, isError: boolean = false) => {
    if (isError) {
      await job.log(LogLevel.Error, `[CreateProofV2] - ${log}`)
    } else {
      await job.log(LogLevel.Info, `[CreateProofV2] - ${log}`)
    }
  }


  try {
    const jobName = job.getName(false);
    // get the jobs dataset path
    const standardizedDataPath: string = await job.getDataset("standardizedData", AccessLevel.ReadOnly)
    const revisionDataPath: string = await job.getDataset("revisionData", AccessLevel.ReadOnly)


    if (!standardizedDataPath) {
      await logger("** Could not find the path for the standardized data", true)
    }

    // Read the file synchronously
    const jsonData = fs.readFileSync(standardizedDataPath, 'utf-8');
    const revisionJsonData = fs.readFileSync(revisionDataPath, 'utf-8');
    const standardizedData = JSON.parse(jsonData);
    const revisionData = JSON.parse(revisionJsonData);

    if (!standardizedData) {
      await logger("** No Standardized data could be found", true)
    }

    if (!revisionData) {
      await logger("** No Revision data could be found", true)
    }
    let orderDetailsDataPath: any
    let orderDetailsJsonData: any
    let orderData: any

    await logger(`[Create Work Order]: Input type - ${standardizedData.inputType}`)
    if (standardizedData.inputType === "weborder") {
      await logger(`[Create Work Order]: Web Order - ${standardizedData.inputType}`)
      orderDetailsDataPath = await job.getDataset("orderDetails", AccessLevel.ReadOnly)
      orderDetailsJsonData = fs.readFileSync(orderDetailsDataPath, 'utf-8');
      orderData = JSON.parse(orderDetailsJsonData);
    } else {
      // hardcode for corebridge and submit point
      orderData = {
        needToCombine: false,
        numberToGroup: 1,
        lineItemNumber: 1,
        orderNumber: standardizedData.orderNumber, // will be used for moving job to folder
        orderItemNumber: 1,
        jobNumber: undefined,
        shippingType: undefined
      }
    }


    let isJobDoubleSided = standardizedData?.itemInfo?.itemPrintedSides.toLowerCase().includes('double')
    let previewImageSrc = standardizedData?.itemInfo?.ItemPreviewFile // array
    await logger(`[Create Work Order]: here is the preview img: ${previewImageSrc}`)
    await logger(`[Create Work Order]: Order Detail Json: ${JSON.stringify(orderData)}`)
    // Build HTML
    const builtHtml = createProofHtml(standardizedData, revisionData, orderData, previewImageSrc, isJobDoubleSided)

    // log proof HTML for dev
    await logger(`Here is the Proof HTML -> ${builtHtml}`)

    // Create a temporary file to store the HTML
    const tempFile = tmp.fileSync({ postfix: ".html" });

    // Write the HTML content to the temp file
    fs.writeFileSync(tempFile.name, builtHtml, "utf8");

    // Create a new job with the HTML file and send it to the next step
    const newJob = await job.createChild(tempFile.name);

    // Send html file to the success channel
    await newJob.sendToData(
      Connection.Level.Success,
      `${jobName}.html`
    );

    // Clean up temporary file
    fs.unlinkSync(tempFile.name);
    // Remove original after children have been created and dispatched
    await job.sendToNull(); // for the file that came into the script
    // await job.sendToData(Connection.Level.Error); // uncomment for DEV
  } catch (error) {
    await logger("There was an error: " + error, true);
    await job.sendToData(Connection.Level.Error);
  }
}
