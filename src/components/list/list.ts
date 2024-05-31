import { listStyle } from "./list.style.js";
import { ListItems } from "./types";

class List extends HTMLElement {
  private _items: ListItems[] = [];
  private html = "";

  constructor() {
    super();
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

  public connectedCallback(): void {
    this.setList();
    this.render();
  }

  private setList(): void {
    this.html = this._items
      .map((category): string => {
        const links: string = category.items
          .map(
            (item): string =>
              `<li>
            <a href="${item.path}" class="${item.isSelected ? "isSelected" : ""}">${item.label}</a>
          </li>`,
          )
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

  private render(): void {
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
