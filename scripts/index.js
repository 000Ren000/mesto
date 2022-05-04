import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './utils.js';
import {param} from './utils.js';
import {image, imagePopup, imageDescription} from './utils.js';
import {btnEditProfile, btnAddCard, btnClosePopup} from './utils.js';
import {profileName, profilePopupName, profilePopupProfession, profilePopup, profileProfession} from './utils.js';
import {cardPopup, cardName, cardLink, photoCards} from './utils.js';
import {allPopups} from './utils.js';


allPopups.forEach(popup => {
  popup.addEventListener("click", function (event) {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});

const cardPopupValitator = new FormValidator(param, cardPopup);
cardPopupValitator.enableValidation();

const profilePopupValidator = new FormValidator(param, profilePopup);
profilePopupValidator.enableValidation();

profilePopupName.value = profileName.textContent;
profilePopupProfession.value = profileProfession.textContent;

const createCard = (item, selector, revers = false) => {
  const card = new Card(item, selector);
    if (revers) photoCards.prepend(card.createCard());
    else  photoCards.append(card.createCard());
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

function resetPopup() {
  cardName.value = null;
  cardLink.value = null;
  cardPopupValitator.disableButton();
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
  resetPopup(cardPopup);
});








