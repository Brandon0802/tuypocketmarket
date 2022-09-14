(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_history-details_history-details_module_ts"],{

/***/ 54437:
/*!*******************************************************************!*\
  !*** ./src/app/history-details/history-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryDetailsPageRoutingModule": () => (/* binding */ HistoryDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _history_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-details.page */ 62816);




const routes = [
    {
        path: '',
        component: _history_details_page__WEBPACK_IMPORTED_MODULE_0__.HistoryDetailsPage
    }
];
let HistoryDetailsPageRoutingModule = class HistoryDetailsPageRoutingModule {
};
HistoryDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoryDetailsPageRoutingModule);



/***/ }),

/***/ 12013:
/*!***********************************************************!*\
  !*** ./src/app/history-details/history-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryDetailsPageModule": () => (/* binding */ HistoryDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _history_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-details-routing.module */ 54437);
/* harmony import */ var _history_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-details.page */ 62816);







let HistoryDetailsPageModule = class HistoryDetailsPageModule {
};
HistoryDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _history_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryDetailsPageRoutingModule
        ],
        declarations: [_history_details_page__WEBPACK_IMPORTED_MODULE_1__.HistoryDetailsPage]
    })
], HistoryDetailsPageModule);



/***/ }),

/***/ 62816:
/*!*********************************************************!*\
  !*** ./src/app/history-details/history-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryDetailsPage": () => (/* binding */ HistoryDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_history_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./history-details.page.html */ 8186);
/* harmony import */ var _history_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-details.page.scss */ 26752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);









let HistoryDetailsPage = class HistoryDetailsPage {
    constructor(router, loadingController, toastController, alertController, accessProviders, navController, activatedRoute, storage, navParamService) {
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.navController = navController;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.navParamService = navParamService;
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['panel-driver/1']);
    }
};
HistoryDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService }
];
HistoryDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-history-details',
        template: _raw_loader_history_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_history_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoryDetailsPage);



/***/ }),

/***/ 26752:
/*!***********************************************************!*\
  !*** ./src/app/history-details/history-details.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #3880ff;\n  color: white;\n}\nion-toolbar ion-segment-button {\n  color: #3880ff;\n}\nion-toolbar ion-button ion-icon {\n  color: white;\n}\nion-content {\n  --background-repeat: no-repeat;\n  --background-size: cover;\n  color: white;\n}\nion-content ion-col {\n  border: solid 1.5px black;\n  padding: 1.5px;\n}\nion-content ion-button {\n  --background:#3880ff;\n  color: black;\n}\nion-content ion-card {\n  padding-top: 1%;\n  padding-left: 1%;\n  padding-bottom: 1%;\n  color: black;\n  text-align: center;\n}\nion-content ion-card ion-card-subtitle {\n  color: #3880ff;\n}\nion-content ion-card ion-badge {\n  color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnktZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBQ1E7RUFDSSxZQUFBO0FBQ1o7QUFLSTtFQUVRLDhCQUFBO0VBQ0Esd0JBQUE7RUFFTCxZQUFBO0FBSlA7QUFLUTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtBQUpaO0FBTVE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFKWjtBQVFRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFOWjtBQU9ZO0VBQ0ksY0FBQTtBQUxoQjtBQU9ZO0VBQ0ksY0FBQTtBQUxoQiIsImZpbGUiOiJoaXN0b3J5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gICAgY29sb3IgOndoaXRlO1xyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgICAgIGNvbG9yOiMzODgwZmY7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICBpb24tY29udGVudHtcclxuXHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXHJcblxyXG4gICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDEuNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiMzODgwZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzODgwZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWJhZGdle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzODgwZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 8186:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history-details/history-details.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" class=\"backbtn\" >\n        <img src=\"../../assets/back.svg\"  />\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n    <ion-button slot=\"end\" fill=\"clear\">\n      <ion-icon fill=\"white\" name=\"notifications\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-label>\n      <b>Status: </b>Delivered<br>\n    </ion-label>\n  </ion-card>\n\n  <ion-card>\n    <ion-label>\n      <b>CUSTOMER ID: </b>0001<br>\n    </ion-label>\n    <ion-label>\n      <b>CUTOMER NAME: </b>Ramirez, Rizzalyn C. <br>\n    </ion-label>\n    <ion-label>\n      <b>HOUSE NO./PUROK/SITIO: </b>216, Purok 3, Sitio Maligtong <br>\n    </ion-label>\n    <ion-label>\n      <b>BARANGAY: </b>Barangay San Jose <br>\n    </ion-label>\n    <ion-label>\n      <b>CONTACT NO.: </b>0991-645-2512 <br>\n    </ion-label>\n    <br>\n    <br>\n    \n    <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">\n            <b>Items</b>\n          </ion-col>\n          <ion-col size=\"2\">\n            <b>Quantity</b>\n          </ion-col>\n          <ion-col size=\"3\">\n            <b>Price</b>\n          </ion-col>\n          <ion-col size=\"3\">\n            <b>Total Price</b>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            Brown Sugar Kilo\n          </ion-col>\n          <ion-col size=\"2\">\n            100 \n          </ion-col>\n          <ion-col size=\"3\">\n            Php 50\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 50\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            Granules 100 grams\n          </ion-col>\n          <ion-col size=\"2\">\n            2\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 85\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 10\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            Coffee Mate 250 grams\n          </ion-col>\n          <ion-col size=\"2\">\n            2\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 45\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 90\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            Milo 300 grams\n          </ion-col>\n          <ion-col size=\"2\">\n            1\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 95\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 95\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            UFC Ketchup Bote\n          </ion-col>\n          <ion-col size=\"2\">\n            1\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 25\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 25\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            Toyo Bote\n          </ion-col>\n          <ion-col size=\"2\">\n            1\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 17\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 17\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            Palmolive 12ml Sachet\n          </ion-col>\n          <ion-col size=\"2\">\n            12\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 6\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 72\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            Safeguard Family Size\n          </ion-col>\n          <ion-col size=\"2\">\n            1\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 35\n          </ion-col>\n          <ion-col size=\"3\">\n            Php 35\n          </ion-col>\n        </ion-row>\n        <br>\n        <ion-row>\n          <ion-col size=\"9\" class=\"ion-text-right\">\n           <b > Total Purchase</b>\n          </ion-col>\n          <ion-col size=\"3\">\n            <b>Php 394</b>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"9\" class=\"ion-text-right\">\n           <b> Shipping Fee</b>\n          </ion-col>\n          <ion-col size=\"3\"> \n            <b>Php 35</b>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"9\" class=\"ion-text-right\">\n            <b>Total Amount</b>\n          </ion-col>\n          <ion-col size=\"3\"> \n            <b>Php 429</b>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_history-details_history-details_module_ts.js.map