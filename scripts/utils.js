export const param = {
  formSelector: '.edit-form',
  inputSelector: '.edit-form__input',
  submitButtonSelector: '.edit-form__button-save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://www.nastol.com.ua/pic/201903/1366x768/nastol.com.ua-325658.jpg'
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

export const image = document.querySelector('.popup__image');
export const imagePopup =document.querySelector('#image-popup');
export const imageDescription =document.querySelector('.popup__image-description');

export const btnEditProfile = document.querySelector('.profile__edit-button');
export const profileName = document.querySelector('.profile__name');
export const profileProfession = document.querySelector('.profile__profession');
export const btnAddCard = document.querySelector('.profile__add-button');

export const profilePopup = document.querySelector('#edit-form');
export const profilePopupName = profilePopup.querySelector('.edit-form__input_type_name');
export const profilePopupProfession = profilePopup.querySelector('.edit-form__input_type_profession');
export const btnClosePopup = document.querySelectorAll('.popup__button-close');

export const cardPopup = document.querySelector('#add-Form');
export const cardName = cardPopup.querySelector('.edit-form__input_type_name');
export const cardLink = cardPopup.querySelector('.edit-form__input_type_link');
export const photoCards = document.querySelector('.photo__cards');


export const allPopups = document.querySelectorAll('.popup');
