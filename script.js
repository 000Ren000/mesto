const popup = document.querySelector(".popup");

const card = document.querySelector(".photo__cards");
let listButtonlike = card.querySelectorAll(".card__button-like");

// const form = popup.querySelector(".edit-form");
// let entryName = form.querySelector(".edit-form__Name");
// let entryProfesion = form.querySelector(".edit-form__profession");

let editForm = document.querySelector(".profile__edit-button");
let editName = document.querySelector(".profile__name");
let editProfession = document.querySelector(".profile__profession");

// задаем Имя и профессию по умолчанию
// entryName.value = editName.textContent;
// entryProfesion.value = editProfession.textContent;

// // Сохранение введеных данных
// btnSave.addEventListener("click", saved);

// function saved() {
//   editName.textContent = entryName.value;
//   editProfession.textContent = entryProfesion.value;
//   togleForm();
// }

// Находим форму в DOM
let formElement = document.querySelector(".popup"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector(".edit-form__name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector(".edit-form__profession"); // Воспользуйтесь инструментом .querySelector()

let btnSave = formElement.querySelector(".edit-form__button-save");
let btnClose = formElement.querySelector(".edit-form__button-close");

// Открытие формы
function openPopup() {
  jobInput.value = editProfession.textContent;
  nameInput.value = editName.textContent;
  togleForm();
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
  editName.textContent = nameInput.value;
  editProfession.textContent = jobInput.value;
  togleForm();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);

// //Поставить лайк
listButtonlike.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("card__button-like_active");
  });
});

// Закрытие окна
btnClose.addEventListener("click", function () {
  popup.classList.remove("popup__opened");
});
editForm.addEventListener("click", openPopup);
console.log(btnClose);
function togleForm() {
  popup.classList.toggle("popup_opened");
}

// popup.addEventListener("click", function (event) {
//   if (event.target === event.currentTarget) {
//     togleForm();
//   }
// });
