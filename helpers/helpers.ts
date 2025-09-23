import { JSDOM } from "jsdom";
import { imageLib } from "../lib/images.js";

// Helper function to parse HTML strings into DOM elements
export function stripHTMLDoc(html:any, normalize = true) {
  const dom = new JSDOM(html);
  const text = dom.window.document.body?.textContent ?? "";
  return normalize ? text.replace(/\s+/g, " ").trim() : text;
}

// Helper function to formate iso date string to MM/DD/YY
export function formatISODateToMMDDYY(isoString:string) {
  const date = new Date(isoString);
  // Set the formatting options.
  const options:any = {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}

// Helper function to find the correct image from the imageLib array
export const findAssetImg = (imgName:string) => {
  return (
    imageLib.find((image) => image.code === imgName)?.src ||
    "800x800-placeholder_1.png"
  );
};
