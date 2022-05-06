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
    const form = container.querySelector('.edit-form');
    form.removeEventListener('keydown', (evt) => this._handleEscClos(container));
  }

   openPopup() {
    this._container.classList.add('popup_opened');
  }

  //  resetPopup() {
  //   cardName.value = null;
  //   cardLink.value = null;
  //   cardPopupValitator.disableButton();
  // }



  setEventListener() {
    this._btnClose.addEventListener('click',  () => this.closePopup(this._container));
    this._form.addEventListener('keydown', (evt) => this._handleEscClos(evt, this._container));
    this._container.addEventListener('click',  (event) => {
      if (event.target === event.currentTarget) {
       this.closePopup(this._container);
      }
    });
  }
}
