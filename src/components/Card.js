export class Card {
  constructor(cardDetails, selector, userId,
              handleCardClick, openedPopupWithConfirmation,
              handleLikeClick)
  {
    this._name = cardDetails.name;
    this._link = cardDetails.link;
    this._likes = cardDetails.likes;
    this._id = cardDetails.owner._id;
    this._card = document.querySelector(selector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._openedPopupWithConfirmation = openedPopupWithConfirmation;
    this._btnLike = this._card.querySelector('.card__button-like');
    this._btnRemoveCard = this._card.querySelector('.card__trash');
    this._btnImage = this._card.querySelector('.card__image');
    this._likeCounter = this._card.querySelector('.card__like-counter');
    this._myId = userId;
  }


    _setEventListeners() {
      //Ставит лайк
      this._btnLike.addEventListener('click',  () =>{
          this._handleLikeClick();
      });
      //Удаление карточки
      this._btnRemoveCard.addEventListener('click',  () => {
        this._openedPopupWithConfirmation();
      })
     // Открывает картинку
      this._btnImage.addEventListener('click',  () => {
        this._handleCardClick(this._link, this._name);
      });
    }

    isLiked() {
      if ((this._likes.find(item =>
        item._id === this._myId) !== undefined)) return true;
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
      this.refreshCounter(this._likes, this.isLiked());
      this._setEventListeners();
      if (this._id === this._myId) this._btnRemoveCard.classList.remove('card__trash_hidden');
      return this._card;
    }

    _setLikes(likes) {
    this._likes = likes;
    }
    refreshCounter(likes, likeStatus) {
      this._likeCounter.textContent = likes.length;
      this._setLikes(likes);
      if (likeStatus) this._btnLike.classList.add('card__button-like_active');
      else this._btnLike.classList.remove('card__button-like_active');
    }
}
