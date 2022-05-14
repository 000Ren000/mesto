export default class UserInfo {
  constructor({elementName, elementInfo}) {
    this._elementName = document.querySelector(elementName);
    this._elementInfo = document.querySelector(elementInfo);
  }
  getInfo() {
    return {
      name: this._elementName.textContent,
      info: this._elementInfo.textContent
    }
  }

  setInfo({profilePopupName, profilePopupProfession}){
    this._elementName.textContent = profilePopupName;
    this._elementInfo.textContent = profilePopupProfession
  }

}
