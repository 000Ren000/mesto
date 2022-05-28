import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(selector) {
    super(selector);
    this._btnSubmit = this._form.querySelector('.edit-form__button-save');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitAction = submitAction;
  }

  sendSubmit() {
    this._form.addEventListener('submit',  this._handleSubmitAction);
  }

  closePopup() {
    super.closePopup();
    this._form.removeEventListener('submit', this._handleSubmitAction);
  }


  showWaiting() {
    this._btnSubmit.textContent = 'Удаление...';
  }

  hideWaiting() {
    this._btnSubmit.textContent = 'Да';
  }
}
