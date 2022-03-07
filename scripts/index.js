const popup = document.querySelector('.popup');

let buttonEditProfile = document.querySelector('.profile__edit-button');
let editName = document.querySelector('.profile__name');
let editProfession = document.querySelector('.profile__profession');

// Находим форму в DOM
let formElement = document.querySelector('.edit-form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.edit-form__input_type_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.edit-form__input_type_profession'); // Воспользуйтесь инструментом .querySelector()

let btnClose = document.querySelector('.popup__button-close');

// Открытие формы
function openPopup() {
  jobInput.value = editProfession.textContent;
  nameInput.value = editName.textContent;
  popup.classList.add('popup_opened');
}

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  editName.textContent = nameInput.value;
  editProfession.textContent = jobInput.value;
  closePopup();
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);

// Закрытие окна
btnClose.addEventListener('click', closePopup);

buttonEditProfile.addEventListener('click', openPopup);

