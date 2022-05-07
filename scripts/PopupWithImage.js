import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
  constructor(selector) {
    super(selector)

  }

  openPopup() {
    this._container.classList.add('popup_opened');
  }
}
