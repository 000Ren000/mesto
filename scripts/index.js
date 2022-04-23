import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const btnEditProfile = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const btnAddCard = document.querySelector('.profile__add-button');

const profilePopup = document.querySelector('#edit-form');
const profilePopupName = profilePopup.querySelector('.edit-form__input_type_name');
const profilePopupProfession = profilePopup.querySelector('.edit-form__input_type_profession');
const btnClosePopup = document.querySelectorAll('.popup__button-close');

const cardPopup = document.querySelector('#add-Form');
const cardName = cardPopup.querySelector('.edit-form__input_type_name');
const cardLink = cardPopup.querySelector('.edit-form__input_type_link');

const allPopups = document.querySelectorAll('.popup');

import {initialCards} from './utils.js';
import {param} from './utils.js';


profilePopupName.value = profileName.textContent;
profilePopupProfession.value = profileProfession.textContent;

const createCard = (item, selector, revers = false) => {
  const card = new Card(item, selector);
  card.renderCard(revers);
}

initialCards.forEach(item => {
 createCard(item, '#photo__card');
});


function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closePopup(form) {
  form.classList.remove('popup_opened');
  form.removeEventListener('keydown', closeByEsc);
}

function openPopup(form) {
  form.classList.add('popup_opened');
  form.addEventListener('keydown', closeByEsc);
}


btnEditProfile.addEventListener('click', function (){
  profilePopupName.value = profileName.textContent;
  profilePopupProfession.value = profileProfession.textContent;
  openPopup(profilePopup);
});

profilePopup.addEventListener('submit', function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = profilePopupName.value;
  profileProfession.textContent = profilePopupProfession.value;
  closePopup(profilePopup);
});

btnClosePopup.forEach(function (btnClose) {
  btnClose.addEventListener('click', function() {
    const form = btnClose.closest('.popup');
    closePopup(form);
  });
});

btnAddCard.addEventListener('click', function () {
  openPopup(cardPopup);
});

cardPopup.addEventListener('submit', function (event) {
  event.preventDefault();
  const cardValue = {
    name: cardName.value,
    link: cardLink.value
  }
  createCard(cardValue, '#photo__card', true);
  closePopup(cardPopup);
  cardName.value = '';
  cardLink.value = '';
  const formValitator = new FormValidator(param, cardPopup);
  formValitator.enableValidation();
});

allPopups.forEach(popup => {
 popup.addEventListener("click", function (event) {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
 const formValitator = new FormValidator(param, popup);
 formValitator.enableValidation();
});






