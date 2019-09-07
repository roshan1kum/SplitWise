(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/user/user-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/user/user-service.service.ts ***!
  \**********************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserServiceService = class UserServiceService {
    constructor(http) {
        this.http = http;
        this.rootUrl = "http://localhost:50534/api/User";
    }
    username() {
        return this.http.get(this.rootUrl + '/CurrentUser');
    }
    getFriend(id) {
        return this.http.get(this.rootUrl + '/GetFriend/' + id);
    }
    getGroups(id) {
        return this.http.get(this.rootUrl + '/GetGroups/' + id);
    }
    getFriendExpense(id) {
        return this.http.get(this.rootUrl + '/ShowFriendExpense/' + id);
    }
    getAllUser() {
        return this.http.get(this.rootUrl);
    }
    AddFriend(Id) {
        return this.http.post("http://localhost:50534/api/User/AddFriend", Id);
    }
    CreateFriendExpense(friendExpenseData) {
        return this.http.post(this.rootUrl + '/CreateFriendExpense', friendExpenseData);
    }
    getCategory() {
        return this.http.get(this.rootUrl + '/Category');
    }
    createGroups(group) {
        return this.http.post("http://localhost:50534/api/Groups", group);
    }
};
UserServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserServiceService);



/***/ })

}]);
//# sourceMappingURL=common.js.map