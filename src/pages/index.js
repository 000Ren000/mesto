import './index.css';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {FormValidator} from '../components/FormValidator.js';
import {
  initialCards, param, btnEditProfile, btnAddCard,
  profilePopupName, profilePopupProfession,
  profPopup, popupCard, cardName,
  cardLink, profileSelectors
} from '../scripts/utils.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';


const cardPopup = new PopupWithForm('#add-Form',
  (event) => {
    event.preventDefault();
    section.addItem(cardPopup._getInputValues(), true);
    cardPopup.closePopup();
    cardPopupValitator.disableButton();
  });
cardPopup.setEventListener();

const profileInfo = new UserInfo (profileSelectors);
const fillFields = () => {
  profilePopupName.value = profileInfo.getInfo().name;
  profilePopupProfession.value = profileInfo.getInfo().info;
}
fillFields();
const profilePopup = new PopupWithForm('#edit-form',
  (evt) => {
     evt.preventDefault();
     profileInfo.setInfo(profilePopup._getInputValues());
     profilePopup.closePopup();
  });
profilePopup.setEventListener();

const cardPopupValitator = new FormValidator(param, popupCard);
cardPopupValitator.enableValidation();

const profilePopupValidator = new FormValidator(param, profPopup);
profilePopupValidator.enableValidation();

const imgPopup = new PopupWithImage('#image-popup');
imgPopup.setEventListener();


const section = new Section({
  items:initialCards,
  renderer: (item, reverse) => {
    const card = new Card(item, '#photo__card',
      (link, name) => {
        imgPopup.openPopup(link, name);
      });
    const cardElement = card.createCard();
    section.setItem(cardElement, reverse);
  }

}, '.photo__cards');
section.renderItems();


btnEditProfile.addEventListener('click', function (){
  fillFields();
  profilePopup.openPopup();

});

btnAddCard.addEventListener('click', function () {
  cardPopup.openPopup();
});




