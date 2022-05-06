import {Card} from './Card.js';
import {Section} from './Section.js';
import Popup from './Popup.js';
import {FormValidator} from './FormValidator.js';
import {initialCards, param, btnEditProfile, btnAddCard,
  btnClosePopup, profileName, profilePopupName, profilePopupProfession,
  profilePopup, profileProfession, popupCard, cardName,
  cardLink, photoCards ,allPopups} from './utils.js';
import PopupWithForm from './PopupWithForm.js';


const cardPopup = new PopupWithForm('#add-Form');
// allPopups.forEach(popup => {
//   popup.addEventListener("click", function (event) {
//     if (event.target === event.currentTarget) {
//       // closePopup(popup); //todo ClosePopup
//     }
//   });
// });

const cardPopupValitator = new FormValidator(param, popupCard);
cardPopupValitator.enableValidation();

const profilePopupValidator = new FormValidator(param, profilePopup);
profilePopupValidator.enableValidation();

profilePopupName.value = profileName.textContent;
profilePopupProfession.value = profileProfession.textContent;


const renderer = (item, reverse) => {
  const card = new Card(item, '#photo__card');
  const cardElement = card.createCard();
  section.setItem(cardElement, reverse);
}

const section = new Section({
  items:initialCards,
  renderer
}, '.photo__cards');
section.renderItems();


// function closeByEsc(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }
//
// function closePopup(form) {
//   form.classList.remove('popup_opened');
//   form.removeEventListener('keydown', closeByEsc);
// }
//
// function openPopup(form) {
//   form.classList.add('popup_opened');
//   form.addEventListener('keydown', closeByEsc);
// }
//
// function resetPopup() {
//   cardName.value = null;
//   cardLink.value = null;
//   cardPopupValitator.disableButton();
// }

btnEditProfile.addEventListener('click', function (){
  profilePopupName.value = profileName.textContent;
  profilePopupProfession.value = profileProfession.textContent;
  // openPopup(profilePopup);
});

profilePopup.addEventListener('submit', function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = profilePopupName.value;
  profileProfession.textContent = profilePopupProfession.value;
  // closePopup(profilePopup);
});

// btnClosePopup.forEach(function (btnClose) {
//   btnClose.addEventListener('click', function() {
//     const form = btnClose.closest('.popup');
//     // closePopup(form);
//   });
// });

btnAddCard.addEventListener('click', function () {
  cardPopup.openPopup();
  cardPopup.setEventListener();
});

popupCard.addEventListener('submit', function (event) {
  event.preventDefault();
  const cardValue = {
    name: cardName.value,
    link: cardLink.value
  }
  section.addItem(cardValue, true);
  cardPopup.closePopup();
  // resetPopup(cardPopup);
});







