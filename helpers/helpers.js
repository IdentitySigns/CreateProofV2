"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAssetImg = exports.formatISODateToMMDDYY = exports.stripHTMLDoc = void 0;
const jsdom_1 = require("jsdom");
const images_js_1 = require("../lib/images.js");
// Helper function to parse HTML strings into DOM elements
function stripHTMLDoc(html, normalize = true) {
    var _a, _b;
    const dom = new jsdom_1.JSDOM(html);
    const text = (_b = (_a = dom.window.document.body) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : "";
    return normalize ? text.replace(/\s+/g, " ").trim() : text;
}
exports.stripHTMLDoc = stripHTMLDoc;
// Helper function to formate iso date string to MM/DD/YY
function formatISODateToMMDDYY(isoString) {
    const date = new Date(isoString);
    // Set the formatting options.
    const options = {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
}
exports.formatISODateToMMDDYY = formatISODateToMMDDYY;
// Helper function to find the correct image from the imageLib array
const findAssetImg = (imgName) => {
    var _a;
    return (((_a = images_js_1.imageLib.find((image) => image.code === imgName)) === null || _a === void 0 ? void 0 : _a.src) ||
        "800x800-placeholder_1.png");
};
exports.findAssetImg = findAssetImg;
//# sourceMappingURL=helpers.js.map