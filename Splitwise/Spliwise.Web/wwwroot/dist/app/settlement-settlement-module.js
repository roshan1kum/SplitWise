(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settlement-settlement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settlement/settlement/settlement.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settlement/settlement/settlement.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>settlement works!</p>\n\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <label>\n                Cost:\n                <input type=\"number\" formControlName=\"Cost\">\n                </label>\n            </div>\n           \n            <div class=\"form-group\">\n                    <label>\n                    Date:\n                    <input type=\"date\" formControlName=\"Date\">\n                    </label>\n            </div>\n            <div class=\"form-group\">\n                    <label>\n                      GroupName:\n                      <select (change)=\"onChange($event.target.value)\"  class = \"form-control\"  formControlName=\"Group\">\n                            <option value=\"\">No Group</option>\n                            <option *ngFor = \"let grp of grpName\" [(ngValue)]=\"grp\"  [value]=\"grp.id\">{{grp.groupName}}</option>\n                         </select>\n                    </label>\n            </div>\n            <div class=\"form-group\" *ngIf='flag==\"Group\"'>\n                    <label>\n                            User1:\n                            <select class = \"form-control\"  formControlName=\"User1\">\n                                  <option *ngFor = \"let user of allUser\" [(ngValue)]=\"user\"  [value]=\"user.userId\">{{user.memberName}}</option>\n                               </select>\n                    </label>\n            </div>\n            <div class=\"form-group\" *ngIf='flag==\"Friends\"'>\n                    <label>\n                            User1:\n                            <select class = \"form-control\"  formControlName=\"User1\">\n                                  <option *ngFor = \"let user of FriendName\" [(ngValue)]=\"user\"  [value]=\"user.id\">{{user.name}}</option>\n                               </select>\n                    </label>\n            </div>\n            <label>Paid</label>\n            <div class=\"form-group\" *ngIf='flag==\"Group\"'>\n                    <label>\n                            User2:\n                            <select class = \"form-control\"  formControlName=\"User2\">\n                                  <option *ngFor = \"let user of allUser\" [(ngValue)]=\"user\"  [value]=\"user.userId\">{{user.memberName}}</option>\n                               </select>\n                    </label>\n            </div>\n            <div class=\"form-group\" *ngIf='flag==\"Friends\"'>\n                    <label>\n                            User2:\n                            <select class = \"form-control\"  formControlName=\"User2\">\n                                  <option *ngFor = \"let user of FriendName\" [(ngValue)]=\"user\"  [value]=\"user.id\">{{user.name}}</option>\n                               </select>\n                    </label>\n            </div>\n\n\n         \n            <div class=\"form-group\">\n                    <button type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\n            </div>\n                \n    \n                    \n                      \n        </div>\n</form>");

/***/ }),

/***/ "./src/app/Shared/SettlementData.ts":
/*!******************************************!*\
  !*** ./src/app/Shared/SettlementData.ts ***!
  \******************************************/
/*! exports provided: SettlementData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementData", function() { return SettlementData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SettlementData {
}


/***/ }),

/***/ "./src/app/settlement/settlement-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/settlement/settlement-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SettlementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementRoutingModule", function() { return SettlementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settlement_settlement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settlement/settlement.component */ "./src/app/settlement/settlement/settlement.component.ts");




const routes = [
    {
        path: '',
        component: _settlement_settlement_component__WEBPACK_IMPORTED_MODULE_3__["SettlementComponent"]
    }
];
let SettlementRoutingModule = class SettlementRoutingModule {
};
SettlementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SettlementRoutingModule);



/***/ }),

/***/ "./src/app/settlement/settlement.module.ts":
/*!*************************************************!*\
  !*** ./src/app/settlement/settlement.module.ts ***!
  \*************************************************/
/*! exports provided: SettlementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementModule", function() { return SettlementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _settlement_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settlement-routing.module */ "./src/app/settlement/settlement-routing.module.ts");
/* harmony import */ var _settlement_settlement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settlement/settlement.component */ "./src/app/settlement/settlement/settlement.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let SettlementModule = class SettlementModule {
};
SettlementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_settlement_settlement_component__WEBPACK_IMPORTED_MODULE_4__["SettlementComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _settlement_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettlementRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], SettlementModule);



/***/ }),

/***/ "./src/app/settlement/settlement/settlement.component.css":
/*!****************************************************************!*\
  !*** ./src/app/settlement/settlement/settlement.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRsZW1lbnQvc2V0dGxlbWVudC9zZXR0bGVtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/settlement/settlement/settlement.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/settlement/settlement/settlement.component.ts ***!
  \***************************************************************/
/*! exports provided: SettlementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementComponent", function() { return SettlementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/user-service.service */ "./src/app/user/user-service.service.ts");
/* harmony import */ var _Shared_SettlementData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/SettlementData */ "./src/app/Shared/SettlementData.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let SettlementComponent = class SettlementComponent {
    constructor(fb, service, _location) {
        this.fb = fb;
        this.service = service;
        this._location = _location;
        this.allUser = [];
        this.default = 'UK';
        this.flag = "Friends";
        this.FriendName = new Array();
        this.settlement = new _Shared_SettlementData__WEBPACK_IMPORTED_MODULE_4__["SettlementData"]();
    }
    ngOnInit() {
        this.getCurrentUser();
        this.profileForm = this.fb.group({
            Cost: [''],
            Date: [''],
            Group: [''],
            User1: [''],
            User2: ['']
        });
    }
    getCurrentUser() {
        this.service.username().subscribe(u => {
            this.user = u;
            this.FriendName.push(this.user);
            this.getGroups(this.user.id);
            this.getFriend(this.user.id);
        });
    }
    getGroups(id) {
        // this.service.getallGroups(id).subscribe(res=>{
        //   this.grpName=res;
        // })
        this.service.getGroupsofUser(id).subscribe(res => {
            this.grpName = res;
        });
    }
    onChange(id) {
        this.ID = id;
        this.allUser = new Array();
        this.service.getallMembers(id).subscribe(res => {
            res.forEach(element => {
                this.allUser.push(element);
            });
            // console.log(this.allUser);
            if (this.allUser.length > 0) {
                this.flag = "Group";
            }
            else {
                this.flag = "Friends";
            }
        });
    }
    getFriend(id) {
        this.service.getFriend(id).subscribe(name => {
            name.forEach(element => {
                this.FriendName.push(element);
            });
        });
    }
    onSubmit() {
        // console.log(this.profileForm.value)
        this.settlement.amount = this.profileForm.get('Cost').value;
        this.settlement.date = this.profileForm.get('Date').value;
        this.settlement.groupId = +this.profileForm.get('Group').value;
        this.settlement.yourId = this.profileForm.get('User1').value;
        this.settlement.toId = this.profileForm.get('User2').value;
        console.log(this.settlement);
        this.service.Settlement(this.settlement).subscribe(res => {
            this._location.back();
        });
    }
};
SettlementComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
SettlementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settlement',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settlement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settlement/settlement/settlement.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settlement.component.css */ "./src/app/settlement/settlement/settlement.component.css")).default]
    })
], SettlementComponent);



/***/ })

}]);
//# sourceMappingURL=settlement-settlement-module.js.map