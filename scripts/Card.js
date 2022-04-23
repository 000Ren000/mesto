export class Card {
  constructor(cardDetails, selector) {
    this._name = cardDetails.name;
    this._link = cardDetails.link;
    this._sampleCard = document.querySelector(selector);
    this._photoCards = document.querySelector('.photo__cards');
  }

    _setEvents(card) {
      const btnLike = card.querySelector('.card__button-like');
      const btnRemoveCard = card.querySelector('.card__trash');
      const btnImage = card.querySelector('.card__image');

      //Ставит лайк
      btnLike.addEventListener('click',  () =>
        btnLike.classList.toggle('card__button-like_active'));

      //Удаление карточки
      btnRemoveCard.addEventListener('click',  () =>
        card.remove());

     // Открывает картинку
      btnImage.addEventListener('click',  () => {
        const image = document.querySelector('.popup__image');
        const imagePopup = document.querySelector('#image-popup');
        image.src = card.querySelector('.card__image').src;
        image.alt = card.querySelector('.card__image').alt;
        document.querySelector('.popup__image-description').textContent = card.querySelector('.card__title').textContent;
        imagePopup.classList.add('popup_opened');
      });
    }

    _createCard() {
      const _card = this._sampleCard
        .content
        .querySelector('.card')
        .cloneNode(true);
      const _cardImage = _card.querySelector('.card__image');
      _cardImage.src = this._link;
      _cardImage.alt = this._name;
      _card.querySelector('.card__title').textContent = this._name;
      this._setEvents(_card);
      return _card;
    }

    renderCard(revers = false) {
      if (revers) this._photoCards.prepend(this._createCard());
      else  this._photoCards.append(this._createCard());
    }
}
