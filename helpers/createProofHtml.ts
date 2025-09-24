import { stripHTMLDoc, formatISODateToMMDDYY, findAssetImg } from "./helpers.js";
import { returnStyles } from './styles.js'
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



export const createProofHtml = (data: any, revisionData: any, previewImageSrc: string) => {

    function returnShortName(fullname:string) {
        let a = fullname.split(' ')
        return `${a[0][0]}${a[1][0]}`.toUpperCase()
    }

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
            ${returnStyles()}
            </style>
    </head>
    <body id="id_wo_body">
        <div class=id_wo_inner>
        <div class=id_wo_artwork_side>
        <div class=id_wo_artwork_section>
        <div class=artwork_preview_cont>
        <div class="dimension_cont top">
        <div class=extension_line>
        <img class="dim_arrow one" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
        </div>
        <p class=dim_number>${data.itemInfo.itemWidth}</p>
        <div class=extension_line>
        <img class="dim_arrow two" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
        </div>
        </div>
        <div class="dimension_cont left">
        <div class=extension_line>
        <img class="dim_arrow three" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
        </div>
        <p class=dim_number>${data.itemInfo.itemHeight}</p>
        <div class=extension_line>
        <img class="dim_arrow four" alt=arrow src=https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/arrow.png>
        </div>
        </div>
        <img src="file:${previewImageSrc}" alt="Preview of ${data.orderInfo.orderNumber}" class=artwork_preview id=proof_artwork_preview>
        <p class="preview_quantity">${data.itemInfo.itemQuantity}x</p>
        </div>
        <!-- <p class="page_number">Page: ${data.itemInfo.itemNumber}</p> -->
        </div>
        <div class=id_wo_footer_section>
        <div class=wo_f_top_section>
        <div class=job_info_cont>
        <p><span class=large>${data.orderInfo.orderNumber}</span></p>
        <div class=item_spacer><small>ITEM</small><p>${data.itemInfo.itemNumber}</p></div>
        <p><span class=med>${data.itemInfo.itemName} - ${data.itemInfo.itemQuantity}x</span></p>
        </div>
        <div class=job_info_ender>
        <p class=upper>${data.orderInfo.orderStatus}</p>
        </div>
        </div>
        <div class=wo_f_bt_section>
        <div class=wo_f_bt_col>
        <div class=wo_f_bt_col_header>
        <small>Color Specifications</small>
        </div>
        <div class=wo_f_bt_col_body>
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
        <div class=wo_f_bt_col_body>
        ${data.itemInfo.itemMaterialSpecifications[0].children.map((cc: any) => {
        if (cc.variableName === 'Machine') {
            return null
        }
        return `
                <div class=wo_f_bt_col_body_img_cont id="${cc.variableName}">
                <img class=wo_f_bt_col_body_img src="https://identitysigns-x3-fai8o.your-cloudlab.com/media/wysiwyg/IdentitySigns/WorkOrderAssets/${findAssetImg(cc.name)}" alt="${cc.name}">
                <p class=id_po_text>${cc.name}</p>
                </div>
            `
    })
            .join("")}
        
        </div>
        </div>
        <div class=wo_f_bt_col>
        <div class=wo_f_bt_col_header>
        <small>Description</small>
        </div>
        <div class=wo_f_bt_col_body>
        <p class=id_po_text>${stripHTMLDoc(data.itemInfo.itemDescription)}</p>
        </div>
        </div>
        <div class=wo_f_bt_col>
        <div class=wo_f_bt_col_header>
        <small>Shipping</small>
        </div>
        <div class=wo_f_bt_col_body>
            ${data.orderInfo.orderDeliveryInfo && data.orderInfo.orderDeliveryInfo.map((info: any) => (
                `<p class=id_po_text>• ${info.name}</p>`
            )).join('')}
        </div>
        </div>
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
        <p class=id_po_text>${data.orderInfo.orderClientName || "NA"}</p>
        
        <div class=standard_divider></div>
        
        <p class="id_po_text strong">Contact</p>
        <p class=id_po_text>${data.orderInfo.contactName || "NA"}</p>
        ${data.orderInfo?.contactPhone ? `<p class=id_po_text>${data.orderInfo?.contactPhone}</p>` : ""}
        ${data.orderInfo?.contactEmail ? `<p class=id_po_text>${data.orderInfo?.contactEmail}</p>` : ""}

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
        <div class=revision_table_data>
        ${revisionData && revisionData.map((r: any) => (
                `<div class=revision_table_row>
            <div class=revision_table_cell>
            <small>${formatISODateToMMDDYY(r?.revisionDate)}</small>
            </div>
            <div class=revision_table_cell><small>${r?.revisionNumber || "NA"}</small></div>
            <div class=revision_table_cell><small>${returnShortName(r?.submitter) || "NA"}</small></div>
            </div>`
            )).join('')
        }
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
        <p class="id_po_text strong">Sales Person</p>
        <p class=id_po_text>${data.orderInfo.orderAssignedTo}</p>
        <div class=standard_divider></div>
        <p class="id_po_text strong">Project Manager</p>
        <p class=id_po_text>${data.orderInfo.orderAssignedProjectManager}</p>
        <div class=standard_divider></div>
        <p class="id_po_text strong">Designer</p>
        <p class=id_po_text>${data.itemInfo.itemDesigner}</p>
        </div>
        </div>
        </div>
        </div>
    </body>
    </html>
`;
};
