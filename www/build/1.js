webpackJsonp([1],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewContractPageModule", function() { return NewContractPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_contract__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewContractPageModule = /** @class */ (function () {
    function NewContractPageModule() {
    }
    NewContractPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_contract__["a" /* NewContractPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_contract__["a" /* NewContractPage */])
            ],
        })
    ], NewContractPageModule);
    return NewContractPageModule;
}());

//# sourceMappingURL=new-contract.module.js.map

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

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewContractPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_session__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(109);
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
 * Generated class for the NewContractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewContractPage = /** @class */ (function () {
    function NewContractPage(navCtrl, navParams, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.showInputScreen = true;
        this.showInviteScreen = false;
        this.data = [];
        this.signed = false;
        this.session = new __WEBPACK_IMPORTED_MODULE_3__models_session__["a" /* Session */]();
        this.storage.get('member').then(function (member) {
            _this.member = member;
            _this.setScreen("input");
        });
        __WEBPACK_IMPORTED_MODULE_2__providers_socket__["a" /* SocketProvider */].socket.emit("createSession", { id: this.session.id, member: this.member });
        __WEBPACK_IMPORTED_MODULE_2__providers_socket__["a" /* SocketProvider */].socket.on('presets', function (presets) {
            _this.presets = Object.keys(presets).map(function (key) { return presets[key]; });
        });
        __WEBPACK_IMPORTED_MODULE_2__providers_socket__["a" /* SocketProvider */].socket.on('session', function (_session) {
            _this.session = _session;
            if (_this.currentScreen == "contract") {
                console.log(_this.session);
            }
        });
        __WEBPACK_IMPORTED_MODULE_2__providers_socket__["a" /* SocketProvider */].socket.on('contract', function (contract) {
            _this.setScreen("loading");
            _this.status = "Wachten op medepartijen op ondertekenen";
        });
        __WEBPACK_IMPORTED_MODULE_2__providers_socket__["a" /* SocketProvider */].socket.on('status', function (status) {
            _this.status = status;
        });
        __WEBPACK_IMPORTED_MODULE_2__providers_socket__["a" /* SocketProvider */].socket.on('errorMessage', function (error) {
            console.log(error);
            _this.showErrorAlert(error);
        });
    }
    NewContractPage.prototype.collectRequiredData = function () {
        for (var _i = 0, _a = this.member.role.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.type == "object") {
                var temp = [];
                for (var _b = 0, _c = field.fields; _b < _c.length; _b++) {
                    var inField = _c[_b];
                    temp.push((_d = {}, _d[inField.name] = inField.data, _d));
                }
                this.data.push((_e = {}, _e[field.name] = temp, _e));
            }
            else {
                this.data.push((_f = {}, _f[field.name] = field.data, _f));
            }
        }
        return this.data;
        var _d, _e, _f;
    };
    NewContractPage.prototype.generateContract = function () {
        __WEBPACK_IMPORTED_MODULE_2__providers_socket__["a" /* SocketProvider */].socket.emit("generateContract", this.session.id);
        this.setScreen("contract");
    };
    NewContractPage.prototype.signContract = function () {
        __WEBPACK_IMPORTED_MODULE_2__providers_socket__["a" /* SocketProvider */].socket.emit("signContract", this.session.id);
        this.signed = true;
    };
    NewContractPage.prototype.createSessionListener = function () {
        this.session.members = [this.member];
        this.session.data = this.collectRequiredData();
        __WEBPACK_IMPORTED_MODULE_2__providers_socket__["a" /* SocketProvider */].socket.emit("updateSession", this.session);
        this.setScreen("lobby");
    };
    NewContractPage.prototype.memberCount = function () {
        return this.session.members.length || 0;
    };
    NewContractPage.prototype.setScreen = function (_screen) {
        this.currentScreen = _screen;
    };
    NewContractPage.prototype.showErrorAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Foutmelding!',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    NewContractPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-contract',template:/*ion-inline-start:"/Users/ArwynBoiten/Desktop/PACT-v0.1/src/client-app/src/pages/new-contract/new-contract.html"*/'<!--\n  Generated template for the NewContractPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primaryDark">\n    <ion-title>Contract Session</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- INPUT SCREEN -->\n  <ion-card no-margin *ngIf="currentScreen == \'input\'">\n    <ion-list>\n      <ion-item *ngIf="presets">\n        <ion-label color="primary" stacked>Contract type</ion-label>\n        <ion-select [(ngModel)]="session.preset" placeholder="No Selection">\n          <ion-option *ngFor="let preset of presets" [value]="preset.template">{{preset.template.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="session.preset">\n        <ion-label color="primary" stacked>Role</ion-label>\n        <ion-select [(ngModel)]="member.role" placeholder="No Selection">\n          <ion-option *ngFor="let role of session.preset.roles" [value]="role">{{role.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <div *ngFor="let field of member.role?.fields">\n        <!-- MAKE OBJECT FIELDS -->\n        <div *ngIf="member.role && field.type == \'object\'">\n          <ion-item *ngFor="let field of field.fields">\n            <ion-label color="primary" stacked>{{field.label}}</ion-label>\n            <ion-input type="{{field.type}}" [(ngModel)]="field.data"></ion-input>\n          </ion-item>\n        </div>\n\n        <!-- MAKE NORMAL FIELDS -->\n        <ion-item *ngIf="member.role && field.type != \'object\'">\n          <ion-label color="primary" stacked>{{field.label}}</ion-label>\n          <ion-input type="{{field.type}}" [(ngModel)]="field.data"></ion-input>\n        </ion-item>\n      </div>\n\n      <button margin-top ion-button color="secondary" (click)="createSessionListener()">Create session</button>\n    </ion-list>\n  </ion-card>\n\n  <!-- SESSION SCREEN -->\n  <div *ngIf="currentScreen == \'lobby\' && session.preset" align="center">\n    <ion-card no-margin class="session-card">\n      <div class="row" style="text-align: center">\n        <div class="col col-10 col-offset-15">\n          <p>Session ID</p>\n          <p class="session-code">{{session.id}}</p>\n        </div>\n      </div>\n    </ion-card>\n    <ion-card no-margin class="contract-info-card">\n      <ion-card-header>Contract</ion-card-header>\n\n      <ion-card-content>\n        <p class="label">Type</p>\n        <p>{{session.preset.name}}</p>\n      </ion-card-content>\n\n      <ion-card-content>\n        <p class="label">Description</p>\n        <p>{{session.preset.description}}</p>\n      </ion-card-content>\n    </ion-card>\n\n    <BR/>\n    <BR/>\n\n    <ion-card no-margin class="member-card">\n      <ion-card-header>Members ({{memberCount()}}/{{session.preset.member_limit}})</ion-card-header>\n\n      <div *ngFor="let member of session.members">\n        <ion-card-content>\n          <p>{{member.name}}</p>\n          <p class="role-title">{{member.role.name}}</p>\n        </ion-card-content>\n      </div>\n\n    </ion-card>\n\n    <button ion-button full class="create-button" (click)="generateContract()">Genereer Contract</button>\n  </div>\n\n  <!-- CONTRACT SCREEN -->\n  <div *ngIf="currentScreen == \'contract\' && session.contract" align="center">\n    <ion-card no-margin class="contract-card">\n      <div class="row" style="text-align: center">\n        <div class="col col-10 col-offset-15">\n          <p>Session ID</p>\n          <p class="session-code">{{session.id}}</p>\n        </div>\n      </div>\n    </ion-card>\n    <ion-card no-margin class="contract-info-card">\n      <ion-card-header>Contract</ion-card-header>\n      <ion-card-content class="contract-row" *ngFor="let contractRow of session.contract.data">\n        <p class="content-row">- {{contractRow}}</p>\n      </ion-card-content>\n    </ion-card>\n    <BR/>\n    <BR/>\n\n    <ion-card no-margin class="member-card">\n      <ion-card-header class="member-header-no-margin">Members</ion-card-header>\n      <div *ngFor="let member of session.contract.members">\n        <ion-card-content>\n          <p>{{member.name}} ({{member.role}})</p>\n          <p class="role-title">{{member.address}}</p>\n        </ion-card-content>\n      </div>\n      <p class="accepted-members">Ondertekend: {{session.contract.agreed}}</p>\n    </ion-card>\n\n    <ion-card no-margin class="status-card" *ngIf="signed">\n      <ion-card-header class="member-header-no-margin">Wachten op ondertekenen van overige leden.</ion-card-header>\n      <ion-card-content>\n        <img class="loader" src="assets/imgs/loader.svg">\n      </ion-card-content>\n    </ion-card>\n\n    <button *ngIf="!signed" ion-button full class="create-button" (click)="signContract()">Onderteken</button>\n  </div>\n\n  <!-- LOADING SCREEN -->\n  <div *ngIf="currentScreen == \'loading\'" align="center">\n    <ion-card no-margin class="loading-card">\n      <ion-card-header class="member-header-no-margin">{{status}}...</ion-card-header>\n      <ion-card-content>\n        <img class="loader" src="assets/imgs/loader.svg">\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ArwynBoiten/Desktop/PACT-v0.1/src/client-app/src/pages/new-contract/new-contract.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewContractPage);
    return NewContractPage;
}());

//# sourceMappingURL=new-contract.js.map

/***/ })

});
//# sourceMappingURL=1.js.map