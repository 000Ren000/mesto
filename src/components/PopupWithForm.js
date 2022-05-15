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
    super.setEventListener();
    this._form.addEventListener('submit', this._sender);
  }

   resetPopup() {
     this._form.reset();
  }

  closePopup() {
    super.closePopup(this._container);
    this.resetPopup();
  }
}
