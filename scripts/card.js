export class Card {
  constructor(cardDetails, selector) {
    this._name = cardDetails.name;
    this._link = cardDetails.link;
    this._sampleCard = document.querySelector('#photo__card');
    this._photoCards = document.querySelector(selector);
  }

    _createCard() {
      const card = this._sampleCard
        .content
        .querySelector('.card')
        .cloneNode(true);
      const cardImage = card.querySelector('.card__image');

      // const btnLike = card.querySelector('.card__button-like');
      // const btnRemoveCard = card.querySelector('.card__trash');
      // const btnImage = card.querySelector('.card__image');

      cardImage.src = this._link;
      cardImage.alt = this._name;
      card.querySelector('.card__title').textContent = this._name;
      return card;
    }

    renderCard(name, link, revers = true) {
      if (revers) this._photoCards.prepend(this._createCard());
      else  this._photoCards.append(this._createCard());
    }
}
