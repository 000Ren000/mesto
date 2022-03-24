// const popup = document.querySelector('.popup');

const btnEditProfile = document.querySelector('.profile__edit-button');
const editName = document.querySelector('.profile__name');
const editProfession = document.querySelector('.profile__profession');

const editForm = document.querySelector('#edit-form');
const addForm = document.querySelector('#add-Form');
const btnAddCard = document.querySelector('.profile__add-button');
//popap
const cardPopup = document.querySelector('#add-Form');
const cardName = cardPopup.querySelector('.edit-form__input_type_name');
const cardLink = cardPopup.querySelector('.edit-form__input_type_link');
const btnClose = cardPopup.querySelector('.popup__button-close');


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
// btnAddCard.addEventListener('click', () => openForm2(addForm))

const allCards = photoCards.querySelectorAll('.card');
allCards.forEach(likeAndRemoveCard);
const imagePopup = document.querySelector('.image-popup');


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

//добавляет карточку
function openForm2(popup) {
  popup.classList.add('popup_opened');

  const sample = document.querySelector('#add-card').content;
  const container = sample.querySelector('.popup__conteiner').cloneNode(true);
  const name = container.querySelector('.edit-form__input_type_name');
  const link = container.querySelector('.edit-form__input_type_link');
  const btnClose = container.querySelector('.popup__button-close');
  addForm.append(container);
  const form = container.querySelector('.edit-form');
  //Создает новую карточку по введенным данным
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const photoCard = document.querySelector('#photo__card').content;
    const card = photoCard.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = link.value;
    card.querySelector('.card__image').alt = name.value;
    card.querySelector('.card__title').textContent = name.value;
    photoCards.prepend(card);

    likeAndRemoveCard(card);    //Ставит лайки и удоляет карточку

    closeForm(popup);
    form.closest('.popup__conteiner').remove();
  });

  //Закрывает форму
  btnClose.addEventListener('click', function () {
    closeForm(popup);
    form.closest('.popup__conteiner').remove();
  });
}

//Закрывает форму
function closeForm(form) {
  form.classList.remove('popup_opened');
}

// Действия с карточкой
function likeAndRemoveCard(card) {
  const btnLike = card.querySelector('.card__button-like');
  const btnRemoveCard = card.querySelector('.card__trash');
  const btnImage = card.querySelector('.card__image');

  //Ставит лайк
  btnLike.addEventListener('click', () =>
    btnLike.classList.toggle('card__button-like_active'));

  //Удаление карточки
  btnRemoveCard.addEventListener('click', () => card.remove());

  //Открывает картинку
  btnImage.addEventListener('click', function () {
    imagePopup.classList.add('popup_opened');
    const imageForm = document.querySelector('#image-popup').content;
    const image = imageForm.querySelector('.image-popup__conteiner').cloneNode(true);
    const btnCloseImage = image.querySelector('.image-popup__close');
    image.querySelector('.image-popup__image').src = card.querySelector('.card__image').src;
    image.querySelector('.image-popup__image').alt = card.querySelector('.card__image').alt;
    image.querySelector('.image-popup__description').textContent = card.querySelector('.card__title').textContent;
    imagePopup.append(image);

    //Закрывает картинку
    btnCloseImage.addEventListener('click', function () {
      imagePopup.classList.remove('popup_opened');
      image.remove();
    });
});
}

//add func

btnClose.addEventListener('click', function () {
  closeForm(cardPopup);
});

function openPopup(form) {
  form.classList.add('popup_opened');
}

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
  closeForm(addForm);
  cardName.value = '';
  cardLink.value = '';
})

