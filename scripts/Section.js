export class Section {
  constructor({items, render}, selector) {
    this._items = items;
    this._render = render;
    this._selector = document.querySelector(selector);
  }
}
