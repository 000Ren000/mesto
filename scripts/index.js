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
const photoCard = document.querySelector('#photo__card').content;


const imagePopup = document.querySelector('#image-popup');
const photoCards = document.querySelector('.photo__cards');

const container = imagePopup.querySelector('.popup__image-conteiner');
const image = container.querySelector('.popup__image');

const allPopups = document.querySelectorAll('.popup');

const initialCards = [
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

initialCards.forEach(card => renderCard(card.name, card.link, false));





function openImage (card) {
  image.src = card.querySelector('.card__image').src;
  image.alt = card.querySelector('.card__image').alt;
  container.querySelector('.popup__image-description').textContent = card.querySelector('.card__title').textContent;
  openPopup(imagePopup)
}

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

function createCard(name, link) {
  const card = photoCard.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');

  const btnLike = card.querySelector('.card__button-like');
  const btnRemoveCard = card.querySelector('.card__trash');
  const btnImage = card.querySelector('.card__image');

  cardImage.src = link;
  cardImage.alt = name;
  card.querySelector('.card__title').textContent = name;

    //Ставит лайк
    btnLike.addEventListener('click', function () {
      btnLike.classList.toggle('card__button-like_active')
    });

    //Удаление карточки
    btnRemoveCard.addEventListener('click', function () {
      card.remove();
    });

    //Открывает картинку
    btnImage.addEventListener('click', function () {
      openImage(card);
    });

  return card;
}

function renderCard(name, link, revers = true) {
  if (revers) photoCards.prepend(createCard(name, link));
  else  photoCards.append(createCard(name, link));
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
  renderCard(cardName.value, cardLink.value);
  closePopup(cardPopup);
  cardName.value = '';
  cardLink.value = '';
  enableValidation({
    formSelector: '.edit-form',
    inputSelector: '.edit-form__input',
    submitButtonSelector: '.edit-form__button-save',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });
});


allPopups.forEach(popup => {
 popup.addEventListener("click", function (event) {
    if (event.target === event.currentTarget) {
      closePopup(event.currentTarget);
    }
  });
});


