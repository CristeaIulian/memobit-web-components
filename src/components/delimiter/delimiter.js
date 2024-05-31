import { listStyle } from "./list.style.js";
class Delimiter extends HTMLElement {
    constructor() {
        super();
        this.html = "";
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        const hasVerticalMargins = this.getAttribute("hasVerticalMargins") === "true";
        const hasTopMargin = this.getAttribute("hasTopMargin") === "true";
        const hasBottomMargin = this.getAttribute("hasBottomMargin") === "true";
        const hasCanceledHorizontalMargins = this.getAttribute("hasCanceledHorizontalMargins") === "true";
        const cssClasses = ["delimiter"];
        if (hasVerticalMargins) {
            cssClasses.push("delimiter-with-vertical-margins");
        }
        if (hasTopMargin) {
            cssClasses.push("delimiter-top-margin");
        }
        if (hasBottomMargin) {
            cssClasses.push("delimiter-bottom-margin");
        }
        if (hasCanceledHorizontalMargins) {
            cssClasses.push("delimiter-cancel-horizontal-margins");
        }
        this.html = `<div class="${cssClasses.join(" ")}"></div>`;
        this.render();
    }
    disconnectedCallback() { }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        <div class="main">
          ${listStyle}
          ${this.html}
        </div>
    `;
        }
    }
}
customElements.define("mem-delimiter", Delimiter);
//# sourceMappingURL=delimiter.js.map