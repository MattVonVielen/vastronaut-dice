webpackJsonp([1,4],{

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiceRoll; });
var DiceRoll = (function () {
    function DiceRoll(num) {
        this.dice = [];
        this.successes = 0;
        this.crits = 0;
        this.biffs = 0;
        this.num = num;
        this.when = new Date();
        for (var i = 0; i < this.num; i++) {
            var roll = Math.floor(Math.random() * 10) + 1;
            this.dice.push(roll);
            switch (roll) {
                case 1:
                    this.biffs += 1;
                    break;
                case 10:
                    this.crits += 1;
                // Fall through to success case
                case 7:
                case 8:
                case 9:
                    this.successes += 1;
                    break;
            }
        }
        this.total = this.successes + this.crits - this.biffs;
    }
    return DiceRoll;
}());
//# sourceMappingURL=dice-roll.js.map

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 529;


/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(679);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dice_roll__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.num = 1;
        this.rollHistory = [];
    }
    AppComponent.prototype.roll = function () {
        this.rollHistory.unshift(new __WEBPACK_IMPORTED_MODULE_1__dice_roll__["a" /* DiceRoll */](this.num));
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(739),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dice_roll_component__ = __webpack_require__(678);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dice_roll_component__["a" /* DiceRollComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dice_roll__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiceRollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiceRollComponent = (function () {
    function DiceRollComponent() {
        this.closed = true;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dice_roll__["a" /* DiceRoll */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__dice_roll__["a" /* DiceRoll */]) === 'function' && _a) || Object)
    ], DiceRollComponent.prototype, "roll", void 0);
    DiceRollComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dice-roll',
            template: __webpack_require__(740),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [])
    ], DiceRollComponent);
    return DiceRollComponent;
    var _a;
}());
//# sourceMappingURL=dice-roll.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(144)();
// imports


