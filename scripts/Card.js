import {image, imagePopup} from './utils.js';
export class Card {
  constructor(cardDetails, selector) {
    this._name = cardDetails.name;
    this._link = cardDetails.link;
    this._sampleCard = document.querySelector(selector);
    this._photoCards = document.querySelector('.photo__cards');
    this._card = this._sampleCard
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
        image.src = this._card.querySelector('.card__image').src;
        image.alt = this._card.querySelector('.card__image').alt;
        document.querySelector('.popup__image-description').textContent = this._card.querySelector('.card__title').textContent;
        imagePopup.classList.add('popup_opened');
      });
    }

    _createCard() {
      const _cardImage = this._card.querySelector('.card__image');
      _cardImage.src = this._link;
      _cardImage.alt = this._name;
      this._card.querySelector('.card__title').textContent = this._name;
      this._setEvents(this._card);
      return this._card;
    }

    renderCard(revers = false) {
      if (revers) this._photoCards.prepend(this._createCard());
      else  this._photoCards.append(this._createCard());
    }
}
