export class FormValidator {
  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form.querySelector(data.formSelector);
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
  _deactivateButton() {
    const button = this._form.querySelector(this._submitButtonSelector);
    if (!this._form.checkValidity()) {
      button.setAttribute('disabled', 'disabled');
      button.classList.add(this._inactiveButtonClass);
    } else {
      button.removeAttribute('disabled');
      button.classList.remove(this._inactiveButtonClass);
    }
  }


  //Действия со всеми инпутами на форме
  _eventInputsForm() {
    if (this._form !== null) {
      const _inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
      this._deactivateButton();
      //Добавление слушателей на инпут
      _inputList.forEach(input => input.addEventListener('input', () => {
        this._handleFormInput(input);
        this._deactivateButton();
      }));
    }
  }

  disableButton(){
    this._deactivateButton();
  }

  enableValidation() {
    this._eventInputsForm();
  }
}
