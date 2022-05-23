export class Section {
  constructor({renderer}, selector) {
    // this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  setItem(element, revers = false) {
    if (revers) this._container.prepend(element);
    else  this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(items) {
    this.clear();
    items.forEach(item => {
      this._renderer(item);
    });
  }



  addItem(item, reverse) {
    this._renderer(item, reverse);
  }
}
