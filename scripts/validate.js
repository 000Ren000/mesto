
function enableValidation (parameters) {
  const formList = Array.from(document.querySelectorAll(parameters.formSelector));
  formList.forEach(form => eventInputsForm(form));

//Отображение ошибки
  function handleFormInput(input, form) {
    const span = form.querySelector(`#${input.id}-error`);
    const validationResult = isValid(input);
    if (!validationResult.status) {
      input.classList.add(parameters.inputErrorClass);
      span.textContent = validationResult.message;
    } else {
      input.classList.remove(parameters.inputErrorClass);
      span.textContent = '';
    }
  }

//Проверка поля на валидность
  function isValid(input) {
    const validationResult = {};
    validationResult.status = input.validity.valid;
    validationResult.message = input.validationMessage;
    return validationResult;
  }

//Действия со всеми инпутами на форме
  function eventInputsForm(form) {
    const inputList = Array.from(form.querySelectorAll(parameters.inputSelector));
    deactivateButton(form, inputList);
    //Добавление слушателей на инпут
    inputList.forEach(input => input.addEventListener('input', () => {
      handleFormInput(input, form);
      deactivateButton(form, inputList);
    }));

  }

  //Деактивация енопки
  function deactivateButton(form, inputList) {
    const button = form.querySelector(parameters.submitButtonSelector);
    if (!form.checkValidity()) {
      button.setAttribute('disabled', 'disabled');
      button.classList.add(parameters.inactiveButtonClass);
    } else {
      button.removeAttribute('disabled');
      button.classList.remove(parameters.inactiveButtonClass);
    }
  }
}
enableValidation({
  formSelector: '.edit-form',
  inputSelector: '.edit-form__input',
  submitButtonSelector: '.edit-form__button-save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
