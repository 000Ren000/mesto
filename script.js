const popup = document.querySelector(".popup");
const form = popup.querySelector(".edit-form");

let entryName = form.querySelector(".edit-form__Name");
let entryProfesion = form.querySelector(".edit-form__profession");
let btnSave = form.querySelector(".edit-form__button-save");
let btnClose = form.querySelector(".edit-form__button-close");

let editForm = document.querySelector(".profile__edit-button");
let editName = document.querySelector(".profile__name");
let editProfession = document.querySelector(".profile__profession");

const card = document.querySelector(".photo__cards");
let listButtonlike = card.querySelectorAll(".card__button-like");

// задаем Имя и профессию по умолчанию
entryName.value = editName.textContent;
entryProfesion.value = editProfession.textContent;

// Сохранение введеных данных
btnSave.addEventListener("click", saved);

function saved() {
  editName.textContent = entryName.value;
  editProfession.textContent = entryProfesion.value;
  togleForm();
}

// //Поставить лайк
listButtonlike.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("card__button-like_active");
  });
});

// Закрытие окна
btnClose.addEventListener("click", togleForm);
editForm.addEventListener("click", togleForm);

function togleForm() {
  popup.classList.toggle("popup_opened");
}

popup.addEventListener("click", function (event) {
  if (event.target === event.currentTarget) {
    togleForm();
  }
});



