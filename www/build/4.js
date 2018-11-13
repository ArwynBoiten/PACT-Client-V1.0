webpackJsonp([4],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(109);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, _storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._storage = _storage;
        this.storage = _storage;
        this.storage.get('members').then(function (val) {
            _this.personList = val;
            console.log(val);
        });
        this.showProfilePreset = true;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        /*let person = JSON.parse(localStorage.getItem('PERSON'));
        if (person){
          this.person = person;
          this.age = this.getAge(this.person.birthdate);
          this.dob = new Date(this.person.birthdate).toISOString();
        }*/
    };
    ProfilePage.prototype.choosePerson = function (_person) {
        this.storage.set("member", _person);
        this.selectedPerson = _person;
        this.closePreset();
    };
    ProfilePage.prototype.openPreset = function () {
        this.showProfilePreset = true;
    };
    ProfilePage.prototype.closePreset = function () {
        this.showProfilePreset = false;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/ArwynBoiten/Desktop/PACT-v0.1/src/client-app/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar color="primaryDark">\n    <ion-title *ngIf="showProfilePreset">Select Profile</ion-title>\n    <ion-title *ngIf="!showProfilePreset">Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div align="center" *ngIf="showProfilePreset">\n    <div *ngFor="let person of personList">\n      <button color="secondary" ion-button block (click)="choosePerson(person)">{{person.name}}</button>\n    </div>\n  </div>\n\n  <ion-card class="full-width-card personal-info" *ngIf="!showProfilePreset" no-margin>\n    <div align="center" *ngIf="!showProfilePreset">\n      <img class="profile-image" src="assets/imgs/profile.png">\n      <BR>\n      <p class="person-name">{{selectedPerson.name}}</p>\n    </div>\n  </ion-card>\n\n  <ion-card class="full-width-card wallet-info" *ngIf="!showProfilePreset" no-margin>\n    <div align="left">\n      <p class="small-header">Wallet:</p>\n      <p class="small-info" style="font-size: 10pt">{{selectedPerson.publicKey}}</p>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/ArwynBoiten/Desktop/PACT-v0.1/src/client-app/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=4.js.map