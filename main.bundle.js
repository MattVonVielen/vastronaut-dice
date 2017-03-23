webpackJsonp([1,4],{

/***/ 403:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 403;


/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(552);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        this.dice = [];
        this.counts = [];
        this.successes = 0;
    }
    AppComponent.prototype.roll = function () {
        this.dice = [];
        this.counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 0; i < this.num; i++) {
            var roll = Math.floor(Math.random() * 10) + 1;
            this.dice.push(roll);
            this.counts[roll - 1] += 1;
        }
        this.successes = this.counts[6] + this.counts[7] + this.counts[8] + this.counts[9];
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(608),
            styles: [__webpack_require__(606)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(550);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(237)();
// imports


// module
exports.push([module.i, ".mat-toolbar {\n  font-family: 'Orbitron'; }\n  .mat-toolbar .spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n\n@font-face {\n  font-family: 'Steampips d10';\n  src: url(\"/assets/Steampipsd10.eot\");\n  src: url(\"/assets/Steampipsd10.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/Steampipsd10.woff\") format(\"woff\"), url(\"/assets/Steampipsd10.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n.d10, .d10-success, .d10-7:before, .d10-8:before, .d10-9:before, .d10-1:before, .d10-2:before, .d10-3:before, .d10-4:before, .d10-5:before, .d10-6:before, .d10-10:before, .d10-blank:before {\n  display: inline-block;\n  font-family: 'Steampips d10';\n  font-size: 5em;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.d10-success, .d10-7:before, .d10-8:before, .d10-9:before {\n  color: rgba(255, 216, 64, 0.9); }\n\n.d10-1:before {\n  content: \"B\";\n  color: rgba(244, 67, 54, 0.9); }\n\n.d10-2:before {\n  content: \"C\"; }\n\n.d10-3:before {\n  content: \"D\"; }\n\n.d10-4:before {\n  content: \"E\"; }\n\n.d10-5:before {\n  content: \"F\"; }\n\n.d10-6:before {\n  content: \"G\"; }\n\n.d10-7:before {\n  content: \"H\"; }\n\n.d10-8:before {\n  content: \"I\"; }\n\n.d10-9:before {\n  content: \"J\"; }\n\n.d10-10:before {\n  content: \"L\";\n  color: rgba(67, 244, 54, 0.6); }\n\n.d10-blank:before {\n  content: \"+\"; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n  <span>Vastronaut Dice</span>\n</md-toolbar>\n\n<md-card>\n  <md-card-content>\n    <md-input-container>\n      <input mdInput type=\"number\" min=\"1\" placeholder=\"Number of Dice\" [(ngModel)]=\"num\"/>\n    </md-input-container>\n    <button md-raised-button color=\"accent\" (click)=\"roll()\">ROLL</button>\n\n    <div *ngIf=\"dice.length > 0\">\n      <md-tab-group>\n        <md-tab label=\"Summary\">\n          <md-list>\n            <md-list-item>\n              <p md-line>Successes</p>{{ successes }}\n            </md-list-item>\n            <md-list-item>\n              <p md-line>Critical Successes</p>{{ counts[9] }}\n            </md-list-item>\n            <md-list-item>\n              <p md-line>Critical Failures</p>{{ counts[0] }}\n            </md-list-item>\n            <md-divider></md-divider>\n            <md-list-item>\n              <p md-line>Grand Total</p>{{ successes + counts[9] - counts[0] }}\n            </md-list-item>\n          </md-list>\n        </md-tab>\n        <md-tab label=\"Dice Pool\">\n          <div style=\"text-align: center;\">\n            <span *ngFor=\"let die of dice\" class=\"d10-{{ die }}\"></span>\n          </div>\n        </md-tab>\n      </md-tab-group>\n    </div>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(404);


/***/ })

},[658]);