import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup{
  constructor(selector, sender) {
    super(selector);
    this._sender = sender;
  }
  _setEventListener(item) {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => this._sender(evt, item));
  }
  openPopup(item) {
    super.openPopup();
    this._setEventListener(item)
  }
}
