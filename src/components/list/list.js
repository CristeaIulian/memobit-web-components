import { listStyle } from "./list.style.js";
class List extends HTMLElement {
    constructor() {
        super();
        this._items = [];
        this.html = "";
        this.attachShadow({ mode: "open" });
    }
    set items(val) {
        this._items = val;
        this.setList();
        this.render();
    }
    get items() {
        return this._items;
    }
    connectedCallback() {
        this.setList();
        this.render();
    }
    setList() {
        this.html = this._items
            .map((category) => {
            const links = category.items
                .map((item) => `<li>
            <a href="${item.path}" class="${item.isSelected ? "isSelected" : ""}">${item.label}</a>
          </li>`)
                .join("");
            return `
          <label class="title">${category.label}</label>
          <ul>
              ${links}
          </ul>
      `;
        })
            .join("");
    }
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
customElements.define("mem-list", List);
//# sourceMappingURL=list.js.map