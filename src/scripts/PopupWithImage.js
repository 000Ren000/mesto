import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
  constructor(selector) {
    super(selector)
    this._image = this._container.querySelector('.popup__image');
    this._description = this._container.querySelector('.popup__image-description');
  }

  openPopup(link, name) {
    this._image.src = link;
    this._image.alt = name;
    this._description.textContent = name;
    // this._container.classList.add('popup_opened');
    super.openPopup();
    super.setEventEsc();
  }
}
