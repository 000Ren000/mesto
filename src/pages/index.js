import './index.css';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {FormValidator} from '../components/FormValidator.js';
import {
  initialCards, param, btnEditProfile, btnAddCard,
  profilePopupName, profilePopupProfession,
  profPopup, popupCard, profileSelectors, key, btnAvatar, popupAvatar
} from '../scripts/utils.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

let userId;


// Создание Апи
const api = new Api({
  baseURL: 'https://nomoreparties.co/v1/cohort-41',
  headers: key
});


//Загрузка Профиля и карточек
Promise.all([
  api.getProfileinfo(),
  api.getCardInfo()
]).then(([userData, cards]) => {
  userId = userData._id;
  profileInfo.setInfo(userData);
  section.renderItems(cards);
}).catch(err => console.log('что-то пошло не так', err));


// Создание попапов
const profilePopup = new PopupWithForm('#edit-form',
  (evt) => {
    evt.preventDefault();
    profilePopup.showWaiting();
    api.setProfileInfo(profilePopup.getInputValues())
      .then(res => {
        profileInfo.setInfo(res);
        profilePopup.closePopup();
      })
      .catch(err => console.log('Что-то пошло не так', err))
      .finally(() => {
        profilePopup.closeWaiting();
      });
  });
const cardPopup = new PopupWithForm('#add-Form',
  (event) => {
    event.preventDefault();
    api.setNewCardInfo(cardPopup.getInputValues())
      .then(res => {
        section.addItem(res, true);
      }).catch(err => console.log('что-то пошло не так', err));
    cardPopup.closePopup();
  });
const imgPopup = new PopupWithImage('#image-popup');
const popupWithConfirmation = new PopupWithConfirmation('#popup-confirmation', );
const avatarPopup = new PopupWithForm('#popup-avatar',
  (evt) => {
    evt.preventDefault();
    const link = avatarPopup.getInputValues().link;
    avatarPopup.showWaiting();
    api.changeAvatar(link)
      .then(res => {
        profileInfo.setInfo(res);
        avatarPopup.closePopup();
      })
      .catch(err => console.log('Что то пошло не так', err))
      .finally(() => {
        avatarPopup.closeWaiting();
      });
  }
);


const profileInfo = new UserInfo(profileSelectors);


//Вставка в разметку
const section = new Section({
  renderer: (item, reverse) => {
    section.setItem(createCard(item), reverse);
  }
}, '.photo__cards');

profilePopup.setEventListener();
cardPopup.setEventListener();
imgPopup.setEventListener();
avatarPopup.setEventListener();
popupWithConfirmation.setEventListener();

//Создание валидации
const profilePopupValidator = new FormValidator(param, profPopup);
profilePopupValidator.enableValidation();
const cardPopupValitator = new FormValidator(param, popupCard);
cardPopupValitator.enableValidation();
const avatarPopupValidator = new FormValidator(param, popupAvatar);
avatarPopupValidator.enableValidation();


const fillFields = () => {
  const {name, info} = profileInfo.getInfo();
  profilePopupName.value = name;
  profilePopupProfession.value = info;
}

//Создание карточек
const createCard = (item) => {
  const card = new Card(item, '#photo__card',
    userId,
    (link, name) => {
      imgPopup.openPopup(link, name);
    },
    () => {

      popupWithConfirmation.setSubmitAction(
        (evt) => {
          evt.preventDefault();
          popupWithConfirmation.showWaiting();
          api.deleteCard(item._id).then(res => {
            console.log(`Карточка ${item.name}`, res.message);
            card.removeCard();
            popupWithConfirmation.closePopup();
          })
            .catch(err => {
              console.log('Что-то пошло не так', err);
            }).finally(() => popupWithConfirmation.closeWaiting());
        });
      popupWithConfirmation.sendSubmit();
      popupWithConfirmation.openPopup();
    },
    () => {
      const likeStatus = !card.isLiked();
      if (likeStatus)
        api.likedCard(item._id)
          .then(res => {
            card.refreshCounter(res.likes, likeStatus);
          }).catch(err => console.log('Что то пошло не так', err));
      else
        api.unlikedCard(item._id).then(res => {
          card.refreshCounter(res.likes, likeStatus)
        })
          .catch(err => console.log('Что то пошло не так', err));
    });
  const cardElement = card.createCard();
  return cardElement
}
fillFields();

//Кнопки на сайте
btnEditProfile.addEventListener('click', () => {
  fillFields();
  profilePopupValidator.disableButton();
  profilePopup.openPopup();
});
btnAddCard.addEventListener('click', () => {
  cardPopupValitator.disableButton();
  cardPopup.openPopup()
});
btnAvatar.addEventListener('click', () => {
  avatarPopupValidator.disableButton();
  avatarPopup.openPopup();
});

