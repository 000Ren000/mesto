// const popup = document.querySelector('.popup');

const btnEditProfile = document.querySelector('.profile__edit-button');
const editName = document.querySelector('.profile__name');
const editProfession = document.querySelector('.profile__profession');

const editForm = document.querySelector('#edit-form');
const addForm = document.querySelector('#add-Form');
const btnAddCard = document.querySelector('.profile__add-button');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
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
  card.querySelector('.card__image').src = crd.link;
  card.querySelector('.card__title').textContent = crd.name;
  photoCards.append(card);
})

btnEditProfile.addEventListener('click', () => openForm1(editForm));
btnAddCard.addEventListener('click', () => openForm2(addForm))

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

function openForm2(popup) {
  popup.classList.add('popup_opened');

  const sample = document.querySelector('#add-card').content;
  const container = sample.querySelector('.popup__conteiner').cloneNode(true);
  addForm.append(container);
  const name = container.querySelector('.edit-form__input_type_name');
  const link = container.querySelector('.edit-form__input_type_profession');
  const btnClose = container.querySelector('.popup__button-close');
  const form = container.querySelector('.edit-form');
  form.addEventListener('submit',function(evt) {
    evt.preventDefault();
    const photoCard = document.querySelector('#photo__card').content;
    const card = photoCard.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = link.value;
    card.querySelector('.card__title').textContent = name.value;
    photoCards.prepend(card);
    closeForm(popup);
    form.closest('.popup__conteiner').remove();
  });

  btnClose.addEventListener('click', () => closeForm(popup));
}

function closeForm(form) {
  form.classList.remove('popup_opened');
}

