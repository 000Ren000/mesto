export default class Popup {
  constructor(selector) {
    this._container = document.querySelector(selector);
    this._form = this._container.querySelector('.edit-form');
    this._btnClose = this._container.querySelector('.popup__button-close')
  }

   _handleEscClos(evt, container) {
    if (evt.key === 'Escape') {
      this.closePopup(container);
    }
  }

   closePopup(container = this._container) {
    container.classList.remove('popup_opened');
    // const form = container.querySelector('.edit-form');
    container.removeEventListener('keydown', (evt) => this._handleEscClos.bind(container));
  }

   openPopup() {
    this._container.classList.add('popup_opened');
  }

  setEventEsc() {
    this._container.addEventListener('keydown', (evt) => this._handleEscClos.bind(evt, this._container));
  }

  setEventListener() {
    this._btnClose.addEventListener('click', () => this.closePopup(this._container));
    this.setEventEsc();
    this._container.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        this.closePopup(this._container);
      }
    });
  }
}
