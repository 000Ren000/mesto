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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

const photoCards = document.querySelector('.photo__cards');

initialCards.forEach( crd => {
  const photoCard = document.querySelector('#photo__card').content;
  const card = photoCard.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = crd.link;
  card.querySelector('.card__title').textContent = crd.name;
  photoCards.append(card);
  console.log(card);
})
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

