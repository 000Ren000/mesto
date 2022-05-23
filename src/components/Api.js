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
        else console.log(`Что-то пошло нетак... ${res.status}`);
      }).then(data => data)
      .catch(err => console.log('Ошибка соедиенения с сервисом ', err));
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
        else console.log(`Что-то пошло нетак... ${res.status}`);
      }).then(data => data)
      .catch(err => console.log('Ошибка соедиенения с сервисом ', err));
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
        else console.log(`Что-то пошло нетак... ${res.status}`);
      }).then(data => data)
      .catch(err => console.log('Ошибка соедиенения с сервисом ', err));
  }
}
