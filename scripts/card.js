export class Card {
  constructor(cardDetails, selector) {
    this._name = cardDetails.name;
    this._link = cardDetails.link;
    this._sampleCard = document.querySelector('#photo__card');
    this._photoCards = document.querySelector(selector);
  }


    _openImage (_card) {
    const _image = document.querySelector('.popup__image');
    const _imagePopup = document.querySelector('#image-popup');
      _image.src = _card.querySelector('.card__image').src;
      _image.alt = _card.querySelector('.card__image').alt;
      document.querySelector('.popup__image-description').textContent = _card.querySelector('.card__title').textContent;
      _imagePopup.classList.add('popup_opened');
    }

    _setEvents(_card) {
      const _btnLike = _card.querySelector('.card__button-like');
      const _btnRemoveCard = _card.querySelector('.card__trash');
      const _btnImage = _card.querySelector('.card__image');

      //Ставит лайк
      _btnLike.addEventListener('click',  () =>
        _btnLike.classList.toggle('card__button-like_active'));

      //Удаление карточки
      _btnRemoveCard.addEventListener('click',  () =>
        _card.remove());

     // Открывает картинку
      _btnImage.addEventListener('click',  () => {
        const _image = document.querySelector('.popup__image');
        const _imagePopup = document.querySelector('#image-popup');
        _image.src = _card.querySelector('.card__image').src;
        _image.alt = _card.querySelector('.card__image').alt;
        document.querySelector('.popup__image-description').textContent = _card.querySelector('.card__title').textContent;
        _imagePopup.classList.add('popup_opened');
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
