import * as fs from "fs";
import * as tmp from "tmp";
import { createProofHtml } from "./helpers/createProofHtml";
// import { testData } from "./testData/testData";

async function jobArrived(s: Switch, flowElement: FlowElement, job: Job) {
  try {
    const jobName = job.getName(false);

    let previewImageSrc: string = (await flowElement.getPropertyStringValue(
      "previewImageSrc"
    )) as string;
    // get the jobs dataset path
    const standardizedDataPath: string = await job.getDataset("standardizedData", AccessLevel.ReadOnly)

    if (!previewImageSrc) {
      await job.log(LogLevel.Error, "** There was no Preview Image Src.")
    }
    if (!standardizedDataPath) {
      await job.log(LogLevel.Error, "** Could not find the path for the standardized data")
    }

    // Read the file synchronously
    const jsonData = fs.readFileSync(standardizedDataPath, 'utf-8');
    const standardizedData = JSON.parse(jsonData);

    if (!standardizedData) {
      await job.log(LogLevel.Error, "** No Standardized data could be found")
    }

    // Build HTML
    const builtHtml = createProofHtml(standardizedData, previewImageSrc)

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
    await job.sendToNull();
  } catch (error) {
    await job.log(LogLevel.Error, "There was an error: " + error);
    await job.sendToData(Connection.Level.Error);
  }
}
