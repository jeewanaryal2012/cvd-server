(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _authorized_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorized/home/home.component */ "./src/app/authorized/home/home.component.ts");
/* harmony import */ var _components_login_register_landing_login_register_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login-register-landing/login-register-landing.component */ "./src/app/components/login-register-landing/login-register-landing.component.ts");
/* harmony import */ var _components_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/front-page/front-page.component */ "./src/app/components/front-page/front-page.component.ts");
/* harmony import */ var _authorized_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authorized/home-landing/home-landing.component */ "./src/app/authorized/home-landing/home-landing.component.ts");
/* harmony import */ var _authorized_provide_service_provide_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authorized/provide-service/provide-service.component */ "./src/app/authorized/provide-service/provide-service.component.ts");
/* harmony import */ var _authorized_need_service_need_service_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authorized/need-service/need-service.component */ "./src/app/authorized/need-service/need-service.component.ts");






// Children of Home



const routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'login-register', component: _components_login_register_landing_login_register_landing_component__WEBPACK_IMPORTED_MODULE_4__["LoginRegisterLandingComponent"] },
    { path: 'front-page', component: _components_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_5__["FrontPageComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]] },
    {
        path: 'home', component: _authorized_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], children: [
            { path: '', component: _authorized_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_6__["HomeLandingComponent"] },
            { path: 'provide-service', component: _authorized_provide_service_provide_service_component__WEBPACK_IMPORTED_MODULE_7__["ProvideServiceComponent"] },
            { path: 'need-service', component: _authorized_need_service_need_service_component__WEBPACK_IMPORTED_MODULE_8__["NeedServiceComponent"] }
        ], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    }
];
class AppRoutingModule {
}


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
class AppComponent {
    constructor() {
        this.title = 'uicomponent';
    }
}


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _components_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component.ngfactory */ "./src/app/components/login/login.component.ngfactory.js");
/* harmony import */ var _components_register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component.ngfactory */ "./src/app/components/register/register.component.ngfactory.js");
/* harmony import */ var _components_login_register_landing_login_register_landing_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login-register-landing/login-register-landing.component.ngfactory */ "./src/app/components/login-register-landing/login-register-landing.component.ngfactory.js");
/* harmony import */ var _components_front_page_front_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/front-page/front-page.component.ngfactory */ "./src/app/components/front-page/front-page.component.ngfactory.js");
/* harmony import */ var _authorized_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authorized/home/home.component.ngfactory */ "./src/app/authorized/home/home.component.ngfactory.js");
/* harmony import */ var _authorized_home_landing_home_landing_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authorized/home-landing/home-landing.component.ngfactory */ "./src/app/authorized/home-landing/home-landing.component.ngfactory.js");
/* harmony import */ var _authorized_provide_service_provide_service_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authorized/provide-service/provide-service.component.ngfactory */ "./src/app/authorized/provide-service/provide-service.component.ngfactory.js");
/* harmony import */ var _authorized_need_service_need_service_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authorized/need-service/need-service.component.ngfactory */ "./src/app/authorized/need-service/need-service.component.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm2015/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/fesm2015/observers.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_register_landing_login_register_landing_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/login-register-landing/login-register-landing.component */ "./src/app/components/login-register-landing/login-register-landing.component.ts");
/* harmony import */ var _components_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/front-page/front-page.component */ "./src/app/components/front-page/front-page.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _authorized_home_home_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./authorized/home/home.component */ "./src/app/authorized/home/home.component.ts");
/* harmony import */ var _authorized_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./authorized/home-landing/home-landing.component */ "./src/app/authorized/home-landing/home-landing.component.ts");
/* harmony import */ var _authorized_provide_service_provide_service_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./authorized/provide-service/provide-service.component */ "./src/app/authorized/provide-service/provide-service.component.ts");
/* harmony import */ var _authorized_need_service_need_service_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./authorized/need-service/need-service.component */ "./src/app/authorized/need-service/need-service.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/fesm2015/text-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _components_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LoginComponentNgFactory"], _components_register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RegisterComponentNgFactory"], _components_login_register_landing_login_register_landing_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["LoginRegisterLandingComponentNgFactory"], _components_front_page_front_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["FrontPageComponentNgFactory"], _authorized_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["HomeComponentNgFactory"], _authorized_home_landing_home_landing_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["HomeLandingComponentNgFactory"], _authorized_provide_service_provide_service_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ProvideServiceComponentNgFactory"], _authorized_need_service_need_service_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["NeedServiceComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵsNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_16__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_16__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_16__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_16__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_16__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_16__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_19__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_19__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_21__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_19__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"], { useHash: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_14__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTES"], function () { return [[{ path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"] }, { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"] }, { path: "login-register", component: _components_login_register_landing_login_register_landing_component__WEBPACK_IMPORTED_MODULE_27__["LoginRegisterLandingComponent"] }, { path: "front-page", component: _components_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_28__["FrontPageComponent"] }, { path: "", redirectTo: "/home", pathMatch: "full", canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] }, { path: "home", component: _authorized_home_home_component__WEBPACK_IMPORTED_MODULE_30__["HomeComponent"], children: [{ path: "", component: _authorized_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_31__["HomeLandingComponent"] }, { path: "provide-service", component: _authorized_provide_service_provide_service_component__WEBPACK_IMPORTED_MODULE_32__["ProvideServiceComponent"] }, { path: "need-service", component: _authorized_need_service_need_service_component__WEBPACK_IMPORTED_MODULE_33__["NeedServiceComponent"] }], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_34__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_34__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_37__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_37__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_38__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_38__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
class AppModule {
}


/***/ }),

