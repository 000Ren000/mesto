import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(container, handleSubmit) {
    super(container);
    this._handleSubmit = handleSubmit;
    this._inputList = this._form.querySelectorAll('.edit-form__input');
    this._btnSubmit = this._form.querySelector('.edit-form__button-save');
  }

  getInputValues(){
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }


  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', this._handleSubmit);
  }

   resetPopup() {
     this._form.reset();
  }

  closePopup() {
    super.closePopup();
    this.resetPopup();
  }
  showWaiting() {
    this._oldName = this._btnSubmit.textContent;
    this._btnSubmit.textContent = 'Сохранение...';
  }
  hideWaiting() {
    this._btnSubmit.textContent = this._oldName;
  }
}
