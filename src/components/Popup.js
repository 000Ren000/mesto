export default class Popup {
  constructor(selector) {
    this._container = document.querySelector(selector);
    this._form = this._container.querySelector('.edit-form');
    this._btnClose = this._container.querySelector('.popup__button-close');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

   _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

   closePopup() {
    this._container.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

   openPopup() {
    this._container.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  setEventListener() {
    this._btnClose.addEventListener('click', () => this.closePopup());
    this._container.addEventListener('mousedown', (event) => {
      if (event.target === event.currentTarget) {
        this.closePopup();
      }
    });
  }
}
