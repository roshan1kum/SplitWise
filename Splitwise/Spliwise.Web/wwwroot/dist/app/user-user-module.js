(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-friend-expense/add-friend-expense.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-friend-expense/add-friend-expense.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>add friend expense work</p> -->\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"panel-body\">\n        <div class=\"form-group\">\n            <label>\n            Cost:\n            <input type=\"number\" formControlName=\"Cost\">\n            </label>\n        </div>\n        <div class=\"form-group\">\n                <label>\n                Description:\n                <input type=\"text\" formControlName=\"Description\">\n                </label>\n        </div>\n        <div class=\"form-group\">\n                <label>\n                Date:\n                <input type=\"date\" formControlName=\"Date\">\n                </label>\n        </div>\n        <div class=\"form-group\">\n            <label>\n                Split:\n            </label>\n            <input type=\"radio\" formControlName=\"Split\" value=\"equally\">Equally\n            <input type=\"radio\" formControlName=\"Split\" value=\"Unequally\">Unequally\n        </div>  \n    </div>\n    <div class=\"well\">\n    <div formArrayName=\"MembersExpense\" *ngFor=\"let m of profileForm.get('MembersExpense').controls;let i=index\">\n        <div [formGroupName]=\"i\">\n            <label>\n                Name\n            </label>\n                <input type =\"text\"  formControlName=\"Name\">\n                <label>\n                    Price\n                </label>            \n                <input type=\"number\"  formControlName=\"Price\">\n        </div>\n        <button type=\"button\" (click)=\"deleteMembers(i)\">Delete</button>\n    </div>\n    <button type=\"button\" (click)=\"AddMembers()\">Add Members</button>\n    </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\n        </div>\n        \n</form>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-friend/add-friend.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-friend/add-friend.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Add friends</h1>\n    <div class=\"form-check\" *ngFor=\"let item of user\">\n        <div *ngIf=\"item.name!=currentUser.name\">\n            <input  class=\"form-check-input\" type=\"checkbox\" (change)=\"onChange(item.id, $event.target.checked)\">{{item.name}}\n        </div>\n    </div>\n\n    <div>\n        <button class=\"success\" (click)=\"submit()\">Add</button>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit-user/edit-user.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit-user/edit-user.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>edit-user works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/show-details/show-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/show-details/show-details.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>Show details works</p> -->\n<h1>{{user?.name}}</h1>\n<h2>FriendName:</h2>\n<button class=\"btn btn-success\" (click)=\"AddFriend()\">Add Friend</button>\n\n<table class='table'>\n    <tr *ngFor=\"let f of FriendName\">\n        <td>{{f.name}}</td>\n    </tr>\n</table>\n\n<h3>GroupName</h3>\n<button class=\"btn btn-success\" (click)=\"AddGroup()\">Add Group</button>\n\n\n<table class='table'>\n    <tr *ngFor=\"let g of grpName\">\n        <td>{{g}}</td>\n    </tr>\n</table>\n\n<table class='table'>\n    <tr *ngFor=\"let bill of FriendBill\">\n        <td>{{bill.name}} owed {{bill.amount}} on {{bill.date}}</td>\n    </tr>\n</table>\n\n<button class=\"btn btn-success\" (click)=\"AddFriendExpense()\">Add Friend Expense</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/show-friend-detail/show-friend-detail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/show-friend-detail/show-friend-detail.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>show-friend-detail works</p>\n\n<table class=\"table\">\n    <tr>\n        <th>Name</th>\n        <th>Amount</th>\n        <th>Date</th>\n    </tr>\n    <tr tr *ngFor=\"let bill of FriendBill\">\n        <td>{{bill?.name}}</td>\n        <td>{{bill?.amount}}</td>\n        <td>{{bill?.date}}</td>\n    </tr>\n</table>\n\n");

/***/ }),

/***/ "./src/app/user/Shared/Friend.ts":
/*!***************************************!*\
  !*** ./src/app/user/Shared/Friend.ts ***!
  \***************************************/
/*! exports provided: Friend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Friend", function() { return Friend; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Friend {
}


/***/ }),

/***/ "./src/app/user/Shared/FriendExpensesData.ts":
/*!***************************************************!*\
  !*** ./src/app/user/Shared/FriendExpensesData.ts ***!
  \***************************************************/
/*! exports provided: FriendExpensesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendExpensesData", function() { return FriendExpensesData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FriendExpensesData {
}


/***/ }),

/***/ "./src/app/user/Shared/Members.ts":
/*!****************************************!*\
  !*** ./src/app/user/Shared/Members.ts ***!
  \****************************************/
/*! exports provided: Members */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Members", function() { return Members; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Members {
}


/***/ }),

