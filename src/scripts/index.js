import '../pages/index.css';
import {Card} from './Card.js';
import {Section} from './Section.js';
import {FormValidator} from './FormValidator.js';
import {
  initialCards, param, btnEditProfile, btnAddCard,
  profilePopupName, profilePopupProfession,
  profPopup, popupCard, cardName,
  cardLink, profileSelectors
} from './utils.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import PopupWithImage from './PopupWithImage.js';


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
     profilePopup.closePopup();
  });

const cardPopupValitator = new FormValidator(param, popupCard);
cardPopupValitator.enableValidation();

const profilePopupValidator = new FormValidator(param, profPopup);
profilePopupValidator.enableValidation();


const section = new Section({
  items:initialCards,
  renderer: (item, reverse) => {
    const card = new Card(item, '#photo__card',
      (link, name) => {
        const imgPopup = new PopupWithImage('#image-popup');
        imgPopup.openPopup(link, name);
        imgPopup.setEventListener();

      });
    const cardElement = card.createCard();
    section.setItem(cardElement, reverse);
  }

}, '.photo__cards');
section.renderItems();


btnEditProfile.addEventListener('click', function (){
  fillFields();
  profilePopup.openPopup();
  profilePopup.setEventListener();
});

btnAddCard.addEventListener('click', function () {
  cardPopup.openPopup();
  cardPopup.setEventListener();
});





