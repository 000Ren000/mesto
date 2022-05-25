import './index.css';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {FormValidator} from '../components/FormValidator.js';
import {
  initialCards, param, btnEditProfile, btnAddCard,
  profilePopupName, profilePopupProfession,
  profPopup, popupCard, profileSelectors, key
} from '../scripts/utils.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import {PopupWithAvatar} from '../components/PopupWithAvatar.js';


const cardPopup = new PopupWithForm('#add-Form',
  (event) => {
    event.preventDefault();
    cardApi.setNewCardInfo(cardPopup.getInputValues())
      .then(res => {
        section.addItem(res, true);
      }).catch(err => console.log('что-то пошло не так', err));
    cardPopup.closePopup();
    cardPopupValitator.disableButton();
  });
cardPopup.setEventListener();

const profileInfo = new UserInfo (profileSelectors);
// Создание Апи
const profileApi = new Api({
  baseURL: 'https://nomoreparties.co/v1/cohort-41/users/me',
  headers: key
});
const cardApi = new Api({
  baseURL: 'https://mesto.nomoreparties.co/v1/cohort-41/cards',
  headers: key
});

profileApi.getProfileinfo()
  .then(data => {
    profileInfo.setInfo(data);
  })
  .catch(err => console.log('что-то пошло не так', err));

cardApi.getCardInfo().then(data => {
  section.renderItems(data);
}).catch(err => console.log('что-то пошло не так', err));

// Создание попапов
const profilePopup = new PopupWithForm('#edit-form',
  (evt) => {
    evt.preventDefault();
    profileApi.setProfileInfo(profilePopup.getInputValues())
      .then(res => profileInfo.setInfo(res))
      .catch(err => console.log('Что-то пошло не так', err));
    profilePopup.closePopup();
  });
const imgPopup = new PopupWithImage('#image-popup');
const popupWithConfirmation = new PopupWithConfirmation('#popup-confirmation');
const popupWithAvatar = new PopupWithAvatar('#popup-avatar');

//Вставка в разметку
const section = new Section({
  renderer: (item, reverse) => {
    section.setItem(createCard(item), reverse);
  }
}, '.photo__cards');

profilePopup.setEventListener();
imgPopup.setEventListener();

//Создание валидации
const profilePopupValidator = new FormValidator(param, profPopup);
profilePopupValidator.enableValidation();
const cardPopupValitator = new FormValidator(param, popupCard);
cardPopupValitator.enableValidation();

const fillFields = () => {
  profilePopupName.value = profileInfo.getInfo().name;
  profilePopupProfession.value = profileInfo.getInfo().info;
}
//Создание карточек
const createCard = (item) => {
  const card = new Card(item, '#photo__card',
    (link, name) => {
      imgPopup.openPopup(link, name);
    },
    () => {
      popupWithConfirmation.setSubmitAction(
        (evt) => {
          evt.preventDefault();
          cardApi.deleteCard(item._id).then(res => {
            console.log(`Карточка ${item.name}`, res.message);
            card.removeCard();
          })
            .catch(err => {
              console.log('Что-то пошло не так', err);
            });
          popupWithConfirmation.closePopup();
        });
      popupWithConfirmation.openPopup();
    },
    () => {
      const likeStatus = !card.isLiked();
      if (likeStatus)
        cardApi.likedCard(item._id)
          .then(res => {
            card.refreshCounter(res.likes, likeStatus);
          }).catch(err => console.log('Что то пошло не так', err));
      else
        cardApi.unlikedCard(item._id).then(res => {
          card.refreshCounter(res.likes, likeStatus)
        })
          .catch(err => console.log('Что то пошло не так', err));
    });
  const cardElement = card.createCard();
  return cardElement
}
fillFields();

//Кнопки на сайте
btnEditProfile.addEventListener('click', function (){
  fillFields();
  profilePopup.openPopup();
});
btnAddCard.addEventListener('click', function () {
  cardPopup.openPopup();
});


