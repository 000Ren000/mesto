import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(container, sender) {
    super(container);
    this._sender = sender;
  }
  _getInputValues(){
    return this._form.querySelectorAll('.edit-form__input');
  }

  setEventListener() {
    this._btnClose.addEventListener('click',  () => super.closePopup());
    this._form.addEventListener('keydown', (evt) => this._handleEscClos(evt, this._container));
    this._container.addEventListener('click',  (event) => {
      if (event.target === event.currentTarget) {
        this.closePopup(this._container);
      }
    });

    this._form.addEventListener('submit', this._sender);
  }

   resetPopup(allinputs) {
    allinputs.forEach(input => input.value = null);
  }

  closePopup() {
    // container.classList.remove('popup_opened');
    // const form = container.querySelector('.edit-form');
    // form.removeEventListener('keydown', (evt) => this._handleEscClos(container));
    super.closePopup(this._container)
    this.resetPopup(this._getInputValues())
  }
}
