(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e.owner._id,this._card=document.querySelector(n).content.querySelector(".card").cloneNode(!0),this._handleCardClick=o,this._handleLikeClick=u,this._openedPopupWithConfirmation=i,this._btnLike=this._card.querySelector(".card__button-like"),this._btnRemoveCard=this._card.querySelector(".card__trash"),this._btnImage=this._card.querySelector(".card__image"),this._likeCounter=this._card.querySelector(".card__like-counter"),this._myId=r}var n,r;return n=t,(r=[{key:"_setEventListeners",value:function(){var e=this;this._btnLike.addEventListener("click",(function(){e._handleLikeClick()})),this._btnRemoveCard.addEventListener("click",(function(){e._openedPopupWithConfirmation()})),this._btnImage.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)}))}},{key:"isLiked",value:function(){var e=this;if(void 0!==this._likes.find((function(t){return t._id===e._myId})))return!0}},{key:"removeCard",value:function(){this._card.remove(),this._card=null}},{key:"createCard",value:function(){var e=this._card.querySelector(".card__image");return e.src=this._link,e.alt=this._name,this._card.querySelector(".card__title").textContent=this._name,this.refreshCounter(this._likes,this.isLiked()),this._setEventListeners(),this._id===this._myId&&this._btnRemoveCard.classList.remove("card__trash_hidden"),this._card}},{key:"_setLikes",value:function(e){this._likes=e}},{key:"refreshCounter",value:function(e,t){this._likeCounter.textContent=e.length,this._setLikes(e),t?this._btnLike.classList.add("card__button-like_active"):this._btnLike.classList.remove("card__button-like_active")}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,r;return t=e,r=[{key:"setItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?this._container.prepend(e):this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e,t){this._renderer(e,t)}}],r&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n.querySelector(t.formSelector),this._button=this._form.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_isValid",value:function(e){var t={};return t.status=e.validity.valid,t.message=e.validationMessage,t}},{key:"_handleFormInput",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error")),n=this._isValid(e);n.status?(e.classList.remove(this._inputErrorClass),t.textContent=""):(e.classList.add(this._inputErrorClass),t.textContent=n.message)}},{key:"_toggleButtonState",value:function(){this._form.checkValidity()?(this._button.removeAttribute("disabled"),this._button.classList.remove(this._inactiveButtonClass)):(this._button.setAttribute("disabled","disabled"),this._button.classList.add(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;null!==this._form&&(this._toggleButtonState(),this._inputList.forEach((function(t){return t.addEventListener("input",(function(){e._handleFormInput(t),e._toggleButtonState()}))})))}},{key:"disableButton",value:function(){this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u={formSelector:".edit-form",inputSelector:".edit-form__input",submitButtonSelector:".edit-form__button-save",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},a=(document.querySelector(".popup__image"),document.querySelector("#image-popup"),document.querySelector(".popup__image-description"),document.querySelector(".profile__edit-button")),c=(document.querySelector(".profile__name"),document.querySelector(".profile__profession"),document.querySelector(".profile__add-button")),s=document.querySelector("#edit-form"),l=s.querySelector(".edit-form__input_type_name"),f=s.querySelector(".edit-form__input_type_profession"),p=(document.querySelectorAll(".popup__button-close"),document.querySelector("#add-Form")),h=(p.querySelector(".edit-form__input_type_name"),p.querySelector(".edit-form__input_type_link"),document.querySelector(".photo__cards"),document.querySelectorAll(".popup"),document.querySelector(".profile__avatar-container")),d=document.querySelector("#popup-avatar");function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(t),this._form=this._container.querySelector(".edit-form"),this._btnClose=this._container.querySelector(".popup__button-close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"closePopup",value:function(){this._container.classList.remove("popup_opened"),this._container.removeEventListener("keyup",this._handleEscClose)}},{key:"openPopup",value:function(){this._container.classList.add("popup_opened"),this._container.addEventListener("keyup",this._handleEscClose)}},{key:"setEventListener",value:function(){var e=this;this._btnClose.addEventListener("click",(function(){return e.closePopup()})),this._container.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.closePopup()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=t,n._inputList=n._form.querySelectorAll(".edit-form__input"),n._btnSubmit=n._form.querySelector(".edit-form__button-save"),n}return t=u,(n=[{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListener",value:function(){b(w(u.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}},{key:"resetPopup",value:function(){this._form.reset()}},{key:"closePopup",value:function(){b(w(u.prototype),"closePopup",this).call(this),this.resetPopup()}},{key:"showWaiting",value:function(){this._oldName=this._btnSubmit.textContent,this._btnSubmit.textContent="Сохранение..."}},{key:"hideWaiting",value:function(){this._btnSubmit.textContent=this._oldName}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.elementName,r=t.elementInfo,o=t.elementImage;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elementName=document.querySelector(n),this._elementInfo=document.querySelector(r),this._elementImage=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getInfo",value:function(){return{name:this._elementName.textContent,info:this._elementInfo.textContent}}},{key:"setInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._elementName.textContent=t,this._elementInfo.textContent=n,this._elementImage.src=r,this._elemntId=o}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function I(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._container.querySelector(".popup__image"),t._description=t._container.querySelector(".popup__image-description"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._image.src=e,this._image.alt=t,this._description.textContent=t,j(T(u.prototype),"openPopup",this).call(this)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseURL=t.baseURL,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfileinfo",value:function(){var e=this;return fetch(this._baseURL+"/users/me",{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)})).then((function(e){return e}))}},{key:"getCardInfo",value:function(){var e=this;return fetch(this._baseURL+"/cards",{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"setProfileInfo",value:function(e){var t=this,n=e.name,r=e.about;return fetch(this._baseURL+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch(this._baseURL+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResponse(e)}))}},{key:"setNewCardInfo",value:function(e){var t=this,n=e.name,r=e.link;return fetch(this._baseURL+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch(this._baseURL+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"likedCard",value:function(e){var t=this;return fetch(this._baseURL+"/cards/".concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"unlikedCard",value:function(e){var t=this;return fetch(this._baseURL+"/cards/".concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},N.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function F(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var J,M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._btnSubmit=t._form.querySelector(".edit-form__button-save"),t}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitAction=e}},{key:"setEventListener",value:function(){N(H(u.prototype),"setEventListener",this).call(this)}},{key:"sendSubmit",value:function(){this._form.addEventListener("submit",this._handleSubmitAction)}},{key:"openPopup",value:function(){N(H(u.prototype),"openPopup",this).call(this)}},{key:"closePopup",value:function(){N(H(u.prototype),"closePopup",this).call(this),this._form.removeEventListener("submit",this._handleSubmitAction)}},{key:"showWaiting",value:function(){this._btnSubmit.textContent="Удаление..."}},{key:"hideWaiting",value:function(){this._btnSubmit.textContent="Да"}}])&&W(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=new x({baseURL:"https://nomoreparties.co/v1/cohort-41",headers:{authorization:"2e1e6251-c43e-48e5-b292-2b34f8f03df1","Content-Type":"application/json"}});Promise.all([z.getProfileinfo(),z.getCardInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];J=o._id,Z.setInfo(o),ee.renderItems(i)})).catch((function(e){return console.log("что-то пошло не так",e)}));var $=new C("#edit-form",(function(e){e.preventDefault(),$.showWaiting(),z.setProfileInfo($.getInputValues()).then((function(e){Z.setInfo(e),$.closePopup()})).catch((function(e){return console.log("Что-то пошло не так",e)})).finally((function(){$.hideWaiting()}))})),K=new C("#add-Form",(function(e){e.preventDefault(),K.showWaiting(),z.setNewCardInfo(K.getInputValues()).then((function(e){ee.addItem(e,!0),K.closePopup()})).catch((function(e){return console.log("что-то пошло не так",e)})).finally((function(){return K.hideWaiting()}))})),Q=new B("#image-popup"),X=new M("#popup-confirmation"),Y=new C("#popup-avatar",(function(e){e.preventDefault();var t=Y.getInputValues().link;Y.showWaiting(),z.changeAvatar(t).then((function(e){Z.setInfo(e),Y.closePopup()})).catch((function(e){return console.log("Что то пошло не так",e)})).finally((function(){Y.hideWaiting()}))})),Z=new E({elementName:".profile__name",elementInfo:".profile__profession",elementImage:".profile__avatar"}),ee=new r({renderer:function(e,t){ee.setItem(ie(e),t)}},".photo__cards");$.setEventListener(),K.setEventListener(),Q.setEventListener(),Y.setEventListener(),X.setEventListener();var te=new i(u,s);te.enableValidation();var ne=new i(u,p);ne.enableValidation();var re=new i(u,d);re.enableValidation();var oe=function(){var e=Z.getInfo(),t=e.name,n=e.info;l.value=t,f.value=n},ie=function(e){var n=new t(e,"#photo__card",J,(function(e,t){Q.openPopup(e,t)}),(function(){X.setSubmitAction((function(t){t.preventDefault(),X.showWaiting(),z.deleteCard(e._id).then((function(t){console.log("Карточка ".concat(e.name),t.message),n.removeCard(),X.closePopup()})).catch((function(e){console.log("Что-то пошло не так",e)})).finally((function(){return X.hideWaiting()}))})),X.sendSubmit(),X.openPopup()}),(function(){var t=!n.isLiked();t?z.likedCard(e._id).then((function(e){n.refreshCounter(e.likes,t)})).catch((function(e){return console.log("Что то пошло не так",e)})):z.unlikedCard(e._id).then((function(e){n.refreshCounter(e.likes,t)})).catch((function(e){return console.log("Что то пошло не так",e)}))}));return n.createCard()};oe(),a.addEventListener("click",(function(){oe(),te.disableButton(),$.openPopup()})),c.addEventListener("click",(function(){ne.disableButton(),K.openPopup()})),h.addEventListener("click",(function(){re.disableButton(),Y.openPopup()}))})();