/***/ "./src/app/user/add-friend-expense/add-friend-expense.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/user/add-friend-expense/add-friend-expense.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWRkLWZyaWVuZC1leHBlbnNlL2FkZC1mcmllbmQtZXhwZW5zZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/add-friend-expense/add-friend-expense.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/add-friend-expense/add-friend-expense.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddFriendExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendExpenseComponent", function() { return AddFriendExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user/user-service.service.ts");
/* harmony import */ var _Shared_Members__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/Members */ "./src/app/user/Shared/Members.ts");
/* harmony import */ var _Shared_FriendExpensesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/FriendExpensesData */ "./src/app/user/Shared/FriendExpensesData.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AddFriendExpenseComponent = class AddFriendExpenseComponent {
    // friendN:string[];
    constructor(service, fb, router) {
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.getCurrentUser();
        this.FriendExpense = new _Shared_FriendExpensesData__WEBPACK_IMPORTED_MODULE_5__["FriendExpensesData"]();
        this.FriendExpense.friendUserExpense = new Array();
    }
    ngOnInit() {
        this.profileForm = this.fb.group({
            Cost: [''],
            Description: [''],
            Date: [''],
            Split: [''],
            MembersExpense: this.fb.array([
                this.addMembersFormGroup()
            ])
        });
    }
    addMembersFormGroup() {
        return this.fb.group({
            Name: [''],
            Price: ['']
        });
    }
    AddMembers() {
        this.profileForm.get('MembersExpense').push(this.addMembersFormGroup());
    }
    deleteMembers(index) {
        this.profileForm.get('MembersExpense').removeAt(index);
    }
    onSubmit() {
        //console.log(this.profileForm.get('MembersExpense').value);
        this.FriendExpense.amount = this.profileForm.get('Cost').value;
        this.FriendExpense.Date = this.profileForm.get('Date').value;
        this.FriendExpense.Description = this.profileForm.get('Description').value;
        this.FriendExpense.split = this.profileForm.get('Split').value;
        this.FriendExpense.paidby = this.user.id;
        this.profileForm.get('MembersExpense').value.forEach(element => {
            this.FriendName.forEach(frnd => {
                if (frnd.name == element.Name) {
                    this.member = new _Shared_Members__WEBPACK_IMPORTED_MODULE_4__["Members"]();
                    this.member.userId = frnd.id;
                    this.member.Amount = element.Price;
                    this.FriendExpense.friendUserExpense.push(this.member);
                }
            });
        });
        console.log(this.FriendExpense);
        this.service.CreateFriendExpense(this.FriendExpense).subscribe(res => {
            this.router.navigate(['FriendDashboard']);
        });
    }
    getCurrentUser() {
        this.service.username().subscribe(u => {
            this.user = u;
            this.getFriend(this.user.id);
        });
    }
    getFriend(id) {
        this.service.getFriend(id).subscribe(name => {
            this.FriendName = name;
        });
    }
};
AddFriendExpenseComponent.ctorParameters = () => [
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AddFriendExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-friend-expense',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-friend-expense.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-friend-expense/add-friend-expense.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-friend-expense.component.css */ "./src/app/user/add-friend-expense/add-friend-expense.component.css")).default]
    })
], AddFriendExpenseComponent);



/***/ }),

/***/ "./src/app/user/add-friend/add-friend.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/add-friend/add-friend.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWRkLWZyaWVuZC9hZGQtZnJpZW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user/add-friend/add-friend.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/add-friend/add-friend.component.ts ***!
  \*********************************************************/
/*! exports provided: AddFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendComponent", function() { return AddFriendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user/user-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Shared_Friend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/Friend */ "./src/app/user/Shared/Friend.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AddFriendComponent = class AddFriendComponent {
    constructor(service, fb, router) {
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.FormArray = [];
        this.getCurrentUser();
        this.frnd = new _Shared_Friend__WEBPACK_IMPORTED_MODULE_4__["Friend"]();
    }
    ngOnInit() {
    }
    getCurrentUser() {
        this.service.username().subscribe(u => {
            this.currentUser = u;
            this.getFriend(u.id);
            this.getAllUser();
        });
    }
    getAllUser() {
        this.service.getAllUser().subscribe(u => {
            this.user = u;
        });
    }
    getFriend(id) {
        this.service.getFriend(id).subscribe(name => this.FriendName = name);
    }
    onChange(id, isChecked) {
        if (isChecked) {
            this.FormArray.push(id);
        }
        else {
            let index = this.FormArray.indexOf(id);
            this.FormArray.splice(index, 1);
        }
    }
    submit() {
        this.frnd.yourId = this.currentUser.id;
        this.frnd.FriendId = this.FormArray;
        this.service.AddFriend(this.frnd).subscribe(res => {
            this.router.navigate(['']);
        });
    }
};
AddFriendComponent.ctorParameters = () => [
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddFriendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-friend',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-friend.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-friend/add-friend.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-friend.component.css */ "./src/app/user/add-friend/add-friend.component.css")).default]
    })
], AddFriendComponent);



