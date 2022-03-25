// const popup = document.querySelector('.popup');

const btnEditProfile = document.querySelector('.profile__edit-button');
const editName = document.querySelector('.profile__name');
const editProfession = document.querySelector('.profile__profession');

const editForm = document.querySelector('#edit-form');
const addForm = document.querySelector('#add-Form');
const btnAddCard = document.querySelector('.profile__add-button');

const cardPopup = document.querySelector('#add-Form');
const cardName = cardPopup.querySelector('.edit-form__input_type_name');
const cardLink = cardPopup.querySelector('.edit-form__input_type_link');
const btnClose = cardPopup.querySelector('.popup__button-close');

const imagePopup = document.querySelector('.image-popup');
const btnCloseImage = imagePopup.querySelector('.image-popup__close');
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



const photoCards = document.querySelector('.photo__cards');

initialCards.forEach(crd => {
  const photoCard = document.querySelector('#photo__card').content;
  const card = photoCard.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  card.querySelector('.card__title').textContent = crd.name;
  cardImage.src = crd.link;
  cardImage.alt = crd.name;
  photoCards.append(card);
})

btnEditProfile.addEventListener('click', () => openForm1(editForm));


const allCards =  photoCards.querySelectorAll('.card');
allCards.forEach(actionsCard);

//изменяет Имя и Профессию
function openForm1(popup) {
  const name = popup.querySelector('.edit-form__input_type_name');
  const prof = popup.querySelector('.edit-form__input_type_profession');
  const btnClose = popup.querySelector('.popup__button-close');
  const form = popup.querySelector('.edit-form');

  prof.value = editProfession.textContent;
  name.value = editName.textContent;
  popup.classList.add('popup_opened');

  btnClose.addEventListener('click', () => closeForm(popup));

  form.addEventListener('submit', function formSubmitHandler(evt) {
    evt.preventDefault();
    editName.textContent = name.value;
    editProfession.textContent = prof.value;
    closeForm(popup);
  });

}

// Действия с карточкой
function actionsCard(card) {
  const btnLike = card.querySelector('.card__button-like');
  const btnRemoveCard = card.querySelector('.card__trash');
  const btnImage = card.querySelector('.card__image');

  //Ставит лайк
  btnLike.addEventListener('click', () =>
    btnLike.classList.toggle('card__button-like_active'));

  //Удаление карточки
  btnRemoveCard.addEventListener('click', () => card.remove());

  //Открывает картинку
  btnImage.addEventListener('click', function () {openImage(card)});
 }

//add func

function closePopup(form) {
  form.classList.remove('popup_opened');
}

function openPopup(form) {
  form.classList.add('popup_opened');
}

// действия с карточкой (cardPopup)
btnClose.addEventListener('click', function () {
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
  closePopup(addForm);
  cardName.value = '';
  cardLink.value = '';
  actionsCard(card);
  // allCards.push(card);
})

//действия с картинкой (imagePopup)

 function openImage (card) {
  const container = imagePopup.querySelector('.image-popup__conteiner');
  const image = container.querySelector('.image-popup__image');

  image.src = card.querySelector('.card__image').src;
  image.alt = card.querySelector('.card__image').alt;
  container.querySelector('.image-popup__description').textContent = card.querySelector('.card__title').textContent;

  openPopup(imagePopup)
};
//Закрывает картинку
btnCloseImage.addEventListener('click', function () {
  closePopup(imagePopup);
});
