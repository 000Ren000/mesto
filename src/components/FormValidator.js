export class FormValidator {
  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form.querySelector(data.formSelector);
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
  }

  //Проверка поля на валидность
  _isValid(input) {
    const validationResult = {};
    validationResult.status = input.validity.valid;
    validationResult.message = input.validationMessage;
    return validationResult;
  }

  //Отображение ошибки
  _handleFormInput(input) {
    const span = this._form.querySelector(`#${input.id}-error`);
    const validationResult = this._isValid(input);
    if (!validationResult.status) {
      input.classList.add(this._inputErrorClass);
      span.textContent = validationResult.message;
    } else {
      input.classList.remove(this._inputErrorClass);
      span.textContent = '';
    }
  }

  //Деактивация енопки
  _toggleButtonState() {
    if (!this._form.checkValidity()) {
      this._button.setAttribute('disabled', 'disabled');
      this._button.classList.add(this._inactiveButtonClass);
    } else {
      this._button.removeAttribute('disabled');
      this._button.classList.remove(this._inactiveButtonClass);
    }
  }


  //Действия со всеми инпутами на форме
  _setEventListeners() {
    if (this._form !== null) {
      this._toggleButtonState();
      //Добавление слушателей на инпут
      this._inputList.forEach(input => input.addEventListener('input', () => {
        this._handleFormInput(input);
        this._toggleButtonState();
      }));
    }
  }

  disableButton(){
    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}
