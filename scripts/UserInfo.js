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

  setInfo(newName, newInfo){
    this._elementName.textContent = newName;
    this._elementInfo.textContent = newInfo
  }

}
