import {exportTypedArrayMethod} from 'core-js/internals/array-buffer-view-core.js';

export default class Api {
  constructor(option) {
    this._baseURL = option.baseURL;
    this._headers = option.headers;
  }

  getProfileinfo() {
    return fetch(this._baseURL, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) return res.json();
        else console.log(`Что-то пошло нетак... ${res.status}`);
      }).then(data => data)
      .catch(err => console.log('Ошибка соедиенения с сервисом ', err));
  }

  getCardInfo() {
    return fetch(this._baseURL, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) return res.json();
        else return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  setProfileInfo({name, about}) {
    return fetch(this._baseURL, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        "name": name,
        "about": about
      })
    })
      .then(res => {
        if (res.ok) return res.json();
        else return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  changeAvatar(avatar) {
    return fetch(this._baseURL+`/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        "avatar": avatar,
      })
    }).then(res => {
      if (res.ok) return res.json();
      else return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  setNewCardInfo({name, link}) {
    return fetch(this._baseURL, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        "name": name,
        "link": link
      })
    })
      .then(res => {
        if (res.ok) return res.json();
        else return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  deleteCard(cardId) {
    return fetch(this._baseURL+`/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => {
      if (res.ok) return res.json();
      else return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  likedCard(cardId) {
    return fetch(this._baseURL+`/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then(res => {
      if (res.ok) return res.json();
      else return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  unlikedCard(cardId) {
    return fetch(this._baseURL+`/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => {
      if (res.ok) return res.json();
      else return Promise.reject(`Ошибка: ${res.status}`);
    });
  }


}
