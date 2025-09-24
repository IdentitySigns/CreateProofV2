"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnStyles = void 0;
const returnStyles = () => {
    return `
        a,
        abbr,
        acronym,
        address,
        applet,
        article,
        aside,
        audio,
        b,
        big,
        blockquote,
        body,
        canvas,
        caption,
        center,
        cite,
        code,
        dd,
        del,
        details,
        dfn,
        div,
        dl,
        dt,
        em,
        embed,
        fieldset,
        figcaption,
        figure,
        footer,
        form,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        header,
        hgroup,
        html,
        i,
        iframe,
        img,
        ins,
        kbd,
        label,
        legend,
        li,
        mark,
        menu,
        nav,
        object,
        ol,
        output,
        p,
        pre,
        q,
        ruby,
        s,
        samp,
        section,
        small,
        span,
        strike,
        strong,
        sub,
        summary,
        sup,
        table,
        tbody,
        td,
        tfoot,
        th,
        thead,
        time,
        tr,
        tt,
        u,
        ul,
        var,
        video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
        display: block;
        }
        body {
        line-height: 1;
        font-family: Arial, sans-serif;
        }
        ol,
        ul {
        list-style: none;
        }
        blockquote,
        q {
        quotes: none;
        }
        blockquote:after,
        blockquote:before,
        q:after,
        q:before {
        content: "";
        content: none;
        }
        table {
        border-collapse: collapse;
        border-spacing: 0;
        }
        img {
        display: block;
        width: 100%;
        height: auto;
        }
        button,
        input,
        select,
        textarea {
        font-family: inherit;
        font-size: 100%;
        }
        :focus {
        outline: 0;
        }
        a {
        text-decoration: none;
        color: inherit;
        }
        hr {
        height: 1px;
        border: 0;
        background-color: #ccc;
        margin: 0;
        }
        :root {
        --id-main-red: #ea0029;
        --id-secondary-red: #c90025;
        --id-main-black: #1f1f1f;
        --id-gray: #d7d7d7;
        --id-secondary-gray: #f7f7f7;
        --id-inform: #2684fc;
        --id-danger: #ea0029;
        --id-white: #ffffff;
        --id-modal-white: #ffffff1f;
        --id-modal-bkg: #00000078;
        --id-modal-bkg-blur: blur(10px);
        --id-main-shadow: 0 6px 13px #0000002b;
        --id-main-border-radius: 0.25rem;
        --id-main-sm-border-radius: 4px;
        }
        html {
        font-size: 14px;
        }
        h1 {
        font-size: 2.986rem;
        }
        h2 {
        font-size: 2.488rem;
        }
        h3 {
        font-size: 2.074rem;
        }
        .large,
        h4 {
        font-size: 1.5rem;
        font-weight: 500;
        }
        .med,
        h5 {
        font-size: 1.44rem;
        }
        h6 {
        font-size: 1.2rem;
        }
        p {
        font-size: 1rem;
        }
        .id_po_text {
        padding-bottom: 0.25rem;
        }
        small {
        font-size: 0.833rem;
        }
        .strong {
        font-weight: 700;
        }
        .upper {
        text-transform: uppercase;
        }
        body {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: Montserrat, serif;
        }
        #id_wo_body {
        width: 1632px;
        height: 1056px;
        min-width: 1632px;
        min-height: 1056px;
        padding: 20px;
        margin: 0 auto;
        background-color: #fff;
        }
        .id_wo_inner {
        border: 3px solid var(--id-secondary-gray);
        height: 100%;
        width: 100%;
        display: flex;
        }
        .id_wo_artwork_side {
        max-width: 85%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        border-right: 3px solid var(--id-secondary-gray);
        }
        .id_wo_artwork_section {
        height: 100%;
        max-height: 85%;
        width: 100%;
        display: flex;
        position: relative;
        }
        .artwork_preview_cont {
        width: max-content;
        max-width: 80%;
        position: relative;
        margin: auto;
        }
        .artwork_preview_size {
        padding-bottom: 10px;
        }
        .artwork_preview {
        max-height: 650px;
        max-width: 1000px;
        display: block;
        margin: auto;
        box-shadow: 0 6px 13px rgba(0, 0, 0, 0.178);
        }
        .id_wo_footer_section {
        width: 100%;
        height: 20%;
        border-top: 3px solid var(--id-secondary-gray);
        display: flex;
        flex-direction: column;
        }
        .id_wo_sidebar {
        width: 15%;
        overflow-y: hidden;
        padding-left: 15px;
        padding-top: 15px;
        }
        .id_wo_logo {
        width: 45%;
        margin-bottom: 10px;
        height: auto;
        }
        .id_wo_divider {
        width: 100%;
        height: 3px;
        background-color: var(--id-main-red);
        margin: 0.25rem 0;
        border-radius: 1pc;
        }
        .id_wo_sb_header {
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0.5rem 0.5rem 0;
        }
        .wo_f_top_section {
        height: 20%;
        padding-left: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 3px solid var(--id-secondary-gray);
        }
        .job_info_cont {
        display: flex;
        align-items: center;
        gap: 15px;
        height: 100%;
        }
        .item_spacer {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80%;
        color: var(--id-white);
        background-color: var(--id-gray);
        }
        .job_info_ender {
        align-self: flex-end;
        display: flex;
        align-items: center;
        padding: 0 20px;
        background-color: var(--id-main-black);
        color: var(--id-white);
        height: 100%;
        }
        .wo_f_bt_section {
        flex-grow: 1;
        display: flex;
        overflow-x: hidden;
        }
        .wo_f_bt_col {
        min-width: 150px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        }
        .wo_f_bt_col:not(:last-child) {
        border-right: 3px solid var(--id-secondary-gray);
        }
        .wo_f_bt_col.materials {
        max-width: 700px;
        flex-grow: 1;
        }
        .wo_f_bt_col_header {
        border-bottom: 3px solid var(--id-secondary-gray);
        padding: 5px;
        text-align: center;
        }
        .wo_f_bt_col_body {
        height: 100%;
        display: flex;
        gap: 10px;
        }
        .wo_f_bt_col_body > p.id_po_text {
        padding: 0.75rem;
        }
        .wo_f_bt_col_body_img_cont {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 15px;
        padding: 0 0 0 0.75rem;
        }
        .wo_f_bt_col_body_img_cont > .id_po_text {
        max-width: 100px;
        }
        .wo_f_bt_col_body_img {
        width: 60px;
        border-radius: 0.25rem;
        }
        .standard_divider {
        height: 1px;
        background-color: var(--id-main-black);
        border-radius: 1pc;
        width: 100%;
        margin: 0.25rem 0;
        }
        .sb_section {
        padding: 0.5rem 0;
        }
        .revision_container > table {
        width: 100%;
        border-collapse: collapse;
        }
        .revision_table_header {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 5px;
        border-bottom: 1px solid var(--id-main-black);
        }
        .revision_icon_cont {
        width: 33.3%;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: left;
        }
        .revision_icon_cont > img {
        max-width: 16px;
        max-height: 16px;
        }
        .revision_table_row {
        display: flex;
        }
        .revision_table_row:not(:last-child) {
        border-bottom: 1px solid var(--id-main-black);
        }
        .revision_table_cell {
        max-width: 33.3%;
        width: 100%;
        padding: 2px;
        }
        .revision_table_cell:not(:last-child) {
        border-right: 1px solid var(--id-main-black);
        }
        .dimension_cont {
        position: absolute;
        z-index: 9;
        display: flex;
        align-items: center;
        }
        .dimension_cont.left {
        height: 100%;
        width: 40px;
        left: -60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-top: 2px solid var(--id-main-black);
        border-bottom: 2px solid var(--id-main-black);
        }
        .dimension_cont.top {
        justify-content: space-between;
        height: 40px;
        top: -60px;
        width: 100%;
        border-left: 2px solid var(--id-main-black);
        border-right: 2px solid var(--id-main-black);
        }
        .extension_line {
        position: relative;
        }
        .dimension_cont.top > .extension_line {
        outline: 1px solid var(--id-main-black);
        width: 40%;
        }
        .dimension_cont.left > .extension_line {
        outline: 1px solid var(--id-main-black);
        height: 40%;
        }
        .dim_number {
        font-weight: 500;
        font-size: small;
        }
        .dim_arrow {
        width: 9px;
        height: 9px;
        position: absolute;
        }
        .dim_arrow.one {
        transform: rotate(90deg);
        }
        .dim_arrow.two {
        transform: rotate(-90deg);
        }
        .dim_arrow.three {
        transform: rotate(180deg);
        }
        .dim_arrow.four {
        transform: rotate(0);
        }
        .top .extension_line {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        }
        .top .extension_line:last-child {
        justify-content: flex-end;
        }
        .left .extension_line {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        }
        .left .extension_line:last-child {
        justify-content: end;
        }
        .dimension_cont.left > .extension_line:last-child::after {
        transform: rotate(30deg);
        bottom: 0;
        right: 0;
        }
        .preview_quantity {
        position: absolute;
        right: -2rem;
        bottom: 0;
        }
        .page_number {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        }
    `;
};
exports.returnStyles = returnStyles;
//# sourceMappingURL=styles.js.map