/***/ "./src/app/authorized/home-landing/home-landing.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/authorized/home-landing/home-landing.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_HomeLandingComponent, View_HomeLandingComponent_0, View_HomeLandingComponent_Host_0, HomeLandingComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeLandingComponent", function() { return RenderType_HomeLandingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeLandingComponent_0", function() { return View_HomeLandingComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeLandingComponent_Host_0", function() { return View_HomeLandingComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLandingComponentNgFactory", function() { return HomeLandingComponentNgFactory; });
/* harmony import */ var _home_landing_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-landing.component.scss.shim.ngstyle */ "./src/app/authorized/home-landing/home-landing.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-landing.component */ "./src/app/authorized/home-landing/home-landing.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_HomeLandingComponent = [_home_landing_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HomeLandingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeLandingComponent, data: {} });

function View_HomeLandingComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "picsum-img-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "Random first slide"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "carousel-caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["First slide label"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Nulla vitae elit libero, a pharetra augue mollis interdum."]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.images[0]; _ck(_v, 1, 0, currVal_0); }); }
function View_HomeLandingComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "picsum-img-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "Random second slide"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "carousel-caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Second slide label"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.images[1]; _ck(_v, 1, 0, currVal_0); }); }
function View_HomeLandingComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "picsum-img-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "Random third slide"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "carousel-caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Third slide label"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Praesent commodo cursus magna, vel scelerisque nisl consectetur."]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.images[2]; _ck(_v, 1, 0, currVal_0); }); }
function View_HomeLandingComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "ngb-carousel", [["class", "carousel slide"], ["tabIndex", "0"]], [[4, "display", null]], [[null, "keydown.arrowLeft"], [null, "keydown.arrowRight"], [null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("keydown.arrowLeft" === en)) {
        var pd_0 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).keyboard && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).prev(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).NgbSlideEventSource.ARROW_LEFT)) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.arrowRight" === en)) {
        var pd_1 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).keyboard && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).next(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).NgbSlideEventSource.ARROW_RIGHT)) !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mouseEnter() !== false);
        ad = (pd_2 && ad);
    } if (("mouseleave" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mouseLeave() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgbCarousel_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgbCarousel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 3325952, null, 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { interval: [0, "interval"], pauseOnHover: [1, "pauseOnHover"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { slides: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_HomeLandingComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, [[1, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_HomeLandingComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, [[1, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_HomeLandingComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, [[1, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_1 = 5000; var currVal_2 = true; _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_0 = "block"; _ck(_v, 0, 0, currVal_0); }); }
function View_HomeLandingComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "carousel mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeLandingComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.images; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeLandingComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home-landing", [], null, null, null, View_HomeLandingComponent_0, RenderType_HomeLandingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_landing_component__WEBPACK_IMPORTED_MODULE_5__["HomeLandingComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeLandingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home-landing", _home_landing_component__WEBPACK_IMPORTED_MODULE_5__["HomeLandingComponent"], View_HomeLandingComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/authorized/home-landing/home-landing.component.scss.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/authorized/home-landing/home-landing.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".carousel[_ngcontent-%COMP%] {\n  outline: none;\n}\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  outline: none;\n}\n  .carousel-item {\n  transition: opacity 2s ease !important;\n  position: absolute !important;\n  display: block !important;\n  opacity: 0;\n}\n  .carousel-item.active {\n  position: relative !important;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWV3YW5hcnlhbC9EZXNrdG9wL2NvZGVzL3Byb2plY3RzL2N2ZC1jbGllbnQvdWljb21wb25lbnQvc3JjL2FwcC9hdXRob3JpemVkL2hvbWUtbGFuZGluZy9ob21lLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGhvcml6ZWQvaG9tZS1sYW5kaW5nL2hvbWUtbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1JLGFBQUE7QUNKSjtBRERJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDR1I7QURHSTtFQUNFLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNBTjtBREdJO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9hdXRob3JpemVkL2hvbWUtbGFuZGluZy9ob21lLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB7XG4gICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBlYXNlICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgXG4gICAgLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH0iLCIuY2Fyb3VzZWwge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNhcm91c2VsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMDtcbn1cbjo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/authorized/home-landing/home-landing.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/authorized/home-landing/home-landing.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLandingComponent", function() { return HomeLandingComponent; });
class HomeLandingComponent {
    constructor() {
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/authorized/home/home.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/authorized/home/home.component.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/authorized/home/home.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nav_menu_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nav/menu/menu.component.ngfactory */ "./src/app/nav/menu/menu.component.ngfactory.js");
/* harmony import */ var _nav_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../nav/menu/menu.component */ "./src/app/nav/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/authorized/home/home.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-menu", [], null, null, null, _nav_menu_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MenuComponent_0"], _nav_menu_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _nav_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], [], { user: [0, "user"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "container container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user; _ck(_v, 1, 0, currVal_0); _ck(_v, 6, 0); }, null); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], [_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/authorized/home/home.component.scss.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/authorized/home/home.component.scss.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6ZWQvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/authorized/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/authorized/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
//import { UserProfileService } from '../../_services/user-profile.service';
class HomeComponent {
    //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    constructor(authenticationService /*, private userProfileService: UserProfileService*/) {
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        //let email = this.authenticationService.currentUserValue.email;
        // this.userProfileService.getUserProfile(email).subscribe(res => {
        //   this.user = res;
        // }, err => { });
        this.user = {
            userName: 'Jeewan',
            profilePicture: ''
        };
    }
}


/***/ }),

/***/ "./src/app/authorized/need-service/need-service.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/authorized/need-service/need-service.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_NeedServiceComponent, View_NeedServiceComponent_0, View_NeedServiceComponent_Host_0, NeedServiceComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NeedServiceComponent", function() { return RenderType_NeedServiceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NeedServiceComponent_0", function() { return View_NeedServiceComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NeedServiceComponent_Host_0", function() { return View_NeedServiceComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedServiceComponentNgFactory", function() { return NeedServiceComponentNgFactory; });
/* harmony import */ var _need_service_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./need-service.component.scss.shim.ngstyle */ "./src/app/authorized/need-service/need-service.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _need_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./need-service.component */ "./src/app/authorized/need-service/need-service.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_NeedServiceComponent = [_need_service_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NeedServiceComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NeedServiceComponent, data: {} });

function View_NeedServiceComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["need-service works!"]))], null, null); }
function View_NeedServiceComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-need-service", [], null, null, null, View_NeedServiceComponent_0, RenderType_NeedServiceComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _need_service_component__WEBPACK_IMPORTED_MODULE_2__["NeedServiceComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NeedServiceComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-need-service", _need_service_component__WEBPACK_IMPORTED_MODULE_2__["NeedServiceComponent"], View_NeedServiceComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/authorized/need-service/need-service.component.scss.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/authorized/need-service/need-service.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6ZWQvbmVlZC1zZXJ2aWNlL25lZWQtc2VydmljZS5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/authorized/need-service/need-service.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/authorized/need-service/need-service.component.ts ***!
  \*******************************************************************/
/*! exports provided: NeedServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedServiceComponent", function() { return NeedServiceComponent; });
class NeedServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/authorized/provide-service/provide-service.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/authorized/provide-service/provide-service.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_ProvideServiceComponent, View_ProvideServiceComponent_0, View_ProvideServiceComponent_Host_0, ProvideServiceComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProvideServiceComponent", function() { return RenderType_ProvideServiceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProvideServiceComponent_0", function() { return View_ProvideServiceComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProvideServiceComponent_Host_0", function() { return View_ProvideServiceComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideServiceComponentNgFactory", function() { return ProvideServiceComponentNgFactory; });
/* harmony import */ var _provide_service_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provide-service.component.scss.shim.ngstyle */ "./src/app/authorized/provide-service/provide-service.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _provide_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provide-service.component */ "./src/app/authorized/provide-service/provide-service.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ProvideServiceComponent = [_provide_service_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ProvideServiceComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProvideServiceComponent, data: {} });

function View_ProvideServiceComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["provide-service works!"]))], null, null); }
function View_ProvideServiceComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-provide-service", [], null, null, null, View_ProvideServiceComponent_0, RenderType_ProvideServiceComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _provide_service_component__WEBPACK_IMPORTED_MODULE_2__["ProvideServiceComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProvideServiceComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-provide-service", _provide_service_component__WEBPACK_IMPORTED_MODULE_2__["ProvideServiceComponent"], View_ProvideServiceComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/authorized/provide-service/provide-service.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/authorized/provide-service/provide-service.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6ZWQvcHJvdmlkZS1zZXJ2aWNlL3Byb3ZpZGUtc2VydmljZS5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/authorized/provide-service/provide-service.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/authorized/provide-service/provide-service.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProvideServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideServiceComponent", function() { return ProvideServiceComponent; });
class ProvideServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/front-page/front-page.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/front-page/front-page.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_FrontPageComponent, View_FrontPageComponent_0, View_FrontPageComponent_Host_0, FrontPageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FrontPageComponent", function() { return RenderType_FrontPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FrontPageComponent_0", function() { return View_FrontPageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FrontPageComponent_Host_0", function() { return View_FrontPageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageComponentNgFactory", function() { return FrontPageComponentNgFactory; });
/* harmony import */ var _front_page_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front-page.component.scss.shim.ngstyle */ "./src/app/components/front-page/front-page.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _front_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./front-page.component */ "./src/app/components/front-page/front-page.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_FrontPageComponent = [_front_page_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FrontPageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FrontPageComponent, data: {} });

