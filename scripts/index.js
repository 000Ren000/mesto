const btnEditProfile = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const btnAddCard = document.querySelector('.profile__add-button');

const profilePopup = document.querySelector('#edit-form');
const profilePopupName = profilePopup.querySelector('.edit-form__input_type_name');
const profilePopupProfession = profilePopup.querySelector('.edit-form__input_type_profession');
const btnCloseProfile = profilePopup.querySelector('.popup__button-close');

const cardPopup = document.querySelector('#add-Form');
const cardName = cardPopup.querySelector('.edit-form__input_type_name');
const cardLink = cardPopup.querySelector('.edit-form__input_type_link');
const btnCloseCard = cardPopup.querySelector('.popup__button-close');

const imagePopup = document.querySelector('.image-popup');
const btnCloseImage = imagePopup.querySelector('.image-popup__close');

const photoCards = document.querySelector('.photo__cards');
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


initialCards.forEach(crd => {
  const photoCard = document.querySelector('#photo__card').content;
  const card = photoCard.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  card.querySelector('.card__title').textContent = crd.name;
  cardImage.src = crd.link;
  cardImage.alt = crd.name;
  photoCards.append(card);
})

btnEditProfile.addEventListener('click', function (){
  editProfile(profilePopup);
});

function editProfile(popup) {
  profilePopupName.value = profileName.textContent;
  profilePopupProfession.value = profileProfession.textContent;
  popup.classList.add('popup_opened');

  btnCloseProfile.addEventListener('click', function() {
    closePopup(popup);
  });

  popup.addEventListener('submit', function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = profilePopupName.value;
    profileProfession.textContent = profilePopupProfession.value;
    closePopup(popup);
  });
}

function actionsCard(card) {
  const btnLike = card.querySelector('.card__button-like');
  const btnRemoveCard = card.querySelector('.card__trash');
  const btnImage = card.querySelector('.card__image');

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
    openImage(card)
  });
 }

function openImage (card) {
  const container = imagePopup.querySelector('.image-popup__conteiner');
  const image = container.querySelector('.image-popup__image');

  image.src = card.querySelector('.card__image').src;
  image.alt = card.querySelector('.card__image').alt;
  container.querySelector('.image-popup__description').textContent = card.querySelector('.card__title').textContent;

  openPopup(imagePopup)
}

function closePopup(form) {
  form.classList.remove('popup_opened');
}

function openPopup(form) {
  form.classList.add('popup_opened');
}


btnCloseCard.addEventListener('click', function () {
  closePopup(cardPopup)
});

btnAddCard.addEventListener('click', function () {
  openPopup(cardPopup);
});

cardPopup.addEventListener('submit', function (event) {
  event.preventDefault();
  const photoCard = document.querySelector('#photo__card').content;
  const card = photoCard.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  cardImage.src = cardLink.value;
  cardImage.alt = cardLink.value;
  card.querySelector('.card__title').textContent = cardName.value;
  photoCards.prepend(card);
  closePopup(cardPopup);
  cardName.value = '';
  cardLink.value = '';
  actionsCard(card);
})

btnCloseImage.addEventListener('click', function () {
  closePopup(imagePopup);
});

photoCards.querySelectorAll('.card').forEach(actionsCard);
