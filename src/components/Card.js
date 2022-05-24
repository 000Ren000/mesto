export class Card {
  constructor(cardDetails, selector, handleCardClick, openedPopupWithConfirmation) {
    this._name = cardDetails.name;
    this._link = cardDetails.link;
    this._likes = cardDetails.likes;
    this._id = cardDetails.owner._id;
    this._card = document.querySelector(selector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    this._handleCardClick = handleCardClick;
    this._openedPopupWithConfirmation = openedPopupWithConfirmation;
    this._btnLike = this._card.querySelector('.card__button-like');
    this._btnRemoveCard = this._card.querySelector('.card__trash');
    this._btnImage = this._card.querySelector('.card__image');
    this._myId = '95a3a8fa0edff34a5b5acb86';
  }


    _setEventListeners() {
      //Ставит лайк
      this._btnLike.addEventListener('click',  () =>{

        this._btnLike.classList.toggle('card__button-like_active')
      });
      //Удаление карточки
      this._btnRemoveCard.addEventListener('click',  () => {
        this._openedPopupWithConfirmation();
        // this._card.remove();
        // this._card = null;
      })
     // Открывает картинку
      this._btnImage.addEventListener('click',  () => {
        this._handleCardClick(this._link, this._name);
      });
    }

    removeCard() {
       this._card.remove();
       this._card = null;
    }
    createCard() {
      const _cardImage = this._card.querySelector('.card__image');
      _cardImage.src = this._link;
      _cardImage.alt = this._name;
      this._card.querySelector('.card__title').textContent = this._name;
      this._card.querySelector('.card__like-counter').textContent = this._likes.length;
      this._setEventListeners(this._card);
      if (this._id === this._myId) this._btnRemoveCard.classList.remove('card__trash_hidden');
      return this._card;
    }


}