function View_FrontPageComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "picsum-img-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "Random first slide"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "carousel-caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["First slide label"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Nulla vitae elit libero, a pharetra augue mollis interdum."]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.images[0]; _ck(_v, 1, 0, currVal_0); }); }
function View_FrontPageComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "picsum-img-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "Random second slide"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "carousel-caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Second slide label"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.images[1]; _ck(_v, 1, 0, currVal_0); }); }
function View_FrontPageComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "picsum-img-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "Random third slide"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "carousel-caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Third slide label"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Praesent commodo cursus magna, vel scelerisque nisl consectetur."]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.images[2]; _ck(_v, 1, 0, currVal_0); }); }
function View_FrontPageComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "ngb-carousel", [["class", "carousel slide"], ["tabIndex", "0"]], [[4, "display", null]], [[null, "keydown.arrowLeft"], [null, "keydown.arrowRight"], [null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("keydown.arrowLeft" === en)) {
        var pd_0 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).keyboard && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).prev(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).NgbSlideEventSource.ARROW_LEFT)) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.arrowRight" === en)) {
        var pd_1 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).keyboard && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).next(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).NgbSlideEventSource.ARROW_RIGHT)) !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mouseEnter() !== false);
        ad = (pd_2 && ad);
    } if (("mouseleave" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mouseLeave() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgbCarousel_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgbCarousel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 3325952, null, 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { interval: [0, "interval"], pauseOnHover: [1, "pauseOnHover"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { slides: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_FrontPageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, [[1, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_FrontPageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, [[1, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_FrontPageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, [[1, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_1 = 5000; var currVal_2 = true; _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_0 = "block"; _ck(_v, 0, 0, currVal_0); }); }
function View_FrontPageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 28, "div", [["class", "nav-wrapper container-fullwidth"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 27, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 26, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 25, "nav", [["class", "navbar navbar-expand-sm bg-light navbar-light justify-content-end"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [["class", "navbar-brand"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["| LOGO |"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "button", [["class", "btn btn-link ml-auto mr-1 price"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "button", [["class", "navbar-toggler"], ["data-target", "#navbarSupportedContent"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "span", [["class", "navbar-toggler-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 17, "div", [["class", "collapse navbar-collapse flex-grow-0"], ["id", "navbarSupportedContent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 16, "ul", [["class", "navbar-nav text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "li", [["class", "nav-item active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["How It Works"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "li", [["class", "nav-item active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Provide Service"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Need Service"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "div", [["class", "carousel mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FrontPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/home/provide-service"; _ck(_v, 15, 0, currVal_2); var currVal_5 = "/home/provide-service"; _ck(_v, 19, 0, currVal_5); var currVal_8 = "/home/provide-service"; _ck(_v, 23, 0, currVal_8); var currVal_11 = "/login-register"; _ck(_v, 27, 0, currVal_11); var currVal_12 = _co.images; _ck(_v, 32, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).href; _ck(_v, 14, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).href; _ck(_v, 18, 0, currVal_3, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).href; _ck(_v, 22, 0, currVal_6, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).href; _ck(_v, 26, 0, currVal_9, currVal_10); }); }
function View_FrontPageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-front-page", [], null, null, null, View_FrontPageComponent_0, RenderType_FrontPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _front_page_component__WEBPACK_IMPORTED_MODULE_6__["FrontPageComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FrontPageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-front-page", _front_page_component__WEBPACK_IMPORTED_MODULE_6__["FrontPageComponent"], View_FrontPageComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/front-page/front-page.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/components/front-page/front-page.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-color: #0c225f !important;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: white;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-profile-pic[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: green;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: #dac508;\n}\n.carousel[_ngcontent-%COMP%] {\n  width: 92%;\n  margin: auto;\n  outline: none;\n  outline: none;\n}\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  outline: none;\n}\n  .carousel-item {\n  transition: opacity 2s ease !important;\n  position: absolute !important;\n  display: block !important;\n  opacity: 0;\n}\n  .carousel-item.active {\n  position: relative !important;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWV3YW5hcnlhbC9EZXNrdG9wL2NvZGVzL3Byb2plY3RzL2N2ZC1jbGllbnQvdWljb21wb25lbnQvc3JjL2FwcC9jb21wb25lbnRzL2Zyb250LXBhZ2UvZnJvbnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mcm9udC1wYWdlL2Zyb250LXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvamVld2FuYXJ5YWwvRGVza3RvcC9jb2Rlcy9wcm9qZWN0cy9jdmQtY2xpZW50L3VpY29tcG9uZW50L3NyYy9zdHlsZXMvY29uc3RhbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLG9DQUFBO0FDRko7QURJTTtFQUNJLFlBQUE7QUNGVjtBREdRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RWO0FES0k7RUFDRSxjRWZNO0FEWVo7QURLSTtFQUNFLFlBQUE7QUNITjtBREtJO0VBQ0ksY0FBQTtBQ0hSO0FEU0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFNQSxhQUFBO0FDWEo7QURNSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0pSO0FEVUk7RUFDRSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDUE47QURVSTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQ1JOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mcm9udC1wYWdlL2Zyb250LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbnN0YW50LnNjc3NcIjtcblxuLm5hdi13cmFwcGVyIHtcbiAgLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdkJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICB1bCB7XG4gICAgICBsaSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAudXNlci1wcm9maWxlLXBpYyB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYSB7XG4gICAgICBjb2xvcjogJHRleHRXaGl0ZTtcbiAgICB9XG4gICAgYS5hY3RpdmUge1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICAucHJpY2Uge1xuICAgICAgICBjb2xvcjogI2RhYzUwODs7XG4gICAgfVxuICAgIFxuICB9XG59XG5cbi5jYXJvdXNlbCB7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG46Om5nLWRlZXAge1xuICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZSAhaW1wb3J0YW50O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIFxuICAgIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4iLCIubmF2LXdyYXBwZXIgLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzIyNWYgIWltcG9ydGFudDtcbn1cbi5uYXYtd3JhcHBlciAubmF2YmFyIHVsIGxpIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5hdi13cmFwcGVyIC5uYXZiYXIgdWwgbGkgLnVzZXItcHJvZmlsZS1waWMge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLm5hdi13cmFwcGVyIC5uYXZiYXIgYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLm5hdi13cmFwcGVyIC5uYXZiYXIgYS5hY3RpdmUge1xuICBjb2xvcjogZ3JlZW47XG59XG4ubmF2LXdyYXBwZXIgLm5hdmJhciAucHJpY2Uge1xuICBjb2xvcjogI2RhYzUwODtcbn1cblxuLmNhcm91c2VsIHtcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNhcm91c2VsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMDtcbn1cbjo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbn0iLCIkbmF2QmFja2dyb3VuZDogIzBjMjI1ZjtcbiR0ZXh0V2hpdGU6ICNmZmZmZmY7XG4iXX0= */"];



/***/ }),

/***/ "./src/app/components/front-page/front-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/front-page/front-page.component.ts ***!
  \***************************************************************/
/*! exports provided: FrontPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageComponent", function() { return FrontPageComponent; });
class FrontPageComponent {
    constructor() {
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/login-register-landing/login-register-landing.component.ngfactory.js":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/login-register-landing/login-register-landing.component.ngfactory.js ***!
  \*************************************************************************************************/
/*! exports provided: RenderType_LoginRegisterLandingComponent, View_LoginRegisterLandingComponent_0, View_LoginRegisterLandingComponent_Host_0, LoginRegisterLandingComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoginRegisterLandingComponent", function() { return RenderType_LoginRegisterLandingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginRegisterLandingComponent_0", function() { return View_LoginRegisterLandingComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginRegisterLandingComponent_Host_0", function() { return View_LoginRegisterLandingComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterLandingComponentNgFactory", function() { return LoginRegisterLandingComponentNgFactory; });
/* harmony import */ var _login_register_landing_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-register-landing.component.scss.shim.ngstyle */ "./src/app/components/login-register-landing/login-register-landing.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.component.ngfactory */ "./src/app/components/login/login.component.ngfactory.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../register/register.component.ngfactory */ "./src/app/components/register/register.component.ngfactory.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _login_register_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-register-landing.component */ "./src/app/components/login-register-landing/login-register-landing.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_LoginRegisterLandingComponent = [_login_register_landing_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoginRegisterLandingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginRegisterLandingComponent, data: {} });

function View_LoginRegisterLandingComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 28, "div", [["class", "nav-wrapper container-fullwidth"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 27, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 26, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 25, "nav", [["class", "navbar navbar-expand-sm bg-light navbar-light justify-content-end"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [["class", "navbar-brand"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["| LOGO |"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "button", [["class", "btn btn-link ml-auto mr-1 price"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "button", [["class", "navbar-toggler"], ["data-target", "#navbarSupportedContent"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "span", [["class", "navbar-toggler-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 17, "div", [["class", "collapse navbar-collapse flex-grow-0"], ["id", "navbarSupportedContent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 16, "ul", [["class", "navbar-nav text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "li", [["class", "nav-item active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["How It Works"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "li", [["class", "nav-item active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Provide Service"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Need Service"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 7, "div", [["class", "login-form-wrapper container container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 2, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "app-login", [], null, null, null, _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_LoginComponent_0"], _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_LoginComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 114688, null, 0, _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "app-register", [], null, null, null, _register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RegisterComponent_0"], _register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RegisterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 114688, null, 0, _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]], null, null)], function (_ck, _v) { var currVal_2 = "/home/provide-service"; _ck(_v, 15, 0, currVal_2); var currVal_5 = "/home/provide-service"; _ck(_v, 19, 0, currVal_5); var currVal_8 = "/home/provide-service"; _ck(_v, 23, 0, currVal_8); var currVal_11 = "/login-register"; _ck(_v, 27, 0, currVal_11); _ck(_v, 33, 0); _ck(_v, 36, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).href; _ck(_v, 14, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).href; _ck(_v, 18, 0, currVal_3, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).href; _ck(_v, 22, 0, currVal_6, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).href; _ck(_v, 26, 0, currVal_9, currVal_10); }); }
function View_LoginRegisterLandingComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login-register-landing", [], null, null, null, View_LoginRegisterLandingComponent_0, RenderType_LoginRegisterLandingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _login_register_landing_component__WEBPACK_IMPORTED_MODULE_11__["LoginRegisterLandingComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginRegisterLandingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login-register-landing", _login_register_landing_component__WEBPACK_IMPORTED_MODULE_11__["LoginRegisterLandingComponent"], View_LoginRegisterLandingComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/login-register-landing/login-register-landing.component.scss.shim.ngstyle.js":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/login-register-landing/login-register-landing.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-color: #0c225f !important;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: white;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-profile-pic[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: green;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: #dac508;\n}\n.carousel[_ngcontent-%COMP%] {\n  width: 92%;\n  margin: auto;\n  outline: none;\n  outline: none;\n}\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  outline: none;\n}\n  .carousel-item {\n  transition: opacity 2s ease !important;\n  position: absolute !important;\n  display: block !important;\n  opacity: 0;\n}\n  .carousel-item.active {\n  position: relative !important;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWV3YW5hcnlhbC9EZXNrdG9wL2NvZGVzL3Byb2plY3RzL2N2ZC1jbGllbnQvdWljb21wb25lbnQvc3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLXJlZ2lzdGVyLWxhbmRpbmcvbG9naW4tcmVnaXN0ZXItbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1yZWdpc3Rlci1sYW5kaW5nL2xvZ2luLXJlZ2lzdGVyLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvamVld2FuYXJ5YWwvRGVza3RvcC9jb2Rlcy9wcm9qZWN0cy9jdmQtY2xpZW50L3VpY29tcG9uZW50L3NyYy9zdHlsZXMvY29uc3RhbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLG9DQUFBO0FDRko7QURJTTtFQUNJLFlBQUE7QUNGVjtBREdRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RWO0FES0k7RUFDRSxjRWZNO0FEWVo7QURLSTtFQUNFLFlBQUE7QUNITjtBREtJO0VBQ0ksY0FBQTtBQ0hSO0FEU0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFNQSxhQUFBO0FDWEo7QURNSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0pSO0FEVUk7RUFDRSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDUE47QURVSTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQ1JOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1yZWdpc3Rlci1sYW5kaW5nL2xvZ2luLXJlZ2lzdGVyLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbnN0YW50LnNjc3NcIjtcblxuLm5hdi13cmFwcGVyIHtcbiAgLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdkJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICB1bCB7XG4gICAgICBsaSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAudXNlci1wcm9maWxlLXBpYyB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYSB7XG4gICAgICBjb2xvcjogJHRleHRXaGl0ZTtcbiAgICB9XG4gICAgYS5hY3RpdmUge1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICAucHJpY2Uge1xuICAgICAgICBjb2xvcjogI2RhYzUwODs7XG4gICAgfVxuICAgIFxuICB9XG59XG5cbi5jYXJvdXNlbCB7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG46Om5nLWRlZXAge1xuICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZSAhaW1wb3J0YW50O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIFxuICAgIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4iLCIubmF2LXdyYXBwZXIgLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzIyNWYgIWltcG9ydGFudDtcbn1cbi5uYXYtd3JhcHBlciAubmF2YmFyIHVsIGxpIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5hdi13cmFwcGVyIC5uYXZiYXIgdWwgbGkgLnVzZXItcHJvZmlsZS1waWMge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLm5hdi13cmFwcGVyIC5uYXZiYXIgYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLm5hdi13cmFwcGVyIC5uYXZiYXIgYS5hY3RpdmUge1xuICBjb2xvcjogZ3JlZW47XG59XG4ubmF2LXdyYXBwZXIgLm5hdmJhciAucHJpY2Uge1xuICBjb2xvcjogI2RhYzUwODtcbn1cblxuLmNhcm91c2VsIHtcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNhcm91c2VsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMDtcbn1cbjo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbn0iLCIkbmF2QmFja2dyb3VuZDogIzBjMjI1ZjtcbiR0ZXh0V2hpdGU6ICNmZmZmZmY7XG4iXX0= */"];



/***/ }),

/***/ "./src/app/components/login-register-landing/login-register-landing.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/login-register-landing/login-register-landing.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LoginRegisterLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterLandingComponent", function() { return LoginRegisterLandingComponent; });
class LoginRegisterLandingComponent {
    constructor() {
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/login/login.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/components/login/login.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function() { return RenderType_LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function() { return View_LoginComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function() { return View_LoginComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function() { return LoginComponentNgFactory; });
/* harmony import */ var _login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.scss.shim.ngstyle */ "./src/app/components/login/login.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/form-field/index.ngfactory */ "./node_modules/@angular/material/form-field/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/fesm2015/text-field.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_LoginComponent = [_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginComponent, data: {} });

function View_LoginComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "label", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login unsuccessful"]))], null, null); }
function View_LoginComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner-border spinner-border-sm mr-1"]], null, null, null, null, null))], null, null); }
function View_LoginComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 65, "div", [["class", "login-form-wrapper container container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 64, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 63, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 60, "form", [["class", "login-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 26, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 22, "mat-form-field", [["appearance", "outline"], ["class", "col-md-12 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, [[3, 4], [4, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["User Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "email"], ["matInput", ""], ["placeholder", "Placeholder"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._focusChanged(true) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._focusChanged(false) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._onInput() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 23, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 22, "mat-form-field", [["appearance", "outline"], ["class", "col-md-12 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, [[12, 4], [13, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "password"], ["matInput", ""], ["placeholder", "Placeholder"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._focusChanged(true) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._focusChanged(false) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._onInput() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4], [11, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 4, "div", [["class", "form-group p-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 3, "button", [["class", "btn btn-link"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Login "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.loginForm; _ck(_v, 7, 0, currVal_7); var currVal_8 = (_co.loginSuccess === false); _ck(_v, 13, 0, currVal_8); var currVal_31 = "outline"; _ck(_v, 16, 0, currVal_31); var currVal_48 = "email"; _ck(_v, 32, 0, currVal_48); var currVal_49 = "Placeholder"; _ck(_v, 35, 0, currVal_49); var currVal_72 = "outline"; _ck(_v, 40, 0, currVal_72); var currVal_89 = "password"; _ck(_v, 56, 0, currVal_89); var currVal_90 = "Placeholder"; var currVal_91 = "password"; _ck(_v, 59, 0, currVal_90, currVal_91); var currVal_93 = _co.loading; _ck(_v, 64, 0, currVal_93); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "standard"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "fill"); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "outline"); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "legacy"); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.errorState; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._canLabelFloat; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldLabelFloat(); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._hasFloatingLabel(); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._hideControlPlaceholder(); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.disabled; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.autofilled; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.focused; var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).color == "accent"); var currVal_22 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).color == "warn"); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("untouched"); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("touched"); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("pristine"); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("dirty"); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("valid"); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("invalid"); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("pending"); var currVal_30 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._animationsEnabled; _ck(_v, 14, 1, [currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30]); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassUntouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassTouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPristine; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassDirty; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassValid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassInvalid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPending; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._isServer; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).id; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).placeholder; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).disabled; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).required; var currVal_44 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._isNativeSelect) || null); var currVal_45 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._ariaDescribedby || null); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).errorState; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).required.toString(); _ck(_v, 29, 1, [currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47]); var currVal_50 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "standard"); var currVal_51 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "fill"); var currVal_52 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "outline"); var currVal_53 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "legacy"); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.errorState; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._canLabelFloat; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldLabelFloat(); var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._hasFloatingLabel(); var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._hideControlPlaceholder(); var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.disabled; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.autofilled; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.focused; var currVal_62 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).color == "accent"); var currVal_63 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).color == "warn"); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("untouched"); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("touched"); var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("pristine"); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("dirty"); var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("valid"); var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("invalid"); var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("pending"); var currVal_71 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._animationsEnabled; _ck(_v, 38, 1, [currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71]); var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassUntouched; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassTouched; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPristine; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassDirty; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassValid; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassInvalid; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPending; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._isServer; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).id; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).placeholder; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).disabled; var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).required; var currVal_85 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._isNativeSelect) || null); var currVal_86 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._ariaDescribedby || null); var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).errorState; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).required.toString(); _ck(_v, 53, 1, [currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88]); var currVal_92 = _co.loading; _ck(_v, 62, 0, currVal_92); }); }
function View_LoginComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/login/login.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/login/login.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"];



/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


class LoginComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.loginSuccess = true;
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() { return this.loginForm.controls; }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.f);
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            console.log(data);
            if (data.result === true) {
                this.router.navigate(['/home']);
                this.loginSuccess = true;
            }
            else {
                this.loading = false;
                this.loginSuccess = false;
            }
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
}


/***/ }),

/***/ "./src/app/components/register/register.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/register/register.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_RegisterComponent, View_RegisterComponent_0, View_RegisterComponent_Host_0, RegisterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RegisterComponent", function() { return RenderType_RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_0", function() { return View_RegisterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_Host_0", function() { return View_RegisterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponentNgFactory", function() { return RegisterComponentNgFactory; });
/* harmony import */ var _register_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.scss.shim.ngstyle */ "./src/app/components/register/register.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/form-field/index.ngfactory */ "./node_modules/@angular/material/form-field/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/fesm2015/text-field.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_RegisterComponent = [_register_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RegisterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RegisterComponent, data: {} });

function View_RegisterComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "label", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Register unsuccessful"]))], null, null); }
function View_RegisterComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Add two numbers and type the sum below. "]))], null, null); }
function View_RegisterComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner-border spinner-border-sm mr-1"]], null, null, null, null, null))], null, null); }
function View_RegisterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 188, "div", [["class", "register-form-wrapper container container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 187, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 186, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Register"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 183, "form", [["class", "register-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 26, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 22, "mat-form-field", [["appearance", "outline"], ["class", "col-md-12 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, [[3, 4], [4, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["First Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "firstName"], ["matInput", ""], ["placeholder", "Placeholder"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._focusChanged(true) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._focusChanged(false) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._onInput() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 23, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 22, "mat-form-field", [["appearance", "outline"], ["class", "col-md-12 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, [[12, 4], [13, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Last Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "lastName"], ["matInput", ""], ["placeholder", "Placeholder"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._focusChanged(true) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._focusChanged(false) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._onInput() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4], [11, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 23, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 22, "mat-form-field", [["appearance", "outline"], ["class", "col-md-12 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 20, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 22, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, [[21, 4], [22, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "email"], ["matInput", ""], ["placeholder", "Placeholder"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83)._focusChanged(true) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83)._focusChanged(false) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83)._onInput() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[19, 4], [20, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 23, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 22, "mat-form-field", [["appearance", "outline"], ["class", "col-md-12 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 29, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 31, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 16384, [[30, 4], [31, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Phone"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "phone"], ["matInput", ""], ["placeholder", "Placeholder"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._focusChanged(true) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._focusChanged(false) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._onInput() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](107, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[28, 4], [29, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 23, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 22, "mat-form-field", [["appearance", "outline"], ["class", "col-md-12 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](112, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 37, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 38, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 39, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 40, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 41, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 42, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 43, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 44, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 45, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](123, 16384, [[39, 4], [40, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "password"], ["matInput", ""], ["placeholder", "Placeholder"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131)._focusChanged(true) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131)._focusChanged(false) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131)._onInput() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](131, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[37, 4], [38, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 23, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 22, "mat-form-field", [["appearance", "outline"], ["class", "col-md-12 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](136, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 46, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 47, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 48, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 49, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 50, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 51, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 52, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 53, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 54, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](147, 16384, [[48, 4], [49, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Repeat Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "repeatPassword"], ["matInput", ""], ["placeholder", "Placeholder"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155)._focusChanged(true) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155)._focusChanged(false) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155)._onInput() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](150, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](152, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](154, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](155, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[46, 4], [47, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please verify you are not a robot"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](161, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](162, 0, null, null, 21, "div", [["class", "row form-group verification"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](163, 0, null, null, 6, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, null, 5, "input", [["autocomplete", "off"], ["formControlName", "verifyNumber1"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](165, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](167, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](169, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](170, 0, null, null, 6, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 0, null, null, 5, "input", [["autocomplete", "off"], ["class", "text-center"], ["formControlName", "verifyNumber2"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](172, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](174, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](176, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](177, 0, null, null, 6, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](178, 0, null, null, 5, "input", [["autocomplete", "off"], ["formControlName", "verifyResult"], ["placeholder", "?"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 179)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 179).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 179)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 179)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](179, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](181, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](183, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](184, 0, null, null, 4, "div", [["class", "form-group p-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](185, 0, null, null, 3, "button", [["class", "btn btn-link"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](187, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Submit "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.registerForm; _ck(_v, 7, 0, currVal_7); var currVal_8 = (_co.registerSuccess === false); _ck(_v, 13, 0, currVal_8); var currVal_31 = "outline"; _ck(_v, 16, 0, currVal_31); var currVal_48 = "firstName"; _ck(_v, 32, 0, currVal_48); var currVal_49 = "Placeholder"; _ck(_v, 35, 0, currVal_49); var currVal_72 = "outline"; _ck(_v, 40, 0, currVal_72); var currVal_89 = "lastName"; _ck(_v, 56, 0, currVal_89); var currVal_90 = "Placeholder"; _ck(_v, 59, 0, currVal_90); var currVal_113 = "outline"; _ck(_v, 64, 0, currVal_113); var currVal_130 = "email"; _ck(_v, 80, 0, currVal_130); var currVal_131 = "Placeholder"; _ck(_v, 83, 0, currVal_131); var currVal_154 = "outline"; _ck(_v, 88, 0, currVal_154); var currVal_171 = "phone"; _ck(_v, 104, 0, currVal_171); var currVal_172 = "Placeholder"; _ck(_v, 107, 0, currVal_172); var currVal_195 = "outline"; _ck(_v, 112, 0, currVal_195); var currVal_212 = "password"; _ck(_v, 128, 0, currVal_212); var currVal_213 = "Placeholder"; var currVal_214 = "password"; _ck(_v, 131, 0, currVal_213, currVal_214); var currVal_237 = "outline"; _ck(_v, 136, 0, currVal_237); var currVal_254 = "repeatPassword"; _ck(_v, 152, 0, currVal_254); var currVal_255 = "Placeholder"; _ck(_v, 155, 0, currVal_255); var currVal_256 = ((_co.verified === false) && (_co.submitted === true)); _ck(_v, 161, 0, currVal_256); var currVal_264 = "verifyNumber1"; _ck(_v, 167, 0, currVal_264); var currVal_272 = "verifyNumber2"; _ck(_v, 174, 0, currVal_272); var currVal_280 = "verifyResult"; _ck(_v, 181, 0, currVal_280); var currVal_282 = _co.loading; _ck(_v, 187, 0, currVal_282); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "standard"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "fill"); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "outline"); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "legacy"); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.errorState; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._canLabelFloat; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldLabelFloat(); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._hasFloatingLabel(); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._hideControlPlaceholder(); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.disabled; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.autofilled; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.focused; var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).color == "accent"); var currVal_22 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).color == "warn"); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("untouched"); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("touched"); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("pristine"); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("dirty"); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("valid"); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("invalid"); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("pending"); var currVal_30 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._animationsEnabled; _ck(_v, 14, 1, [currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30]); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassUntouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassTouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPristine; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassDirty; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassValid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassInvalid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPending; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._isServer; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).id; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).placeholder; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).disabled; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).required; var currVal_44 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._isNativeSelect) || null); var currVal_45 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._ariaDescribedby || null); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).errorState; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).required.toString(); _ck(_v, 29, 1, [currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47]); var currVal_50 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "standard"); var currVal_51 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "fill"); var currVal_52 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "outline"); var currVal_53 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "legacy"); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.errorState; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._canLabelFloat; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldLabelFloat(); var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._hasFloatingLabel(); var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._hideControlPlaceholder(); var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.disabled; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.autofilled; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.focused; var currVal_62 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).color == "accent"); var currVal_63 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).color == "warn"); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("untouched"); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("touched"); var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("pristine"); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("dirty"); var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("valid"); var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("invalid"); var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("pending"); var currVal_71 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._animationsEnabled; _ck(_v, 38, 1, [currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71]); var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassUntouched; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassTouched; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPristine; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassDirty; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassValid; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassInvalid; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPending; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._isServer; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).id; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).placeholder; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).disabled; var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).required; var currVal_85 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._isNativeSelect) || null); var currVal_86 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._ariaDescribedby || null); var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).errorState; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).required.toString(); _ck(_v, 53, 1, [currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88]); var currVal_91 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).appearance == "standard"); var currVal_92 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).appearance == "fill"); var currVal_93 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).appearance == "outline"); var currVal_94 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).appearance == "legacy"); var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._control.errorState; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._canLabelFloat; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldLabelFloat(); var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._hasFloatingLabel(); var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._hideControlPlaceholder(); var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._control.disabled; var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._control.autofilled; var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._control.focused; var currVal_103 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).color == "accent"); var currVal_104 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).color == "warn"); var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("untouched"); var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("touched"); var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("pristine"); var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("dirty"); var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("valid"); var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("invalid"); var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("pending"); var currVal_112 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._animationsEnabled; _ck(_v, 62, 1, [currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111, currVal_112]); var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).ngClassUntouched; var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).ngClassTouched; var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).ngClassPristine; var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).ngClassDirty; var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).ngClassValid; var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).ngClassInvalid; var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).ngClassPending; var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83)._isServer; var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).id; var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).placeholder; var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).disabled; var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).required; var currVal_126 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83)._isNativeSelect) || null); var currVal_127 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83)._ariaDescribedby || null); var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).errorState; var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).required.toString(); _ck(_v, 77, 1, [currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129]); var currVal_132 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).appearance == "standard"); var currVal_133 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).appearance == "fill"); var currVal_134 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).appearance == "outline"); var currVal_135 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).appearance == "legacy"); var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._control.errorState; var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._canLabelFloat; var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._shouldLabelFloat(); var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._hasFloatingLabel(); var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._hideControlPlaceholder(); var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._control.disabled; var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._control.autofilled; var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._control.focused; var currVal_144 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).color == "accent"); var currVal_145 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).color == "warn"); var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._shouldForward("untouched"); var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._shouldForward("touched"); var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._shouldForward("pristine"); var currVal_149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._shouldForward("dirty"); var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._shouldForward("valid"); var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._shouldForward("invalid"); var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._shouldForward("pending"); var currVal_153 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._animationsEnabled; _ck(_v, 86, 1, [currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138, currVal_139, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145, currVal_146, currVal_147, currVal_148, currVal_149, currVal_150, currVal_151, currVal_152, currVal_153]); var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassUntouched; var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassTouched; var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassPristine; var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassDirty; var currVal_159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassValid; var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassInvalid; var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassPending; var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._isServer; var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).id; var currVal_164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).placeholder; var currVal_165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).disabled; var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).required; var currVal_167 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._isNativeSelect) || null); var currVal_168 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._ariaDescribedby || null); var currVal_169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).errorState; var currVal_170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).required.toString(); _ck(_v, 101, 1, [currVal_155, currVal_156, currVal_157, currVal_158, currVal_159, currVal_160, currVal_161, currVal_162, currVal_163, currVal_164, currVal_165, currVal_166, currVal_167, currVal_168, currVal_169, currVal_170]); var currVal_173 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).appearance == "standard"); var currVal_174 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).appearance == "fill"); var currVal_175 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).appearance == "outline"); var currVal_176 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).appearance == "legacy"); var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._control.errorState; var currVal_178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._canLabelFloat; var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._shouldLabelFloat(); var currVal_180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._hasFloatingLabel(); var currVal_181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._hideControlPlaceholder(); var currVal_182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._control.disabled; var currVal_183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._control.autofilled; var currVal_184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._control.focused; var currVal_185 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).color == "accent"); var currVal_186 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).color == "warn"); var currVal_187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._shouldForward("untouched"); var currVal_188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._shouldForward("touched"); var currVal_189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._shouldForward("pristine"); var currVal_190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._shouldForward("dirty"); var currVal_191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._shouldForward("valid"); var currVal_192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._shouldForward("invalid"); var currVal_193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._shouldForward("pending"); var currVal_194 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._animationsEnabled; _ck(_v, 110, 1, [currVal_173, currVal_174, currVal_175, currVal_176, currVal_177, currVal_178, currVal_179, currVal_180, currVal_181, currVal_182, currVal_183, currVal_184, currVal_185, currVal_186, currVal_187, currVal_188, currVal_189, currVal_190, currVal_191, currVal_192, currVal_193, currVal_194]); var currVal_196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassUntouched; var currVal_197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassTouched; var currVal_198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassPristine; var currVal_199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassDirty; var currVal_200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassValid; var currVal_201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassInvalid; var currVal_202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassPending; var currVal_203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131)._isServer; var currVal_204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131).id; var currVal_205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131).placeholder; var currVal_206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131).disabled; var currVal_207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131).required; var currVal_208 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131)._isNativeSelect) || null); var currVal_209 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131)._ariaDescribedby || null); var currVal_210 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131).errorState; var currVal_211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131).required.toString(); _ck(_v, 125, 1, [currVal_196, currVal_197, currVal_198, currVal_199, currVal_200, currVal_201, currVal_202, currVal_203, currVal_204, currVal_205, currVal_206, currVal_207, currVal_208, currVal_209, currVal_210, currVal_211]); var currVal_215 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).appearance == "standard"); var currVal_216 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).appearance == "fill"); var currVal_217 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).appearance == "outline"); var currVal_218 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).appearance == "legacy"); var currVal_219 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._control.errorState; var currVal_220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._canLabelFloat; var currVal_221 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._shouldLabelFloat(); var currVal_222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._hasFloatingLabel(); var currVal_223 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._hideControlPlaceholder(); var currVal_224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._control.disabled; var currVal_225 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._control.autofilled; var currVal_226 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._control.focused; var currVal_227 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).color == "accent"); var currVal_228 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).color == "warn"); var currVal_229 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._shouldForward("untouched"); var currVal_230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._shouldForward("touched"); var currVal_231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._shouldForward("pristine"); var currVal_232 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._shouldForward("dirty"); var currVal_233 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._shouldForward("valid"); var currVal_234 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._shouldForward("invalid"); var currVal_235 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._shouldForward("pending"); var currVal_236 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._animationsEnabled; _ck(_v, 134, 1, [currVal_215, currVal_216, currVal_217, currVal_218, currVal_219, currVal_220, currVal_221, currVal_222, currVal_223, currVal_224, currVal_225, currVal_226, currVal_227, currVal_228, currVal_229, currVal_230, currVal_231, currVal_232, currVal_233, currVal_234, currVal_235, currVal_236]); var currVal_238 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154).ngClassUntouched; var currVal_239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154).ngClassTouched; var currVal_240 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154).ngClassPristine; var currVal_241 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154).ngClassDirty; var currVal_242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154).ngClassValid; var currVal_243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154).ngClassInvalid; var currVal_244 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154).ngClassPending; var currVal_245 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155)._isServer; var currVal_246 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).id; var currVal_247 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).placeholder; var currVal_248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).disabled; var currVal_249 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).required; var currVal_250 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155)._isNativeSelect) || null); var currVal_251 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155)._ariaDescribedby || null); var currVal_252 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).errorState; var currVal_253 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).required.toString(); _ck(_v, 149, 1, [currVal_238, currVal_239, currVal_240, currVal_241, currVal_242, currVal_243, currVal_244, currVal_245, currVal_246, currVal_247, currVal_248, currVal_249, currVal_250, currVal_251, currVal_252, currVal_253]); var currVal_257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).ngClassUntouched; var currVal_258 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).ngClassTouched; var currVal_259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).ngClassPristine; var currVal_260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).ngClassDirty; var currVal_261 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).ngClassValid; var currVal_262 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).ngClassInvalid; var currVal_263 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).ngClassPending; _ck(_v, 164, 0, currVal_257, currVal_258, currVal_259, currVal_260, currVal_261, currVal_262, currVal_263); var currVal_265 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassUntouched; var currVal_266 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassTouched; var currVal_267 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassPristine; var currVal_268 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassDirty; var currVal_269 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassValid; var currVal_270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassInvalid; var currVal_271 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).ngClassPending; _ck(_v, 171, 0, currVal_265, currVal_266, currVal_267, currVal_268, currVal_269, currVal_270, currVal_271); var currVal_273 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).ngClassUntouched; var currVal_274 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).ngClassTouched; var currVal_275 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).ngClassPristine; var currVal_276 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).ngClassDirty; var currVal_277 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).ngClassValid; var currVal_278 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).ngClassInvalid; var currVal_279 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).ngClassPending; _ck(_v, 178, 0, currVal_273, currVal_274, currVal_275, currVal_276, currVal_277, currVal_278, currVal_279); var currVal_281 = _co.loading; _ck(_v, 185, 0, currVal_281); }); }
function View_RegisterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-register", [], null, null, null, View_RegisterComponent_0, RenderType_RegisterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RegisterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-register", _register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], View_RegisterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/register/register.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/components/register/register.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".register-form-wrapper[_ngcontent-%COMP%]   .verification[_ngcontent-%COMP%] {\n  padding-left: 15px !important;\n  padding-right: 15px !important;\n}\n.register-form-wrapper[_ngcontent-%COMP%]   .verification[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.register-form-wrapper[_ngcontent-%COMP%]   .verification[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 8px;\n  border: 2px solid #c0c0c0;\n  text-align: center;\n  font-size: 2rem;\n}\n.register-form-wrapper[_ngcontent-%COMP%]   .verification[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child::after {\n  content: \"+\";\n  position: absolute;\n  font-size: 4rem;\n  margin-top: 14px;\n  margin-left: 2px;\n  color: #8c8686;\n}\n.register-form-wrapper[_ngcontent-%COMP%]   .verification[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)::after {\n  content: \"=\";\n  position: absolute;\n  font-size: 4rem;\n  margin-top: 14px;\n  margin-left: 2px;\n  color: #8c8686;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWV3YW5hcnlhbC9EZXNrdG9wL2NvZGVzL3Byb2plY3RzL2N2ZC1jbGllbnQvdWljb21wb25lbnQvc3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtBQ0FSO0FEQ1E7RUFDSSxhQUFBO0FDQ1o7QURBWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRWhCO0FEQ1E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDWjtBRENRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWZvcm0td3JhcHBlciB7XG4gICAgLnZlcmlmaWNhdGlvbiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2MwYzBjMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpdjpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCIrXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjOGM4Njg2O1xuICAgICAgICB9XG4gICAgICAgIGRpdjpudGgtY2hpbGQoMik6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiPVwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgICBjb2xvcjogIzhjODY4NjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIucmVnaXN0ZXItZm9ybS13cmFwcGVyIC52ZXJpZmljYXRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuLnJlZ2lzdGVyLWZvcm0td3JhcHBlciAudmVyaWZpY2F0aW9uIGRpdiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ucmVnaXN0ZXItZm9ybS13cmFwcGVyIC52ZXJpZmljYXRpb24gZGl2IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjMGMwYzA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLnJlZ2lzdGVyLWZvcm0td3JhcHBlciAudmVyaWZpY2F0aW9uIGRpdjpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIitcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIGNvbG9yOiAjOGM4Njg2O1xufVxuLnJlZ2lzdGVyLWZvcm0td3JhcHBlciAudmVyaWZpY2F0aW9uIGRpdjpudGgtY2hpbGQoMik6OmFmdGVyIHtcbiAgY29udGVudDogXCI9XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBjb2xvcjogIzhjODY4Njtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class RegisterComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.registerSuccess = true;
        this.verified = false;
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            verifyNumber1: [{ value: '', disabled: true }],
            verifyNumber2: [{ value: '', disabled: true }],
            verifyResult: ['']
        });
        this.registerForm.patchValue({
            verifyNumber1: Math.floor(Math.random() * 10),
            verifyNumber2: Math.floor(Math.random() * 10)
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() { return this.registerForm.controls; }
    onSubmit(e) {
        this.submitted = true;
        e.preventDefault();
        const isVerified = this.verifyResult(this.registerForm.getRawValue());
        console.log(isVerified);
        if (isVerified === true) {
            this.verified = true;
            this.authenticationService.register(this.registerForm.value).subscribe(res => {
                console.log(res);
            }, err => { });
        }
        else {
        }
        // this.authenticationService.register(this.registerForm.value).subscribe(res => {
        //   console.log(res);
        // }, err => { });
    }
    verifyResult(rawValue) {
        const calculatedSum = rawValue.verifyNumber1 + rawValue.verifyNumber2;
        const fieldSum = parseInt(rawValue.verifyResult, 10);
        return calculatedSum === fieldSum;
    }
}


/***/ }),

