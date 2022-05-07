import {Card} from './Card.js';
import {Section} from './Section.js';
import Popup from './Popup.js';
import {FormValidator} from './FormValidator.js';
import {
  initialCards, param, btnEditProfile, btnAddCard,
  btnClosePopup, profileName, profilePopupName, profilePopupProfession,
  XXXprofilePopup, profileProfession, popupCard, cardName,
  cardLink, photoCards, allPopups, profileSelectors
} from './utils.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';


const cardPopup = new PopupWithForm('#add-Form',
  (event) => {
    event.preventDefault();
    const cardValue = {
      name: cardName.value,
      link: cardLink.value
    }
    section.addItem(cardValue, true);
    cardPopup.closePopup();
    cardPopupValitator.disableButton();
  });

const profileInfo = new UserInfo (profileSelectors);
const fillFields = () => {
  profilePopupName.value = profileInfo.getInfo().name;
  profilePopupProfession.value = profileInfo.getInfo().info;
}
fillFields();
const profilePopup = new PopupWithForm('#edit-form',
  (evt) => {
     evt.preventDefault();
     profileInfo.setInfo(profilePopupName.value, profilePopupProfession.value);
    // profileName.textContent = profilePopupName.value;
    // profileProfession.textContent = profilePopupProfession.value;
     profilePopup.closePopup();
  });

const cardPopupValitator = new FormValidator(param, popupCard);
cardPopupValitator.enableValidation();

const profilePopupValidator = new FormValidator(param, XXXprofilePopup);
profilePopupValidator.enableValidation();

//todo 111
// profilePopupName.value = profileName.textContent;
// profilePopupProfession.value = profileProfession.textContent;


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
  fillFields();
  profilePopup.openPopup();
  profilePopup.setEventListener();
});

// XXXprofilePopup.addEventListener('submit', function formSubmitHandler(evt) {
//   evt.preventDefault();
//   profileName.textContent = profilePopupName.value;
//   profileProfession.textContent = profilePopupProfession.value;
//   // closePopup(profilePopup);
// });

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

// popupCard.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const cardValue = {
//     name: cardName.value,
//     link: cardLink.value
//   }
//   section.addItem(cardValue, true);
//   cardPopup.closePopup();
//   // resetPopup(cardPopup);
// });








