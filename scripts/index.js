const popup = document.querySelector('.popup');

let buttonEditProfile = document.querySelector('.profile__edit-button');
let editName = document.querySelector('.profile__name');
let editProfession = document.querySelector('.profile__profession');

// Находим форму в DOM
let formElement = document.querySelector('#edit-form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
// let nameInput = formElement.querySelector('.edit-form__input_type_name'); // Воспользуйтесь инструментом .querySelector()
// let jobInput = formElement.querySelector('.edit-form__input_type_profession'); // Воспользуйтесь инструментом .querySelector()

let btnClose = document.querySelector('.popup__button-close');

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

initialCards.forEach( crd => {
  const photoCard = document.querySelector('#photo__card').content;
  const card = photoCard.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = crd.link;
  card.querySelector('.card__title').textContent = crd.name;
  photoCards.append(card);})
// Открытие формы
// function openPopup() {
//   jobInput.value = editProfession.textContent;
//   nameInput.value = editName.textContent;
//   popup.classList.add('popup_opened');
// }

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  editName.textContent = nameInput.value;
  editProfession.textContent = jobInput.value;
  // closePopup();
  closeForm(popup);
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
// formElement.addEventListener('submit', formSubmitHandler);

// Закрытие окна
btnClose.addEventListener('click', closePopup);

buttonEditProfile.addEventListener('click', () => openForm1(formElement));

function openForm(form) {
  form.classList.add('popup_opened');
  const name = form.querySelector('.edit-form__input_type_name').value;
  const link = form.querySelector('.edit-form__input_type_profession').value;
  const btnSave = form.querySelector('.edit-form__button-save');
  const btnClose = form.querySelector('.popup__button-close');

  btnClose.addEventListener('click', () => form.classList.remove('popup_opened'));

  // btnSave.addEventListener('click', function(evt) {
  //   evt.preventDefault();
  //   const photoCard = document.querySelector('#photo__card').content;
  //   const card = photoCard.querySelector('.card').cloneNode(true);
  //   card.querySelector('.card__image').src = link;
  //   card.querySelector('.card__title').textContent = name;
  //   photoCards.prepend(card);
  // })




}

function openForm1(form) {
  const name = form.querySelector('.edit-form__input_type_name');
  const prof = form.querySelector('.edit-form__input_type_profession');
  const btnSave = form.querySelector('.edit-form__button-save');
  const btnClose = form.querySelector('.popup__button-close');

    prof.value = editProfession.textContent;
    name.value = editName.textContent;
    popup.classList.add('popup_opened');

  btnClose.addEventListener('click', () => form.classList.remove('popup_opened'));

  form.addEventListener('submit', function formSubmitHandler(evt) {
    evt.preventDefault();
    editName.textContent = name.value;
    editProfession.textContent = prof.value;
    closeForm(form);
  });

}




function closeForm(form) {
  form.classList.remove('popup_opened');
}
const btnAddCard = document.querySelector('.profile__add-button');
const addForm = document.querySelector('#add-Form');

btnAddCard.addEventListener('click', () => openForm(addForm))
