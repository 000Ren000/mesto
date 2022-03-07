const popup = document.querySelector('.popup');

let buttonEditProfile = document.querySelector('.profile__edit-button');
let editName = document.querySelector('.profile__name');
let editProfession = document.querySelector('.profile__profession');

// Находим форму в DOM
let formElement = document.querySelector('.edit-form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.entry_type_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.entry_type_profession'); // Воспользуйтесь инструментом .querySelector()

let btnClose = formElement.querySelector('.popup__button-close');

// Открытие формы
function openPopup() {
  jobInput.value = editProfession.textContent;
  nameInput.value = editName.textContent;
  togleForm();
}

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  editName.textContent = nameInput.value;
  editProfession.textContent = jobInput.value;
  togleForm();
}

function togleForm() {
  if (!popup.classList.contains('popup_opened')) {
    popup.classList.add('popup_opened');
  } else popup.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);

// Закрытие окна
btnClose.addEventListener('click', togleForm);

buttonEditProfile.addEventListener('click', openPopup);

popup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    togleForm();
  }
});
