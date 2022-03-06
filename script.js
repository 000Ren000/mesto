const popup = document.querySelector('.popup');

const card = document.querySelector('.photo__cards');

let editForm = document.querySelector('.profile__edit-button');
let editName = document.querySelector('.profile__name');
let editProfession = document.querySelector('.profile__profession');

// Находим форму в DOM
let formElement = document.querySelector('.popup'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.edit-form__name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.edit-form__profession'); // Воспользуйтесь инструментом .querySelector()

let btnSave = formElement.querySelector('.edit-form__button-save');
let btnClose = formElement.querySelector('.edit-form__button-close');

// Открытие формы
function openPopup() {
  jobInput.value = editProfession.textContent;
  nameInput.value = editName.textContent;
  openForm();
}

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  editName.textContent = nameInput.value;
  editProfession.textContent = jobInput.value;
  closeForm();
}

//Открыть форму
function openForm() {
  popup.classList.add('popup_opened');
}
//Закрыть форму
function closeForm() {
  popup.classList.remove('popup_opened');
}
// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);

// Закрытие окна
btnClose.addEventListener('click', closeForm);

editForm.addEventListener('click', openPopup);

popup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    closeForm();
  }
});



