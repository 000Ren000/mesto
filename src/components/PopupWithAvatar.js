import Popup from './Popup.js';

export class PopupWithAvatar extends Popup {
  constructor(selector) {
    super(selector);
  }

  setSubmitAction(submitAction) {
    this._handleSubmitAction = submitAction;
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', this._handleSubmitAction);
  }

  closePopup() {
    super.closePopup();
    this._form.removeEventListener('submit', this._handleSubmitAction);
  }
  openPopup(item, card) {
    super.openPopup();
    this._setEventListener(item, card)
  }
}
