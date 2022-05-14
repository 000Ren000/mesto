import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(container, sender) {
    super(container);
    this._sender = sender;
    this._inputList = this._form.querySelectorAll('.edit-form__input');
  }

  _getInputValues(){
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListener() {
    this._btnClose.addEventListener('click',  () => super.closePopup());
    this._form.addEventListener('keydown', (evt) => this._handleEscClos(evt, this._container));
    this._container.addEventListener('click',  (event) => {
      if (event.target === event.currentTarget) {
        this.closePopup(this._container);
      }
    });

    this._form.addEventListener('submit', this._sender);
  }

   resetPopup() {
    this._inputList.forEach(input => input.value = null);
  }

  closePopup() {
    // container.classList.remove('popup_opened');
    // const form = container.querySelector('.edit-form');
    // form.removeEventListener('keydown', (evt) => this._handleEscClos(container));
    super.closePopup(this._container);
    this.resetPopup();
  }
}
