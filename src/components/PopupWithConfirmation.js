import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(selector) {
    super(selector);
    this._btnSubmit = this._form.querySelector('.edit-form__button-save');

  }

  setSubmitAction(submitAction) {
    this._handleSubmitAction = submitAction;
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', this._handleSubmitAction);
  }

  openPopup(item, card) {
    super.openPopup();
    // this._setEventListener(item, card)
  }

  closePopup(item, card) {
    super.closePopup();
    this._form.removeEventListener('submit', this._handleSubmitAction);
  }

  getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  resetPopup() {
    this._form.reset();
  }

  showWaiting() {
    this._btnSubmit.textContent = 'Сохранение...';
  }

  closeWaiting() {
    this._btnSubmit.textContent = 'Сохранить';
  }

}
