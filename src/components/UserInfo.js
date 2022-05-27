export default class UserInfo {
  constructor({elementName, elementInfo, elementImage}) {
    this._elementName = document.querySelector(elementName);
    this._elementInfo = document.querySelector(elementInfo);
    this._elementImage = document.querySelector(elementImage);
  }
  getInfo() {
    return {
      name: this._elementName.textContent,
      info: this._elementInfo.textContent
    }
  }

  setInfo({name, about, avatar, _id}){
    this._elementName.textContent = name;
    this._elementInfo.textContent = about
    this._elementImage.src = avatar;
    this._elemntId = _id;
  }




}
