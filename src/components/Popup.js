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
    // const form = container.querySelector('.edit-form');
    this._container.removeEventListener('keydown', this._handleEscClose);
  }

   openPopup() {
    this._container.classList.add('popup_opened');
    this._container.addEventListener('keydown', this._handleEscClose);
  }

  setEventListener() {
    this._btnClose.addEventListener('click', () => this.closePopup());
    this._container.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        this.closePopup();
      }
    });
  }
}
