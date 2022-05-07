import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(container, sender) {
    super(container);
    this._sender = sender;
  }
  _getInputValues(){
    // return {
    //     name: this._form.querySelector('.edit-form__input_type_name'),
    //     link: this._form.querySelector('.edit-form__input_type_link')
    // }
    return this._form.querySelectorAll('.edit-form__input');
  }

  setEventListener() {
    this._btnClose.addEventListener('click',  () => this.closePopup(this._container));
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
    console.log(allinputs);
  }

  closePopup(container = this._container) {
    container.classList.remove('popup_opened');
    const form = container.querySelector('.edit-form');
    form.removeEventListener('keydown', (evt) => this._handleEscClos(container));
    this.resetPopup(this._getInputValues())
  }
}
