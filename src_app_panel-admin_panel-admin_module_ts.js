(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_panel-admin_panel-admin_module_ts"],{

/***/ 94221:
/*!***********************************************************!*\
  !*** ./src/app/panel-admin/panel-admin-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelAdminPageRoutingModule": () => (/* binding */ PanelAdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _panel_admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-admin.page */ 46686);




const routes = [
    {
        path: '',
        component: _panel_admin_page__WEBPACK_IMPORTED_MODULE_0__.PanelAdminPage
    }
];
let PanelAdminPageRoutingModule = class PanelAdminPageRoutingModule {
};
PanelAdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PanelAdminPageRoutingModule);



/***/ }),

/***/ 69211:
/*!***************************************************!*\
  !*** ./src/app/panel-admin/panel-admin.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelAdminPageModule": () => (/* binding */ PanelAdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _panel_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-admin-routing.module */ 94221);
/* harmony import */ var _panel_admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-admin.page */ 46686);







let PanelAdminPageModule = class PanelAdminPageModule {
};
PanelAdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _panel_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.PanelAdminPageRoutingModule
        ],
        declarations: [_panel_admin_page__WEBPACK_IMPORTED_MODULE_1__.PanelAdminPage]
    })
], PanelAdminPageModule);



/***/ }),

/***/ 46686:
/*!*************************************************!*\
  !*** ./src/app/panel-admin/panel-admin.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelAdminPage": () => (/* binding */ PanelAdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_panel_admin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./panel-admin.page.html */ 73251);
/* harmony import */ var _panel_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-admin.page.scss */ 14619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let PanelAdminPage = class PanelAdminPage {
    constructor() { }
    ngOnInit() {
    }
};
PanelAdminPage.ctorParameters = () => [];
PanelAdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-panel-admin',
        template: _raw_loader_panel_admin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_panel_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PanelAdminPage);



/***/ }),

/***/ 14619:
/*!***************************************************!*\
  !*** ./src/app/panel-admin/panel-admin.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW5lbC1hZG1pbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 73251:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panel-admin/panel-admin.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>panel-admin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_panel-admin_panel-admin_module_ts.js.map