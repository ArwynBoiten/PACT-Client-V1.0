webpackJsonp([0],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanCodePageModule", function() { return ScanCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__join_contract__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ScanCodePageModule = /** @class */ (function () {
    function ScanCodePageModule() {
    }
    ScanCodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__join_contract__["a" /* JoinContractPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__join_contract__["a" /* JoinContractPage */]),
            ],
        })
    ], ScanCodePageModule);
    return ScanCodePageModule;
}());

//# sourceMappingURL=join-contract.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
var Session = /** @class */ (function () {
    function Session() {
        this.id = this.generateSessionID();
        this.members = [];
    }
    Session.prototype.generateSessionID = function () {
        return Math.floor(100000 + Math.random() * 900000) + "";
    };
    Session.prototype.addMember = function (_member) {
        this.members.push(_member);
    };
    return Session;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name Keyboard
 * @description
 * Keyboard plugin for Cordova.
 *
 * Requires Cordova plugin: `cordova-plugin-ionic-keyboard`. For more info, please see the [Keyboard plugin docs](https://github.com/ionic-team/cordova-plugin-ionic-keyboard).
 *
 * @usage
 * ```typescript
 * import { Keyboard } from '@ionic-native/keyboard';
 *
 * constructor(private keyboard: Keyboard) { }
 *
 * ...
 *
 * this.keyboard.show();
 *
 * this.keyboard.hide();
 *
 * ```
 */
var Keyboard = (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Hide the keyboard accessory bar with the next, previous and done buttons.
     * @param hide {boolean}
     */
    /**
       * Hide the keyboard accessory bar with the next, previous and done buttons.
       * @param hide {boolean}
       */
    Keyboard.prototype.hideFormAccessoryBar = /**
       * Hide the keyboard accessory bar with the next, previous and done buttons.
       * @param hide {boolean}
       */
    function (hide) { };
    /**
     * Hide the keyboard if shown.
     */
    /**
       * Hide the keyboard if shown.
       */
    Keyboard.prototype.hide = /**
       * Hide the keyboard if shown.
       */
    function () { };
    /**
     * Force keyboard to be shown.
     */
    /**
       * Force keyboard to be shown.
       */
    Keyboard.prototype.show = /**
       * Force keyboard to be shown.
       */
    function () { };
    /**
     * Programmatically set the resize mode
     * @param mode {string}
     */
    /**
       * Programmatically set the resize mode
       * @param mode {string}
       */
    Keyboard.prototype.setResizeMode = /**
       * Programmatically set the resize mode
       * @param mode {string}
       */
    function (mode) { };
    /**
     * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    /**
       * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    Keyboard.prototype.onKeyboardShow = /**
       * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    function () {
        return;
    };
    /**
     * Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    /**
       * Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    Keyboard.prototype.onKeyboardWillShow = /**
       * Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    function () {
        return;
    };
    /**
     * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    /**
       * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    Keyboard.prototype.onKeyboardHide = /**
       * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    function () {
        return;
    };
    /**
     * Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    /**
       * Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    Keyboard.prototype.onKeyboardWillHide = /**
       * Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.
       * @returns {Observable<any>}
       */
    function () {
        return;
    };
    Keyboard.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
        __metadata("design:type", Boolean)
    ], Keyboard.prototype, "isVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Keyboard.prototype, "hideFormAccessoryBar", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Keyboard.prototype, "hide", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true,
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Keyboard.prototype, "show", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Keyboard.prototype, "setResizeMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            eventObservable: true,
            event: 'native.keyboardshow',
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Keyboard.prototype, "onKeyboardShow", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            eventObservable: true,
            event: 'keyboardWillShow',
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Keyboard.prototype, "onKeyboardWillShow", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            eventObservable: true,
            event: 'native.keyboardhide',
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Keyboard.prototype, "onKeyboardHide", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            eventObservable: true,
            event: 'keyboardWillHide',
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Keyboard.prototype, "onKeyboardWillHide", null);
    /**
     * @name Keyboard
     * @description
     * Keyboard plugin for Cordova.
     *
     * Requires Cordova plugin: `cordova-plugin-ionic-keyboard`. For more info, please see the [Keyboard plugin docs](https://github.com/ionic-team/cordova-plugin-ionic-keyboard).
     *
     * @usage
     * ```typescript
     * import { Keyboard } from '@ionic-native/keyboard';
     *
     * constructor(private keyboard: Keyboard) { }
     *
     * ...
     *
     * this.keyboard.show();
     *
     * this.keyboard.hide();
     *
     * ```
     */
    Keyboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'Keyboard',
            plugin: 'cordova-plugin-ionic-keyboard',
            pluginRef: 'window.Keyboard',
            repo: 'https://github.com/ionic-team/cordova-plugin-ionic-keyboard',
            platforms: ['Android', 'iOS']
        })
    ], Keyboard);
    return Keyboard;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinContractPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_socket__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_contract_models_session__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ScanCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JoinContractPage = /** @class */ (function () {
    function JoinContractPage(navCtrl, navParams, keyboard, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyboard = keyboard;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.tempModel = [null, null, null, null, null, null];
        this.steps = 0;
        this.session = new __WEBPACK_IMPORTED_MODULE_4__new_contract_models_session__["a" /* Session */]();
        this.storage.get('member').then(function (member) {
            _this.member = member;
            _this.setCurrentScreen("code");
        });
        __WEBPACK_IMPORTED_MODULE_3__providers_socket__["a" /* SocketProvider */].socket.on('errorMessage', function (message) {
            _this.showErrorAlert(message);
        });
        __WEBPACK_IMPORTED_MODULE_3__providers_socket__["a" /* SocketProvider */].socket.on('session', function (session) {
            _this.session = session;
            _this.steps++;
            if (_this.steps == 1) {
                _this.memberIndex = (_this.session.members.length - 1);
                _this.setCurrentScreen("input");
            }
            if (_this.steps == 2) {
                _this.setCurrentScreen("lobby");
            }
            if (_this.steps == 3) {
                _this.setCurrentScreen("contract");
            }
        });
        __WEBPACK_IMPORTED_MODULE_3__providers_socket__["a" /* SocketProvider */].socket.on('contract', function (contract) {
            _this.setCurrentScreen("loading");
        });
        __WEBPACK_IMPORTED_MODULE_3__providers_socket__["a" /* SocketProvider */].socket.on('status', function (status) {
            _this.status = status;
        });
    }
    JoinContractPage.prototype.signContract = function () {
        __WEBPACK_IMPORTED_MODULE_3__providers_socket__["a" /* SocketProvider */].socket.emit("signContract", this.session.id);
        this.setCurrentScreen("loading");
        this.status = "Wachten op medepartijen";
    };
    JoinContractPage.prototype.joinSessionListener = function () {
        this.collectRequiredData();
        __WEBPACK_IMPORTED_MODULE_3__providers_socket__["a" /* SocketProvider */].socket.emit("updateSession", this.session);
    };
    JoinContractPage.prototype.collectRequiredData = function () {
        for (var _i = 0, _a = this.session.members[this.memberIndex].role.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.type == "object") {
                var temp = [];
                for (var _b = 0, _c = field.fields; _b < _c.length; _b++) {
                    var inField = _c[_b];
                    temp.push((_d = {}, _d[inField.name] = inField.data, _d));
                }
                this.session.data.push((_e = {}, _e[field.name] = temp, _e));
            }
            else {
                this.session.data.push((_f = {}, _f[field.name] = field.data, _f));
            }
        }
        return this.session.data;
        var _d, _e, _f;
    };
    JoinContractPage.prototype.joinSession = function () {
        var inputID = this.getDigitValue();
        if (inputID.length >= 6) {
            console.log("Join session: " + inputID);
            __WEBPACK_IMPORTED_MODULE_3__providers_socket__["a" /* SocketProvider */].socket.emit("joinSession", { id: inputID, member: this.member });
        }
    };
    JoinContractPage.prototype.showKeyboard = function () {
        this.keyboard.show();
    };
    JoinContractPage.prototype.moveFocus = function (currentID) {
        var nextElement = document.getElementById('in-' + (currentID + 1));
        if (currentID != "6") {
            nextElement.focus();
        }
    };
    JoinContractPage.prototype.showErrorAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Foutmelding!',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    JoinContractPage.prototype.getDigitValue = function () {
        var value = "";
        for (var _i = 0, _a = this.tempModel; _i < _a.length; _i++) {
            var digit = _a[_i];
            if (digit != null) {
                value += digit;
            }
        }
        return value;
    };
    JoinContractPage.prototype.setCurrentScreen = function (_screen) {
        this.currentScreen = _screen;
    };
    JoinContractPage.prototype.memberCount = function () {
        return this.session.members.length || 0;
    };
    JoinContractPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'join-contract',template:/*ion-inline-start:"/Users/ArwynBoiten/Desktop/PACT-v0.1/src/client-app/src/pages/join-contract/join-contract.html"*/'<!--\n  Generated template for the ScanCodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primaryDark">\n    <ion-title>Join Session</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding *ngIf="currentScreen == \'code\'">\n  <ion-card no-margin class="session-code-card">\n    <ion-grid>\n      <p class="input-header">Enter session code</p>\n      <ion-row justify-content-center>\n          <ion-col class="code-inputs" col-1 *ngFor="let number of [1,2,3,4,5,6]">\n            <input id="in-{{number}}"\n                   type="tel"\n                   pattern="[0-9]*"\n                   maxlength="1"\n                   [(ngModel)]="tempModel[number-1]"\n                   (click)="showKeyboard()"\n                   (keyup)="moveFocus(number)">\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card no-margin class="session-button-card">\n    <button class="join-button" color="secondary" ion-button block (click)="joinSession()">Join Session</button>\n  </ion-card>\n</ion-content>\n\n<ion-content no-padding *ngIf="currentScreen == \'input\'" align="center">\n  <ion-card no-margin class="session-card">\n    <div class="row" style="text-align: center">\n      <div class="col col-10 col-offset-15">\n        <p>Session ID</p>\n        <p class="session-code">{{session.id}}</p>\n      </div>\n    </div>\n  </ion-card>\n  <ion-card no-margin class="contract-info-card">\n    <ion-card-header>Contract</ion-card-header>\n\n    <ion-card-content>\n      <p class="label">Type</p>\n      <p>{{session.preset.name}}</p>\n    </ion-card-content>\n\n    <ion-card-content>\n      <p class="label">Description</p>\n      <p>{{session.preset.description}}</p>\n    </ion-card-content>\n  </ion-card>\n  <BR/>\n  <ion-card no-margin class="preset-input-card">\n    <ion-card-header>Additional Information</ion-card-header>\n\n    <ion-card-content>\n\n      <ion-item *ngIf="session.preset">\n        <ion-label color="primary" stacked>Role</ion-label>\n        <ion-select [(ngModel)]="session.members[memberIndex].role" placeholder="No Selection">\n          <ion-option *ngFor="let role of session.preset.roles" [value]="role">{{role.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <div *ngFor="let field of session.members[memberIndex].role?.fields">\n        <!-- MAKE OBJECT FIELDS -->\n        <div *ngIf="session.members[memberIndex].role && field.type == \'object\'">\n          <ion-item *ngFor="let field of field.fields">\n            <ion-label color="primary" stacked>{{field.label}}</ion-label>\n            <ion-input type="{{field.type}}" [(ngModel)]="field.data"></ion-input>\n          </ion-item>\n        </div>\n\n         <!-- MAKE NORMAL FIELDS -->\n        <ion-item *ngIf="session.members[memberIndex].role && field.type != \'object\'">\n          <ion-label color="primary" stacked>{{field.label}}</ion-label>\n          <ion-input type="{{field.type}}" [(ngModel)]="field.data"></ion-input>\n        </ion-item>\n      </div>\n\n      <button ion-button full class="create-button" (click)="joinSessionListener()">Deelnemen</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-content no-padding *ngIf="currentScreen == \'lobby\'" align="center" overflow-scroll="false">\n  <ion-card no-margin class="session-card">\n    <div class="row" style="text-align: center">\n      <div class="col col-10 col-offset-15">\n        <p>Session ID</p>\n        <p class="session-code">{{session.id}}</p>\n      </div>\n    </div>\n  </ion-card>\n  <ion-card no-margin class="contract-info-card">\n    <ion-card-header>Contract</ion-card-header>\n\n    <ion-card-content>\n      <p class="label">Type</p>\n      <p>{{session.preset.name}}</p>\n    </ion-card-content>\n\n    <ion-card-content>\n      <p class="label">Description</p>\n      <p>{{session.preset.description}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <BR/>\n  <BR/>\n\n  <ion-card no-margin class="member-card">\n    <ion-card-header>Members ({{memberCount()}}/{{session.preset.member_limit}})</ion-card-header>\n    <div *ngFor="let member of session.members">\n      <ion-card-content>\n        <p>{{member.name}}</p>\n        <p class="role-title">{{member.role.name}}</p>\n      </ion-card-content>\n    </div>\n  </ion-card>\n</ion-content>\n\n<ion-content no-padding *ngIf="currentScreen == \'contract\'" align="center">\n    <ion-card no-margin class="contract-card">\n      <div class="row" style="text-align: center">\n        <div class="col col-10 col-offset-15">\n          <p>Session ID</p>\n          <p class="session-code">{{session.id}}</p>\n        </div>\n      </div>\n    </ion-card>\n    <ion-card no-margin class="contract-info-card">\n      <ion-card-header>Contract</ion-card-header>\n      <ion-card-content class="contract-row" *ngFor="let contractRow of session.contract.data">\n        <p class="content-row">- {{contractRow}}</p>\n      </ion-card-content>\n    </ion-card>\n    <BR/>\n    <BR/>\n\n    <ion-card no-margin class="member-card">\n      <ion-card-header class="member-header-no-margin">Members</ion-card-header>\n      <div *ngFor="let member of session.contract.members">\n        <ion-card-content>\n          <p>{{member.name}} ({{member.role}})</p>\n          <p class="role-title">{{member.address}}</p>\n        </ion-card-content>\n      </div>\n      <p class="accepted-members">Ondertekend: {{session.contract.agreed}}</p>\n\n    </ion-card>\n\n    <button ion-button full class="create-button" (click)="signContract()">Onderteken</button>\n</ion-content>\n\n<ion-content no-padding *ngIf="currentScreen == \'loading\'" align="center">\n  <ion-card no-margin class="loading-card">\n    <ion-card-header class="member-header-no-margin">{{status}}...</ion-card-header>\n    <ion-card-content>\n      <img class="loader" src="assets/imgs/loader.svg">\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/ArwynBoiten/Desktop/PACT-v0.1/src/client-app/src/pages/join-contract/join-contract.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], JoinContractPage);
    return JoinContractPage;
}());

//# sourceMappingURL=join-contract.js.map

/***/ })

});
//# sourceMappingURL=0.js.map