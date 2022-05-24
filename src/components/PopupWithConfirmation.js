import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(selector) {
    super(selector);
    // this._sender = sender;
  }

  setSubmitAction(submitAction) {
    this._handleSubmitAction = submitAction;
  }
  _setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', this._handleSubmitAction);
  }

  openPopup(item, card) {
    super.openPopup();
    this._setEventListener(item, card)
  }

  closePopup(item, card) {
    super.closePopup();
    this._form.removeEventListener('submit', this._handleSubmitAction);
  }

}
