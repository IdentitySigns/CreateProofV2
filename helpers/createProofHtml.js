"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProofHtml = void 0;
const helpers_js_1 = require("./helpers.js");
const styles_js_1 = require("./styles.js");
// Example Data coming in
// let data = {
//     itemInfo: {
//         itemName: "",
//         itemQuantity: 1,
//         itemPreviewUrl: "",
//         itemHeight: 1,
//         itemWidth: 1,
//         itemNumber: 1,
//         itemDescription: "",
//         itemMaterialSpecifications: [],
//         itemDesigner: "",
//         itemCustomerNotes: "",
//         itemAccessories: [],
//         itemHaveUsDesignNotes: {}
//     },
//     orderInfo: {
//         orderClientName: "",
//         contactName: "",
//         orderAssignedSalesPerson: "",
//         orderAssignedProjectManager: "",
//         orderAssignedDesigner: "",
//         orderAssignedTo: "",
//         orderEnteredBy:"",
//         orderEnteredByEmail: "",
//         orderNumber: 1,
//         orderStatus: "",
//         orderCreatedDate: "",
//         orderDeliveryInfo: [],
//     }
// }
// var exampleRevisions = [
//     {
//         "id": "GEiv6Rb3SbIKf7dDPtffc8xBuoorrBl",
//         "jobName": "EST-1040_1106",
//         "jobNumber": "EST-1040",
//         "jobTotalPages": 1,
//         "jobPages": [],
//         "revisionDate": "2025-09-23T21:39:46.365Z",
//         "revisionNumber": 8,
//         "submitDate": null,
//         "submitter": "tom@idsignco.com"
//     }
// ]
const createProofHtml = (data, revisionData, previewImageSrc, isDoubleSided) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
    function returnShortName(fullname) {
        if (!fullname)
            return "NA";
        const name = fullname.trim();
        // If it looks like an email, use first two letters of the local part
        if (name.includes("@")) {
            const local = name.split("@")[0];
            return (local.slice(0, 2) || "NA").toUpperCase();
        }
        const parts = name.split(/\s+/).filter(Boolean);
        if (parts.length === 1)
            return (parts[0].slice(0, 2) || "NA").toUpperCase();
        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    const determinePreviewOrientation = (width, height) => {
        let w = parseInt(width);
        let h = parseInt(height);
        // square and vertical should be portrait
        // this function helps return class names to help style the preview container when something is double sided
        if (w > h) {
            // landscape
            // column to be stacked one on top of the other
            return "flex_col";
        }
        else {
            // portrait
            // row to be stacked side by side
            return 'flex_row';
        }
    };
    return `
    <!doctype html>
    <html lang=en>
    <head>
        <meta charset=UTF-8>
        <meta name=viewport content="width=device-width,initial-scale=1">
        <title>Create Work Order</title>
        <link rel=preconnect href=https://fonts.googleapis.com>
        <link rel=preconnect href=https://fonts.gstatic.com crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            rel=stylesheet>
            <style>
            ${(0, styles_js_1.returnStyles)()}
            </style>
    </head>
    <body id="id_wo_body">
        <div class=id_wo_inner>
        <div class=id_wo_artwork_side>
        <div class=id_wo_artwork_section>
        <div class=${!isDoubleSided ? "artwork_preview_cont" : "ds_artwork_cont"}>
       ${!isDoubleSided ? `
         <div class="dimension_cont top">
        <div class=extension_line>
        <img class="dim_arrow one" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
        </div>
        <p class=dim_number>${(_a = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _a === void 0 ? void 0 : _a.itemWidth}</p>
        <div class=extension_line>
        <img class="dim_arrow two" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
        </div>
        </div>
        <div class="dimension_cont left">
        <div class=extension_line>
        <img class="dim_arrow three" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
        </div>
        <p class=dim_number>${(_b = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _b === void 0 ? void 0 : _b.itemHeight}</p>
        <div class=extension_line>
        <img class="dim_arrow four" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
        </div>
        </div>
        ` : ""}
        ${isDoubleSided ?
        `<div class="double_sided_preview_cont ${determinePreviewOrientation((_c = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _c === void 0 ? void 0 : _c.itemWidth, (_d = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _d === void 0 ? void 0 : _d.itemHeight)}">
                ${previewImageSrc.map((image, item) => {
            var _a;
            return (`
                <div class="img_wrap">
                    ${item === 0 ? `
                        <div class="dimension_cont top">
                            <div class=extension_line> 
                                <img class="dim_arrow one" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
                            </div>
                            <p class=dim_number>48in</p>
                            <div class=extension_line> 
                                <img class="dim_arrow two" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
                            </div>
                        </div>
                        <div class="dimension_cont left">
                            <div class=extension_line> 
                                <img class="dim_arrow three" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
                            </div>
                            <p class=dim_number>18in</p>
                            <div class=extension_line> 
                                <img class="dim_arrow four" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
                            </div>
                        </div>
                    ` : ""}
                    <p class="side_tag">Side ${item === 0 ? 'A' : 'B'}</p>
                    <img src="file:${image}" alt="Preview of ${(_a = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _a === void 0 ? void 0 : _a.orderNumber} item ${item}" class="art_preview">
                 </div>
                `);
        }).join('')}
            </div>`
        :
            `<img src="${previewImageSrc.includes('datacenter') ? `https://${previewImageSrc}` : `file:${previewImageSrc}`}" alt="Preview of ${(_e = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _e === void 0 ? void 0 : _e.orderNumber}" class=artwork_preview id=proof_artwork_preview>`}
        <p class="preview_quantity">${(_f = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _f === void 0 ? void 0 : _f.itemQuantity}x</p>
        </div>
        <!-- <p class="page_number">Page: ${(_g = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _g === void 0 ? void 0 : _g.itemNumber}</p> -->
        </div>
        <div class=id_wo_footer_section>
        <div class=wo_f_top_section>
        <div class=job_info_cont>
        <p><span class=large>${(_h = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _h === void 0 ? void 0 : _h.orderNumber}</span></p>
        <div class=item_spacer><small>ITEM</small><p>${(_j = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _j === void 0 ? void 0 : _j.itemNumber}</p></div>
        <p><span class=med>${(_k = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _k === void 0 ? void 0 : _k.itemName} | QTY: x${(_l = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _l === void 0 ? void 0 : _l.itemQuantity} | ${((_m = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _m === void 0 ? void 0 : _m.itemPrintedSides) || 'Single Sided'}</span></p>
        </div>
        <div class=job_info_ender>
        <p class=upper>${((_o = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _o === void 0 ? void 0 : _o.orderStatus) || 'Order Placed'}</p>
        </div>
        </div>
        <div class=wo_f_bt_section>
        <div class="wo_f_bt_col" id="color_specs_container">
        <div class=wo_f_bt_col_header>
        <small>Color Specifications</small>
        </div>
        <div class="wo_f_bt_col_body color_specs">
        <div class=wo_f_bt_col_body_img_cont>
        <img class=wo_f_bt_col_body_img src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/wysiwyg/IdentitySigns/WorkOrderAssets/full-color-print-2.png alt="Color Specs">
        <p class=id_po_text>Full Color Print</p>
        </div>
        </div>
        </div>
        <div class="wo_f_bt_col materials">
        <div class=wo_f_bt_col_header>
        <small>Material Specifications</small>
        </div>
        <div class="wo_f_bt_col_body" id="material_specs">
       
        <ul class="material_specs_list">
     ${((_s = (_r = (_q = (_p = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _p === void 0 ? void 0 : _p.itemMaterialSpecifications) === null || _q === void 0 ? void 0 : _q[0]) === null || _r === void 0 ? void 0 : _r.children) !== null && _s !== void 0 ? _s : [])
        .filter((cc) => (cc === null || cc === void 0 ? void 0 : cc.variableName) !== 'Machine')
        .map((cc) => `
                <li class="" id="${cc === null || cc === void 0 ? void 0 : cc.variableName}">${cc === null || cc === void 0 ? void 0 : cc.name}</li>
            `)
        .join('')}
        </ul>
        </div>
        </div>

        ${((_t = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _t === void 0 ? void 0 : _t.itemDescription) ? `
            <div class=wo_f_bt_col>
                <div class=wo_f_bt_col_header>
                    <small>Other Details</small>
                </div>
                <div class=wo_f_bt_col_body>
                    <p class=id_po_text description>${(0, helpers_js_1.stripHTMLDoc)((_u = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _u === void 0 ? void 0 : _u.itemDescription)}</p>
                </div>
            </div>`
        :
            ""}


        ${((_v = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _v === void 0 ? void 0 : _v.orderDeliveryInfo) ?
        `
                <div class=wo_f_bt_col>
                <div class=wo_f_bt_col_header>
                <small>Shipping</small>
                </div>

                <div class="wo_f_bt_col_body delivery_info">
                ${Array.isArray((_w = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _w === void 0 ? void 0 : _w.orderDeliveryInfo)
            ? (_x = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _x === void 0 ? void 0 : _x.orderDeliveryInfo.map((info) => {
                // Handle both string or object types safely
                const text = typeof info === "string" ? info : (info === null || info === void 0 ? void 0 : info.name) || "";
                // Split on actual newline characters
                if (text.includes("\n")) {
                    return text
                        .split(/\n+/) // <-- ✅ actual regex, not string
                        .map((line) => `<p class="id_po_text">${line.trim()}</p>`)
                        .join("");
                }
                else {
                    return `<p class="id_po_text">• ${text.trim()}</p>`;
                }
            }).join("")
            : ""}
                </div>
                </div>
            `
        : ""}
        </div>
        </div>
        </div>
        <div class=id_wo_sidebar>
        <div class=id_wo_sb_header>
        <img class=id_wo_logo alt=Logo src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/wysiwyg/IdentitySigns/WorkOrderAssets/id-stacked-logo-white-id.png>
        <p class=id_po_text>Salt Lake, UT | Seattle, WA</p>
        <a href=tel:+8017484750 class=id_po_text>801.748.4750</a>
        <a class=id_po_text href=mailto:sales@idsignco.com class=id_po_text>sales@idsignco.com</a>
        </div>
        <div class=id_wo_divider></div>
        <div class="sb_section id_wo_client_info_cont">

        <p class="id_po_text strong">Client</p>
        <p class=id_po_text>${((_y = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _y === void 0 ? void 0 : _y.orderClientName) || "NA"}</p>
        
        <div class=standard_divider></div>
        
        <p class="id_po_text strong">Contact</p>
        <p class=id_po_text>${((_z = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _z === void 0 ? void 0 : _z.contactName) || "NA"}</p>
        ${((_0 = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _0 === void 0 ? void 0 : _0.contactPhone) && ((_1 = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _1 === void 0 ? void 0 : _1.contactPhone) !== "undefined" ? `<p class=id_po_text>${(_2 = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _2 === void 0 ? void 0 : _2.contactPhone}</p>` : ""}
        ${((_3 = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _3 === void 0 ? void 0 : _3.contactEmail) && ((_4 = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _4 === void 0 ? void 0 : _4.contactEmail) !== "undefined" ? `<p class=id_po_text>${(_5 = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _5 === void 0 ? void 0 : _5.contactEmail}</p>` : ""}

        </div>
        <div class=standard_divider></div>
        <div class="sb_section revision_container">
        <p class="id_po_text strong">Revisions</p>
        <div class=revision_table>
        <div class=revision_table_header>
        <div class=revision_icon_cont><img src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/wysiwyg/IdentitySigns/WorkOrderAssets/date.png alt=""></div>
        <div class=revision_icon_cont><img src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/wysiwyg/IdentitySigns/WorkOrderAssets/revision.png alt=""></div>
        <div class=revision_icon_cont><img src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/wysiwyg/IdentitySigns/WorkOrderAssets/submit.png alt=""></div>
        </div>
        <div id=revision_table_data class=revision_table_data>
        ${revisionData && (revisionData === null || revisionData === void 0 ? void 0 : revisionData.revisionLog.map((r, i) => (`<div class=revision_table_row>
            <div class=revision_table_cell>
            <small>${(0, helpers_js_1.formatISODateToMMDDYY)(r === null || r === void 0 ? void 0 : r.date)}</small>
            </div>
            <div class=revision_table_cell><small>${i + 1 || "NA"}</small></div>
            <div class=revision_table_cell><small>${returnShortName(r === null || r === void 0 ? void 0 : r.submitter) || "NA"}</small></div>
            </div>`)).join(''))}
        </div>
        </div>
        <div class=id_wo_divider></div>
        <div class=sb_section>
        <p class=id_po_text>©2025 <br>Identity Signs</p>
        <p class=id_po_text><small>All designs represented are the sole property of Identity Signs and may not be reproduced in part or whole without written permission from Identity Signs.</small>
        </p>
        </div>

        <div class=id_wo_divider></div>

        <div class=sb_section>
        ${((_6 = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _6 === void 0 ? void 0 : _6.orderAssignedTo) && `
            <p class="id_po_text strong">Sales Person</p>
            <p class=id_po_text>${(_7 = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _7 === void 0 ? void 0 : _7.orderAssignedTo}</p>`}

        <div class=standard_divider></div>
        ${((_8 = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _8 === void 0 ? void 0 : _8.orderAssignedProjectManager) && `
            <p class="id_po_text strong">Project Manager</p>
            <p class=id_po_text>${(_9 = data === null || data === void 0 ? void 0 : data.orderInfo) === null || _9 === void 0 ? void 0 : _9.orderAssignedProjectManager}</p>`}

        <div class=standard_divider></div>
        ${((_10 = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _10 === void 0 ? void 0 : _10.itemDesigner) &&
        `
            <p class="id_po_text strong">Designer</p>
            <p class=id_po_text>${(_11 = data === null || data === void 0 ? void 0 : data.itemInfo) === null || _11 === void 0 ? void 0 : _11.itemDesigner}</p>
        `}

        </div>
        </div>
        </div>
        </div>
        <script>
            window.addEventListener("load", () => {
                const el = document.querySelector("#revision_table_data");
                if (!el) return;
                el.scrollTop = el.scrollHeight;
            });
        </script>
    </body>
    </html>
`;
};
exports.createProofHtml = createProofHtml;
/*
-- old style of material call out
    <div class="wo_f_bt_col_body_img_cont" id="${cc?.variableName}">
        <img class="wo_f_bt_col_body_img" src="https://identitysigns-x3-fai8o.your-cloudlab.com/media/wysiwyg/IdentitySigns/WorkOrderAssets/${findAssetImg(cc?.name)}" alt="${cc?.name.replace(/"/g, '')}">
        <p class="id_po_text">${cc?.name}</p>
    </div>
*/ 
//# sourceMappingURL=createProofHtml.js.map