/***/ "./src/app/constants/enpoints.ts":
/*!***************************************!*\
  !*** ./src/app/constants/enpoints.ts ***!
  \***************************************/
/*! exports provided: Endpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endpoints", function() { return Endpoints; });
/*
    dev = deployed env
    local = localhost => eg. http://localhost:4040/login
*/
const env = 'local';
class Endpoints {
    static whichEnv() {
        const local = location.href.indexOf('localhost') > -1;
        const azure = location.href.indexOf('azure') > -1;
        let endpoints = {
            login: '',
            register: ''
        };
        if (local === true) {
            endpoints = {
                login: 'http://localhost:4040/login',
                register: 'http://localhost:4040/register'
            };
        }
        else if (azure === true) {
            endpoints = {
                login: 'https://codiv-azure-app.azurewebsites.net/login',
                register: 'https://codiv-azure-app.azurewebsites.net/register'
            };
        }
        return endpoints;
    }
}
// static endpoints = {
//     // login: env === 'local' ? 'http://localhost:4040/login' : 'https://codiv-azure-app.azurewebsites.net/login',
//     // register: env === 'local' ? 'http://localhost:4040/register' : '/register'
//     login: location.href.indexOf('localhost') > -1 ? 'http://localhost:4040/login' : 'https://codiv-azure-app.azurewebsites.net/login',
//     register: location.href.indexOf('localhost') > -1
//         ? 'http://localhost:4040/register' : 'https://codiv-azure-app.azurewebsites.net/register'
// };
Endpoints.endpoints = Endpoints.whichEnv();


