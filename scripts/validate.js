function enableValidation () {
  const formList = Array.from(document.querySelectorAll('.edit-form'));
    formList.forEach(form => eventInputsForm(form));
}

//Отображение ошибки
function handleFormInput (input, form) {
  const span = form.querySelector(`#${input.id}-error`);
  const validationResult = isValid(input);
  if (!validationResult.status) {
    input.classList.add('popup__input-error');
    span.textContent = validationResult.message;
  }
  else {
    input.classList.remove('popup__input-error');
    span.textContent = '';
  }
}

//Проверка поля на валидность
function isValid(input) {
  const validationResult = {}
  validationResult.status = input.validity.valid;
  validationResult.message = input.validationMessage;
  return validationResult;
}


//Действия со всеми инпутами на форме
function eventInputsForm (form) {
  const inputList = Array.from(form.querySelectorAll('.edit-form__input'));
  //Добавление слушателей на инпут
  inputList.forEach(input => input.addEventListener('input', () =>
    handleFormInput(input, form)));
}



//найти все формы




// //проверить валидна ли форма
//
// function  handleFormInput(event) {
//   const form = event.currentTarget;
//   const input = event.target;
//   // setCustomError(input);
//   setFieldError(input);
//   setSubmitButtonState(form);
// }

// function setCustomError(input) {
//   const validity = input.validity;
//   input.setCustomValidity('');
//   if (validity.tooLong) {
//     const currentLength = input.length;
//     const max = input.getAttribute('maxlength');
//     input.setCustomValidity(`Введено ${currentLength} символа из ${max}`);
//   }
//   if (validity.tooShort) {
//     input.setCustomValidity(`Поле не должно быть пустым`);
//   }
//   if (validity.typeMismatch) {
//     input.setCustomValidity('Это не ссылка');
//   }
// }
//
function setFieldError (input) {
   const span = document.querySelector(`#${input.id}-error`);
   span.textContent = input.validationMessage;
   input.classList.add('popup__input-error');
}
//
// function setSubmitButtonState(form) {
//   const button = form.querySelector('.edit-form__button-save');
//   const isValidity = form.checkValidity();
//
//   if (!isValidity) {
//       button.removeAttribute('disabled');
//       button.classList.add('popup__button_disabled');
//         } else {
//       button.setAttribute('disabled', 'disabled');
//     button.classList.remove('popup__button_disabled');
//   }
// }

enableValidation();
