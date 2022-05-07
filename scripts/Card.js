import PopupWithImage from './PopupWithImage.js';
export class Card {
  constructor(cardDetails, selector) {
    this._name = cardDetails.name;
    this._link = cardDetails.link;
    this._card = document.querySelector(selector)
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

    _setEvents() {
      const btnLike = this._card.querySelector('.card__button-like');
      const btnRemoveCard = this._card.querySelector('.card__trash');
      const btnImage = this._card.querySelector('.card__image');

      //Ставит лайк
      btnLike.addEventListener('click',  () =>
        btnLike.classList.toggle('card__button-like_active'));

      //Удаление карточки
      btnRemoveCard.addEventListener('click',  () => {
        this._card.remove();
        this._card = null;
      })
     // Открывает картинку
      btnImage.addEventListener('click',  () => {
        // image.src = this._link;
        // image.alt = this._name;
        // imageDescription.textContent = this._card.querySelector('.card__title').textContent;
        // imagePopup.classList.add('popup_opened');
        const imgPopup = new PopupWithImage('#image-popup');
        imgPopup.openPopup(this._link, this._name);
        imgPopup.setEventListener();

      });
    }

    createCard() {
      const _cardImage = this._card.querySelector('.card__image');
      _cardImage.src = this._link;
      _cardImage.alt = this._name;
      this._card.querySelector('.card__title').textContent = this._name;
      this._setEvents(this._card);
      return this._card;
    }


}