/***/ }),

/***/ "./src/app/nav/menu/menu.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/nav/menu/menu.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_MenuComponent, View_MenuComponent_0, View_MenuComponent_Host_0, MenuComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MenuComponent", function() { return RenderType_MenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MenuComponent_0", function() { return View_MenuComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MenuComponent_Host_0", function() { return View_MenuComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponentNgFactory", function() { return MenuComponentNgFactory; });
/* harmony import */ var _menu_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.scss.shim.ngstyle */ "./src/app/nav/menu/menu.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.component */ "./src/app/nav/menu/menu.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_MenuComponent = [_menu_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MenuComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MenuComponent, data: {} });

function View_MenuComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 35, "div", [["class", "nav-wrapper container-fullwidth"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 34, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 33, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 32, "nav", [["class", "navbar navbar-expand-lg nvbar-light"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "a", [["class", "navbar-brand"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["| LOGO |"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "button", [["aria-controls", "navbarSupportedContent"], ["aria-expanded", "false"], ["aria-label", "Toggle navigation"], ["class", "navbar-toggler"], ["data-target", "#navbarSupportedContent"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "span", [["class", "navbar-toggler-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 26, "div", [["class", "collapse navbar-collapse"], ["id", "navbarSupportedContent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 12, "ul", [["class", "navbar-nav mr-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "li", [["class", "nav-item active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Provide Service"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Need Service"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "a", [["class", "nav-link"], ["style", "color: #fbd827;"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.beMember($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upgrade"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 12, "div", [["class", "form-inline my-2 my-lg-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 11, "ul", [["class", "navbar-nav mr-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 3, "li", [["class", "nav-item active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "a", [["class", "nav-link"], ["href", "#"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.userClicked($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["Hello, ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](29, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.userClicked($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 0, "img", [["class", "user-profile-pic"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "#"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.logout($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Logout"]))], function (_ck, _v) { var currVal_2 = "/home/provide-service"; _ck(_v, 14, 0, currVal_2); var currVal_5 = "/home/need-service"; _ck(_v, 18, 0, currVal_5); var currVal_8 = "/"; _ck(_v, 22, 0, currVal_8); var currVal_12 = "/profile"; _ck(_v, 32, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).href; _ck(_v, 13, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).href; _ck(_v, 17, 0, currVal_3, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).href; _ck(_v, 21, 0, currVal_6, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 0, _ck(_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), ((_co.user == null) ? null : _co.user.userName))); _ck(_v, 28, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).target; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).href; _ck(_v, 31, 0, currVal_10, currVal_11); var currVal_13 = ((((_co.user == null) ? null : _co.user.profilePicture) === "") ? "./assets/images/profile.png" : ((_co.user == null) ? null : _co.user.profilePicture)); _ck(_v, 33, 0, currVal_13); }); }
function View_MenuComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-menu", [], null, null, null, View_MenuComponent_0, RenderType_MenuComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MenuComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-menu", _menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], View_MenuComponent_Host_0, { user: "user" }, {}, []);



/***/ }),

/***/ "./src/app/nav/menu/menu.component.scss.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/nav/menu/menu.component.scss.shim.ngstyle.js ***!
  \**************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-color: #0c225f;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-profile-pic[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWV3YW5hcnlhbC9EZXNrdG9wL2NvZGVzL3Byb2plY3RzL2N2ZC1jbGllbnQvdWljb21wb25lbnQvc3JjL2FwcC9uYXYvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2plZXdhbmFyeWFsL0Rlc2t0b3AvY29kZXMvcHJvamVjdHMvY3ZkLWNsaWVudC91aWNvbXBvbmVudC9zcmMvc3R5bGVzL2NvbnN0YW50LnNjc3MiLCJzcmMvYXBwL25hdi9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSx5QkNKWTtBQ0VoQjtBRktRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRUhWO0FGT0k7RUFDRSxjQ2RNO0FDU1o7QUZPSTtFQUNFLFlBQUE7QUVMTiIsImZpbGUiOiJzcmMvYXBwL25hdi9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbnN0YW50LnNjc3NcIjtcblxuLm5hdi13cmFwcGVyIHtcbiAgLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdkJhY2tncm91bmQ7XG4gICAgdWwge1xuICAgICAgbGkge1xuICAgICAgICAudXNlci1wcm9maWxlLXBpYyB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYSB7XG4gICAgICBjb2xvcjogJHRleHRXaGl0ZTtcbiAgICB9XG4gICAgYS5hY3RpdmUge1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICBcbiAgfVxufVxuIiwiJG5hdkJhY2tncm91bmQ6ICMwYzIyNWY7XG4kdGV4dFdoaXRlOiAjZmZmZmZmO1xuIiwiLm5hdi13cmFwcGVyIC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyMjVmO1xufVxuLm5hdi13cmFwcGVyIC5uYXZiYXIgdWwgbGkgLnVzZXItcHJvZmlsZS1waWMge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLm5hdi13cmFwcGVyIC5uYXZiYXIgYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLm5hdi13cmFwcGVyIC5uYXZiYXIgYS5hY3RpdmUge1xuICBjb2xvcjogZ3JlZW47XG59Il19 */"];



/***/ }),

/***/ "./src/app/nav/menu/menu.component.ts":
/*!********************************************!*\
  !*** ./src/app/nav/menu/menu.component.ts ***!
  \********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class MenuComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.user);
    }
    beMember(e) { }
    userClicked(e) { }
    test() { }
    logout(e) {
        e.preventDefault();
        const observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            localStorage.removeItem('jwt');
            subscriber.next('logout');
        });
        observer.subscribe(x => {
            if (x === 'logout') {
                location.reload();
            }
        });
    }
}


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");



class AuthGuardService {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        console.log(currentUser);
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/front-page']);
        return false;
    }
}
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function AuthGuardService_Factory() { return new AuthGuardService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); }, token: AuthGuardService, providedIn: "root" });


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _constants_enpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/enpoints */ "./src/app/constants/enpoints.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





//import { Endpoints } from '../constants/enpoints';
class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('jwt')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    setCurrentUserValue(user) {
        this.currentUserSubject.next(user);
    }
    login(email, password) {
        return this.http.post(_constants_enpoints__WEBPACK_IMPORTED_MODULE_0__["Endpoints"].endpoints.login, { email, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.accessToken) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user));
                // this.currentUserSubject.next(user);
                localStorage.setItem('jwt', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('jwt');
        this.currentUserSubject.next(null);
    }
    register(user) {
        return this.http.post(_constants_enpoints__WEBPACK_IMPORTED_MODULE_0__["Endpoints"].endpoints.register, user);
    }
}
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function AuthenticationService_Factory() { return new AuthenticationService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); }, token: AuthenticationService, providedIn: "root" });


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeewanaryal/Desktop/codes/projects/cvd-client/uicomponent/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map