// module
exports.push([module.i, ".mat-toolbar {\n  font-family: 'Orbitron'; }\n  .mat-toolbar .spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n\ninput {\n  text-align: center;\n  font-size: 18px;\n  width: 140px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(144)();
// imports


// module
exports.push([module.i, ".dice-roll {\n  margin: 12px; }\n  .dice-roll .avatar {\n    text-align: center;\n    font-size: 12px; }\n    .dice-roll .avatar .bignum {\n      font-size: 22px; }\n  .dice-roll .roll-header {\n    width: 100%;\n    text-align: right; }\n  .dice-roll .dice-tray {\n    padding-top: 12px;\n    text-align: center;\n    font-size: 5em; }\n  .dice-roll .d10-1 {\n    color: #f44336; }\n  .dice-roll .d10-7, .dice-roll .d10-8, .dice-roll .d10-9 {\n    color: #ffd840; }\n  .dice-roll .d10-10 {\n    color: #43f436; }\n  .dice-roll .hidden {\n    display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 406,
	"./af.js": 406,
	"./ar": 413,
	"./ar-dz": 407,
	"./ar-dz.js": 407,
	"./ar-kw": 408,
	"./ar-kw.js": 408,
	"./ar-ly": 409,
	"./ar-ly.js": 409,
	"./ar-ma": 410,
	"./ar-ma.js": 410,
	"./ar-sa": 411,
	"./ar-sa.js": 411,
	"./ar-tn": 412,
	"./ar-tn.js": 412,
	"./ar.js": 413,
	"./az": 414,
	"./az.js": 414,
	"./be": 415,
	"./be.js": 415,
	"./bg": 416,
	"./bg.js": 416,
	"./bn": 417,
	"./bn.js": 417,
	"./bo": 418,
	"./bo.js": 418,
	"./br": 419,
	"./br.js": 419,
	"./bs": 420,
	"./bs.js": 420,
	"./ca": 421,
	"./ca.js": 421,
	"./cs": 422,
	"./cs.js": 422,
	"./cv": 423,
	"./cv.js": 423,
	"./cy": 424,
	"./cy.js": 424,
	"./da": 425,
	"./da.js": 425,
	"./de": 428,
	"./de-at": 426,
	"./de-at.js": 426,
	"./de-ch": 427,
	"./de-ch.js": 427,
	"./de.js": 428,
	"./dv": 429,
	"./dv.js": 429,
	"./el": 430,
	"./el.js": 430,
	"./en-au": 431,
	"./en-au.js": 431,
	"./en-ca": 432,
	"./en-ca.js": 432,
	"./en-gb": 433,
	"./en-gb.js": 433,
	"./en-ie": 434,
	"./en-ie.js": 434,
	"./en-nz": 435,
	"./en-nz.js": 435,
	"./eo": 436,
	"./eo.js": 436,
	"./es": 438,
	"./es-do": 437,
	"./es-do.js": 437,
	"./es.js": 438,
	"./et": 439,
	"./et.js": 439,
	"./eu": 440,
	"./eu.js": 440,
	"./fa": 441,
	"./fa.js": 441,
	"./fi": 442,
	"./fi.js": 442,
	"./fo": 443,
	"./fo.js": 443,
	"./fr": 446,
	"./fr-ca": 444,
	"./fr-ca.js": 444,
	"./fr-ch": 445,
	"./fr-ch.js": 445,
	"./fr.js": 446,
	"./fy": 447,
	"./fy.js": 447,
	"./gd": 448,
	"./gd.js": 448,
	"./gl": 449,
	"./gl.js": 449,
	"./gom-latn": 450,
	"./gom-latn.js": 450,
	"./he": 451,
	"./he.js": 451,
	"./hi": 452,
	"./hi.js": 452,
	"./hr": 453,
	"./hr.js": 453,
	"./hu": 454,
	"./hu.js": 454,
	"./hy-am": 455,
	"./hy-am.js": 455,
	"./id": 456,
	"./id.js": 456,
	"./is": 457,
	"./is.js": 457,
	"./it": 458,
	"./it.js": 458,
	"./ja": 459,
	"./ja.js": 459,
	"./jv": 460,
	"./jv.js": 460,
	"./ka": 461,
	"./ka.js": 461,
	"./kk": 462,
	"./kk.js": 462,
	"./km": 463,
	"./km.js": 463,
	"./kn": 464,
	"./kn.js": 464,
	"./ko": 465,
	"./ko.js": 465,
	"./ky": 466,
	"./ky.js": 466,
	"./lb": 467,
	"./lb.js": 467,
	"./lo": 468,
	"./lo.js": 468,
	"./lt": 469,
	"./lt.js": 469,
	"./lv": 470,
	"./lv.js": 470,
	"./me": 471,
	"./me.js": 471,
	"./mi": 472,
	"./mi.js": 472,
	"./mk": 473,
	"./mk.js": 473,
	"./ml": 474,
	"./ml.js": 474,
	"./mr": 475,
	"./mr.js": 475,
	"./ms": 477,
	"./ms-my": 476,
	"./ms-my.js": 476,
	"./ms.js": 477,
	"./my": 478,
	"./my.js": 478,
	"./nb": 479,
	"./nb.js": 479,
	"./ne": 480,
	"./ne.js": 480,
	"./nl": 482,
	"./nl-be": 481,
	"./nl-be.js": 481,
	"./nl.js": 482,
	"./nn": 483,
	"./nn.js": 483,
	"./pa-in": 484,
	"./pa-in.js": 484,
	"./pl": 485,
	"./pl.js": 485,
	"./pt": 487,
	"./pt-br": 486,
	"./pt-br.js": 486,
	"./pt.js": 487,
	"./ro": 488,
	"./ro.js": 488,
	"./ru": 489,
	"./ru.js": 489,
	"./sd": 490,
	"./sd.js": 490,
	"./se": 491,
	"./se.js": 491,
	"./si": 492,
	"./si.js": 492,
	"./sk": 493,
	"./sk.js": 493,
	"./sl": 494,
	"./sl.js": 494,
	"./sq": 495,
	"./sq.js": 495,
	"./sr": 497,
	"./sr-cyrl": 496,
	"./sr-cyrl.js": 496,
	"./sr.js": 497,
	"./ss": 498,
	"./ss.js": 498,
	"./sv": 499,
	"./sv.js": 499,
	"./sw": 500,
	"./sw.js": 500,
	"./ta": 501,
	"./ta.js": 501,
	"./te": 502,
	"./te.js": 502,
	"./tet": 503,
	"./tet.js": 503,
	"./th": 504,
	"./th.js": 504,
	"./tl-ph": 505,
	"./tl-ph.js": 505,
	"./tlh": 506,
	"./tlh.js": 506,
	"./tr": 507,
	"./tr.js": 507,
	"./tzl": 508,
	"./tzl.js": 508,
	"./tzm": 510,
	"./tzm-latn": 509,
	"./tzm-latn.js": 509,
	"./tzm.js": 510,
	"./uk": 511,
	"./uk.js": 511,
	"./ur": 512,
	"./ur.js": 512,
	"./uz": 514,
	"./uz-latn": 513,
	"./uz-latn.js": 513,
	"./uz.js": 514,
	"./vi": 515,
	"./vi.js": 515,
	"./x-pseudo": 516,
	"./x-pseudo.js": 516,
	"./yo": 517,
	"./yo.js": 517,
	"./zh-cn": 518,
	"./zh-cn.js": 518,
	"./zh-hk": 519,
	"./zh-hk.js": 519,
	"./zh-tw": 520,
	"./zh-tw.js": 520
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 737;


/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n  <span>Vastronaut Dice</span>\n</md-toolbar>\n\n<md-card>\n  <md-card-content>\n    <form>\n      <md-input-container>\n        <input mdInput name=\"num\" type=\"number\" pattern=\"\\d*\" min=\"1\" placeholder=\"Number of Dice\" [(ngModel)]=\"num\"/>\n      </md-input-container>\n      <button md-raised-button type=\"submit\" color=\"accent\" (click)=\"roll()\">ROLL</button>\n    </form>\n  </md-card-content>\n</md-card>\n\n<div class=\"roll-history\">\n  <dice-roll *ngFor=\"let roll of rollHistory\" [roll]=\"roll\"></dice-roll>\n</div>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"dice-roll\" (click)=\"closed = ! closed\">\n  <md-card-header>\n    <div md-card-avatar class=\"avatar\">\n      <div class=\"bignum\">{{ roll.num }}</div>\n      <span [ngPlural]=\"roll.num\">\n        <template ngPluralCase=\"=1\">Die</template>\n        <template ngPluralCase=\"other\">Dice</template>\n      </span>\n    </div>\n    <div class=\"roll-header\">\n      <md-card-title>{{ roll.when | amTimeAgo }}</md-card-title>\n      <md-card-subtitle>{{roll.total}} total, {{roll.successes}} successes</md-card-subtitle>\n    </div>\n  </md-card-header>\n  <md-card-content [ngClass]=\"{'hidden': closed}\">\n    <div class=\"dice-tray\">\n      <span *ngFor=\"let die of roll.dice\" class=\"d10 d10-{{ die }}\"></span>\n    </div>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(530);


/***/ })

},[791]);