/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.ts ***!
  \*******************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditUserComponent = class EditUserComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit-user/edit-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-user.component.css */ "./src/app/user/edit-user/edit-user.component.css")).default]
    })
], EditUserComponent);



/***/ }),

/***/ "./src/app/user/show-details/show-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/show-details/show-details.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hvdy1kZXRhaWxzL3Nob3ctZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/show-details/show-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/show-details/show-details.component.ts ***!
  \*************************************************************/
/*! exports provided: ShowDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsComponent", function() { return ShowDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ShowDetailsComponent = class ShowDetailsComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.getCurrentUser();
    }
    ;
    ngOnInit() {
    }
    getCurrentUser() {
        this.service.username().subscribe(u => {
            this.user = u;
            this.getFriend(this.user.id);
            this.getGroups(this.user.id);
            this.getFriendExpense(this.user.id);
        });
    }
    getFriend(id) {
        this.service.getFriend(id).subscribe(name => this.FriendName = name);
    }
    getGroups(id) {
        this.service.getGroups(id).subscribe(name => this.grpName = name);
    }
    getFriendExpense(id) {
        this.service.getFriendExpense(id).subscribe(name => this.FriendBill = name);
    }
    AddFriend() {
        this.router.navigate(['AddFriend']);
    }
    AddGroup() {
        alert("Added Groups");
    }
    AddFriendExpense() {
        this.router.navigate(['AddFriendExpense']);
    }
};
ShowDetailsComponent.ctorParameters = () => [
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ShowDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/show-details/show-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-details.component.css */ "./src/app/user/show-details/show-details.component.css")).default]
    })
], ShowDetailsComponent);



/***/ }),

/***/ "./src/app/user/show-friend-detail/show-friend-detail.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/user/show-friend-detail/show-friend-detail.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hvdy1mcmllbmQtZGV0YWlsL3Nob3ctZnJpZW5kLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/show-friend-detail/show-friend-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/show-friend-detail/show-friend-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShowFriendDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFriendDetailComponent", function() { return ShowFriendDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user/user-service.service.ts");



let ShowFriendDetailComponent = class ShowFriendDetailComponent {
    constructor(service) {
        this.service = service;
        this.getCurrentUser();
    }
    ngOnInit() {
    }
    getCurrentUser() {
        this.service.username().subscribe(u => {
            this.user = u;
            this.getFriendExpense(this.user.id);
        });
    }
    getFriendExpense(id) {
        this.service.getFriendExpense(id).subscribe(name => this.FriendBill = name);
    }
};
ShowFriendDetailComponent.ctorParameters = () => [
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] }
];
ShowFriendDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-friend-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-friend-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/show-friend-detail/show-friend-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-friend-detail.component.css */ "./src/app/user/show-friend-detail/show-friend-detail.component.css")).default]
    })
], ShowFriendDetailComponent);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-details/show-details.component */ "./src/app/user/show-details/show-details.component.ts");
/* harmony import */ var _add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-friend/add-friend.component */ "./src/app/user/add-friend/add-friend.component.ts");
/* harmony import */ var _add_friend_expense_add_friend_expense_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-friend-expense/add-friend-expense.component */ "./src/app/user/add-friend-expense/add-friend-expense.component.ts");
/* harmony import */ var _show_friend_detail_show_friend_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-friend-detail/show-friend-detail.component */ "./src/app/user/show-friend-detail/show-friend-detail.component.ts");







const routes = [
    {
        path: '',
        component: _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_3__["ShowDetailsComponent"]
    },
    {
        path: 'AddFriend',
        component: _add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_4__["AddFriendComponent"]
    },
    {
        path: 'AddFriendExpense',
        component: _add_friend_expense_add_friend_expense_component__WEBPACK_IMPORTED_MODULE_5__["AddFriendExpenseComponent"]
    },
    {
        path: 'FriendDashboard',
        component: _show_friend_detail_show_friend_detail_component__WEBPACK_IMPORTED_MODULE_6__["ShowFriendDetailComponent"]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

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
};
UserServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserServiceService);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-friend/add-friend.component */ "./src/app/user/add-friend/add-friend.component.ts");
/* harmony import */ var _add_friend_expense_add_friend_expense_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-friend-expense/add-friend-expense.component */ "./src/app/user/add-friend-expense/add-friend-expense.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/user/edit-user/edit-user.component.ts");
/* harmony import */ var _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-details/show-details.component */ "./src/app/user/show-details/show-details.component.ts");
/* harmony import */ var _show_friend_detail_show_friend_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-friend-detail/show-friend-detail.component */ "./src/app/user/show-friend-detail/show-friend-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_4__["AddFriendComponent"], _add_friend_expense_add_friend_expense_component__WEBPACK_IMPORTED_MODULE_5__["AddFriendExpenseComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__["EditUserComponent"], _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_7__["ShowDetailsComponent"], _show_friend_detail_show_friend_detail_component__WEBPACK_IMPORTED_MODULE_8__["ShowFriendDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map