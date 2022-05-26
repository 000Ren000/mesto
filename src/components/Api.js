import {exportTypedArrayMethod} from 'core-js/internals/array-buffer-view-core.js';

export default class Api {
  constructor(option) {
    this._baseURL = option.baseURL;
    this._headers = option.headers;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    else return Promise.reject(`Ошибка: ${res.status}`);
  }
  getProfileinfo() {
    return fetch(this._baseURL+'/users/me', {
      method: 'GET',
      headers: this._headers
    })
      .then(res => this._checkResponse(res)).then(data => data)
  }

  getCardInfo() {
    return fetch(this._baseURL+'/cards', {
      method: 'GET',
      headers: this._headers
    })
      .then(res => this._checkResponse(res));
  }

  setProfileInfo({name, about}) {
    return fetch(this._baseURL+'/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        "name": name,
        "about": about
      })
    })
      .then(res => this._checkResponse(res));
  }

  changeAvatar(avatar) {
    return fetch(this._baseURL+`/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        "avatar": avatar,
      })
    }).then(res => this._checkResponse(res));
  }

  setNewCardInfo({name, link}) {
    return fetch(this._baseURL+'/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        "name": name,
        "link": link
      })
    })
      .then(res => this._checkResponse(res));
  }

  deleteCard(cardId) {
    return fetch(this._baseURL+`/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => this._checkResponse(res));
  }

  likedCard(cardId) {
    return fetch(this._baseURL+`/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then(res => this._checkResponse(res));
  }

  unlikedCard(cardId) {
    return fetch(this._baseURL+`/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => this._checkResponse(res));
  }


}
