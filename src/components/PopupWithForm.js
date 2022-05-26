import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(container, sender) {
    super(container);
    this._sender = sender;
    this._inputList = this._form.querySelectorAll('.edit-form__input');
    this._btnSubmit = this._form.querySelector('.edit-form__button-save');
  }

  getInputValues(){
    this._formValues = {};
    console.log(this._inputList);
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
  showWaiting() {
    this._btnSubmit.textContent = 'Сохранение...';
  }
  closeWaiting() {
    this._btnSubmit.textContent = 'Сохранить';
  }
}
