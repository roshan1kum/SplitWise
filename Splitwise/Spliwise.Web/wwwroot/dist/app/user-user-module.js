(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/activity/activity.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/activity/activity.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>activity works</p>\n<table class=\"table\" *ngFor=\"let activity of Activity\">\n    <td>{{activity.description}}</td>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-friend-expense/add-friend-expense.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-friend-expense/add-friend-expense.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form class=\"form-horizontal\">\n<div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">Add Friend Expense</div>\n        <div class=\"panel-body\">\n                <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"panel-body\">\n                            <div class=\"form-group\">                                \n                                <label>\n                                Cost:\n                                <input type=\"number\" formControlName=\"Cost\" class=\"form-control\">\n                                </label>                      \n                            </div>\n                            <div class=\"form-group\">\n                                    <label>\n                                    Description:\n                                    <input type=\"text\" formControlName=\"Description\" class=\"form-control\">\n                                    </label>\n                            </div>\n                            <div class=\"form-group\">\n                                    <label>\n                                    Date:                                    \n                                    <input type=\"date\" formControlName=\"Date\" class=\"form-control\">\n                                    </label>\n                            </div>\n                          \n                        </div>\n                        \n                        <div class=\"well\">\n                        <div formArrayName=\"MembersExpense\" *ngFor=\"let m of profileForm.get('MembersExpense').controls;let i=index\">\n                            <div [formGroupName]=\"i\">\n                               <div class=\"row\">\n                                   <div class=\"col-sm-6\">\n                                <label >\n                                    Name\n                                </label>\n                                                                   \n                                    <select formControlName=\"Name\" class=\"form-control\" >\n                                        <option value=\"\">Choose User</option>\n                                        <option *ngFor = \"let user of FriendName\" [(ngValue)]=\"user\"  [value]=\"user.name\">{{user.name}}</option>\n                                    </select>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                    <label>\n                                        Price\n                                    </label>                                               \n                                    <input type=\"text\"  formControlName=\"Price\" class=\"form-control\">\n                                </div> \n                            </div>\n                            </div>\n                            <!-- <button type=\"button\" (click)=\"deleteMembers(i)\">Delete</button> -->\n                        </div>\n                        <div class=\"panel-group\"><br>\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"AddMembers()\">Add Members</button>\n                        </div>\n                        </div>\n                        <div class=\"panel-body\">\n                        <div class=\"form-group\">\n                                <label class=\"radio-inline\">\n                                    Split:\n                                </label>\n                                <label class=\"radio-inline\">\n                                <input type=\"radio\" formControlName=\"Split\" value=\"equally\" (click)=\"Split($event.target.value)\">Equally\n                                </label>\n                                <label class=\"radio-inline\">\n                                <input type=\"radio\" formControlName=\"Split\" value=\"Unequally\" (click)=\"Split($event.target.value)\">Unequally\n                                </label>\n                            </div>                              \n                            <div class=\" panel-footer form-group\">\n                                <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\n                            </div>\n                            </div>\n                            \n                    </form>                                                            \n    </div>\n    </div>\n    </form>\n    <button class=\"btn btn-success\" (click)=\"Back()\">Back</button>\n    \n\n\n\n<!-- <form #GroupExpenseForm=\"ngForm\" (ngSubmit)=SaveGroupExpense(GroupExpenseForm)>\n<div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">Create Expense</div>\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <label for=\"Cost\">Cost</label>\n                    <input type =\"text\" name=\"Cost\" [(ngModel)]=\"Cost\" class=\"form-control\">                                \n            </div>\n            <div class=\"form-group\">\n                <label for=\"Friendname\">Choose Friend</label>\n                    <select id=\"Friendname\" name=\"Friendname\" [(ngModel)]=\"Friendname\" class=\"form-control\">\n                            <option value=\"\">Choose User</option>\n                        <option *ngFor = \"let user of FriendName\"  [value]=\"user.name\">{{user.name}}</option>\n                    </select>\n                \n            </div>\n            <div class=\"panel-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </div>                        \n        </div>\n    </div>\n</form> -->\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-friend/add-friend.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-friend/add-friend.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Add friends</h1>\n    <!-- <div class=\"form-check\" *ngFor=\"let item of user\">\n        <div *ngIf=\"item.name!=currentUser.name\"> -->\n            <!-- <input  class=\"form-check-input\" type=\"checkbox\" (change)=\"onChange(item.id, $event.target.checked)\">{{item.name}} -->\n\n        <!-- </div> -->\n    <!-- </div> -->\n<div class=\"well\">\n    <div [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n        <div formArrayName=\"Friends\" *ngFor=\"let m of profileForm.get('Friends').controls;let i=index\">\n                <div [formGroupName]=\"i\">\n                        <div class=\"form-group\">\n                                <label>\n                                    UserName:\n                                </label>\n                                <input type=\"text\" formControlName=\"UserName\">\n                            </div>\n                </div>\n            </div>\n        <button type=\"button\" (click)=\"AddFriends()\">Add Friends</button>\n    </div>\n</div>\n    <div>\n        <button class=\"success\" (click)=\"submit()\">Add</button>\n    </div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <h1>show details</h1> -->\n<mat-toolbar color=\"primary\" >\n        <div style=\"width: 50%\">Splitwise Details</div>\n        <div style=\"width: 50%; text-align: right;\">\n                        <button mat-button (click)=\"Activity()\">Activity</button>\n                        <button mat-button [matMenuTriggerFor]=\"menu\">Operation</button>\n                        <mat-menu #menu=\"matMenu\">\n                          <button mat-menu-item (click)=\"AddFriendExpense()\">Add Friend Expense</button>\n                          <button mat-menu-item (click)=\"AddGroupExpense()\">Add Group Expense</button>\n                          <button mat-menu-item (click)=\"Settlement()\">Settle Up</button>                          \n                        </mat-menu>\n        </div>        \n</mat-toolbar><br>\n\n<!-- <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Split wise</div>\n    <div class=\"panel-body\">\n        <h2>{{user?.name}}</h2>\n        <button class=\"btn btn-success\" (click)=\"Activity()\">Activity</button>         \n</div>\n</div> -->\n\n<!-- <div class=\"row\"> -->\n        <div  >\n                <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">Friends</div>\n                        <div class=\"panel-body\">\n                                <button mat-flat-button color=\"primary\" style='margin-right:16px' (click)=\"AddFriend()\">Add Friend</button>\n                                <button mat-flat-button color=\"primary\" style='margin-right:16px' (click)=\"FriendDashBoard()\">Friend DashBoard</button><br><br>                \n                                <table class='table'>\n                                        <tr *ngFor=\"let f of FriendName\">\n                                            <td><h3>{{f.name}}</h3></td>\n                                            <td><button mat-raised-button color=\"warn\" (click)=\"UnFriend(f.id)\">Unfriend</button> </td>\n                                        </tr>\n                                    </table>\n                        </div>         \n                    </div>\n                </div>\n                <!-- <div class=col-md-6 width=50%>\n                        <div class=\"panel panel-primary\">\n                                <div class=\"panel-heading\">Operation</div>\n                                <div class=\"panel-body\">\n                                        <div class=\"form-group\">\n                                                <button class=\"btn btn-success\" (click)=\"AddFriendExpense()\">Add Friend Expense</button>\n                                                </div>\n                                                <div class=\"form-group\">\n                                                <button class=\"btn btn-success\" (click)=\"AddGroupExpense()\">Add Group Expense</button><br>\n                                                </div>\n                                                <div class=\"form-group\">\n                                                <button class=\"btn btn-success\" (click)=\"Settlement()\">Settle Up</button>\n                                                </div> \n                                </div>         \n                        </div>\n                </div> -->\n<!-- </div> -->\n\n\n<div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">Group Name</div>\n        <div class=\"panel-body\">\n                <button mat-flat-button color=\"primary\" (click)=\"AddGroup()\">Add Group</button>\n                <table class='table'>\n                        <tr *ngFor=\"let g of grpName\" (click)=\"NavigateToGroupDashboard(g.id)\">\n                            <td><h3>{{g.groupName}}</h3></td>\n                            <div class=\"form-group\">\n                            <td><button mat-raised-button color=\"primary\" style='margin-right:16px' (click)=\"AddMembers(g.id)\" >Add</button></td>\n                            <td><button mat-raised-button color=\"primary\" style='margin-right:16px' (click)=\"Members(g.id)\">Members</button></td>\n\n                        </div>\n                        </tr>\n                    </table>                        \n        </div>         \n</div>\n  \n       \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/show-friend-detail/show-friend-detail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/show-friend-detail/show-friend-detail.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>show-friend-detail works!</p>\n\n<!-- <table class=\"table table-condensed\">\n    <tr>\n        <th>Name</th>\n        <th>Amount</th>\n        <th>Email</th>\n        <th>Description</th>\n        <th>Total Paid Amount</th>\n    </tr>\n    <tr *ngFor=\"let bill of FriendBill\">\n        <td>{{bill?.name}}</td>\n        <td>{{bill?.amount}}</td>\n        <td>{{bill?.email}}</td>\n        <td>{{bill?.description}}</td>\n        <td>{{bill?.paidbyAmount}}</td>\n    </tr>\n</table> -->\n<div class=\"row\" *ngFor=\"let bill of FriendBill\">\n<div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">{{bill?.name}} Email:{{bill?.email}}</div>\n        <div class=\"panel-body\">\n            <p>Debt:{{bill?.amount}}</p>\n            <p>Person to Pay:{{user.name}}</p>\n            <p>Description:{{bill?.description}}</p>    \n        </div>\n</div>\n</div>\n<button class=\"btn btn-success\" (click)=\"Back()\">Back</button>\n\n");

/***/ }),

/***/ "./src/app/Shared/Friend.ts":
/*!**********************************!*\
  !*** ./src/app/Shared/Friend.ts ***!
  \**********************************/
/*! exports provided: Friend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Friend", function() { return Friend; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Friend {
}


/***/ }),

/***/ "./src/app/Shared/FriendExpensesData.ts":
/*!**********************************************!*\
  !*** ./src/app/Shared/FriendExpensesData.ts ***!
  \**********************************************/
/*! exports provided: FriendExpensesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendExpensesData", function() { return FriendExpensesData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FriendExpensesData {
}


/***/ }),

/***/ "./src/app/user/activity/activity.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/activity/activity.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user/activity/activity.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/activity/activity.component.ts ***!
  \*****************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user/user-service.service.ts");



let ActivityComponent = class ActivityComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.CurrentUser();
    }
    CurrentUser() {
        this.service.username().subscribe(res => {
            this.user = res;
            this.getActivity(this.user.id);
        });
    }
    getActivity(userId) {
        this.service.Activity(userId).subscribe(res => {
            this.Activity = res;
            console.log(this.Activity);
        });
    }
};
ActivityComponent.ctorParameters = () => [
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] }
];
ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/activity/activity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity.component.css */ "./src/app/user/activity/activity.component.css")).default]
    })
], ActivityComponent);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Shared_Members__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Members */ "./src/app/Shared/Members.ts");
/* harmony import */ var src_app_Shared_FriendExpensesData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/FriendExpensesData */ "./src/app/Shared/FriendExpensesData.ts");







let AddFriendExpenseComponent = class AddFriendExpenseComponent {
    // friendN:string[];
    constructor(service, fb, router) {
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.FriendName = new Array();
        this.FriendExpense = new src_app_Shared_FriendExpensesData__WEBPACK_IMPORTED_MODULE_6__["FriendExpensesData"]();
        this.FriendExpense.friendUserExpense = new Array();
    }
    ngOnInit() {
        this.getCurrentUser();
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
                    this.member = new src_app_Shared_Members__WEBPACK_IMPORTED_MODULE_5__["Members"]();
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
            this.FriendName.push(this.user);
            this.getFriend(this.user.id);
        });
    }
    getFriend(id) {
        this.service.getFriend(id).subscribe(name => {
            name.forEach(element => {
                this.FriendName.push(element);
            });
            console.log(this.FriendName);
        });
    }
    Split(isChecked) {
        if (isChecked == "equally") {
            let K = 0;
            this.profileForm.get('MembersExpense').value.forEach(element => {
                K++;
            });
            this.profileForm.get('MembersExpense').value.forEach(element => {
                element.Price = this.profileForm.get('Cost').value / K;
            });
            this.a = this.profileForm.get('MembersExpense').value;
            this.profileForm.setControl('MembersExpense', this.setExistingPrice(this.a));
        }
        else {
            this.profileForm.get('MembersExpense').value.forEach(element => {
                element.Price = "";
            });
            this.a = this.profileForm.get('MembersExpense').value;
            this.profileForm.setControl('MembersExpense', this.setExistingPrice(this.a));
        }
    }
    setExistingPrice(priceSet) {
        const formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        priceSet.forEach(element => {
            formArray.push(this.fb.group({
                Name: element.Name,
                Price: element.Price
            }));
        });
        return formArray;
    }
    Back() {
        this.router.navigate(['']);
    }
};
AddFriendExpenseComponent.ctorParameters = () => [
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Shared_Friend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Friend */ "./src/app/Shared/Friend.ts");






let AddFriendComponent = class AddFriendComponent {
    constructor(service, fb, router) {
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.FormArray = [];
        this.FriendName = [];
        this.frnd = new src_app_Shared_Friend__WEBPACK_IMPORTED_MODULE_5__["Friend"]();
    }
    ngOnInit() {
        this.getCurrentUser();
        this.profileForm = this.fb.group({
            Friends: this.fb.array([
                this.addFriendsGroup()
            ])
        });
    }
    addFriendsGroup() {
        return this.fb.group({
            UserName: ['']
        });
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
        this.service.getFriend(id).subscribe(res => {
            res.forEach(element => {
                this.FriendName.push(element.id);
            });
            // console.log(this.memberID);
        });
    }
    AddFriends() {
        this.profileForm.get('Friends').push(this.addFriendsGroup());
    }
    submit() {
        this.profileForm.get('Friends').value.forEach(element => {
            this.user.forEach(u => {
                if (u.username == element.UserName) {
                    if (!this.FormArray.some(x => x == u.id) && !this.FriendName.some(x => x == u.id)) {
                        this.FormArray.push(u.id);
                    }
                }
            });
        });
        console.log(this.FormArray);
        this.frnd.yourId = this.currentUser.id;
        this.frnd.FriendId = this.FormArray;
        if (this.frnd.FriendId.length == 0) {
            alert("enter valid details");
        }
        else {
            this.service.AddFriend(this.frnd).subscribe(res => {
                this.router.navigate(['']);
            });
        }
    }
};
AddFriendComponent.ctorParameters = () => [
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddFriendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-friend',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-friend.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-friend/add-friend.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-friend.component.css */ "./src/app/user/add-friend/add-friend.component.css")).default]
    })
], AddFriendComponent);

//   onChange(id:string, isChecked: boolean) {
//     if(isChecked) {
//       this.FormArray.push(id);
//     } else {
//       let index = this.FormArray.indexOf(id);
//       this.FormArray.splice(index,1);
//     }
// }


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
/* harmony default export */ __webpack_exports__["default"] = ("/* .left, .right {\r\n    width:50%;\r\n\r\n}\r\n.full{\r\n    width:100%;\r\n} */\r\n.navbar{\r\n    justify-content: space-between;\r\n}\r\n.span{\r\n    padding-right:1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaG93LWRldGFpbHMvc2hvdy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0g7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hvdy1kZXRhaWxzL3Nob3ctZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmxlZnQsIC5yaWdodCB7XHJcbiAgICB3aWR0aDo1MCU7XHJcblxyXG59XHJcbi5mdWxse1xyXG4gICAgd2lkdGg6MTAwJTtcclxufSAqL1xyXG4ubmF2YmFye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5zcGFue1xyXG4gICAgcGFkZGluZy1yaWdodDoxcmVtO1xyXG59Il19 */");

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
    }
    ngOnInit() {
        this.getCurrentUser();
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
        this.service.getGroupsofUser(id).subscribe(name => {
            this.grpName = name;
            // this.createrID=this.grpName[0].creatorid;
        });
    }
    getFriendExpense(id) {
        this.service.getFriendExpense(id).subscribe(name => this.FriendBill = name);
    }
    AddFriend() {
        this.router.navigate(['AddFriend']);
    }
    AddGroup() {
        this.router.navigate(['Groups']);
    }
    AddFriendExpense() {
        this.router.navigate(['AddFriendExpense']);
    }
    FriendDashBoard() {
        this.router.navigate(['FriendDashboard']);
    }
    AddMembers(id) {
        this.router.navigate(['./Groups/AddMembers', id]);
    }
    AddGroupExpense(id) {
        this.router.navigate(['./Groups/GroupExpense']);
    }
    NavigateToGroupDashboard(id) {
        this.router.navigate(['./Groups/GroupDashboard', id]);
    }
    Settlement() {
        this.router.navigate(['Settlement']);
    }
    Members(id) {
        this.router.navigate(['./Groups/ShowMembers', id]);
    }
    Activity() {
        this.router.navigate(['Activity']);
    }
    UnFriend(id) {
        // alert(id);
        // debugger;
        this.service.Unfriend(this.user.id, id).subscribe((data) => {
            console.log(data);
            this.FriendName.splice;
            this.ngOnInit();
        }),
            err => {
                console.log("Error");
            };
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ShowFriendDetailComponent = class ShowFriendDetailComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.FriendBill = [];
    }
    ngOnInit() {
        this.getCurrentUser();
    }
    getCurrentUser() {
        this.service.username().subscribe(u => {
            this.user = u;
            this.getFriendExpense(this.user.id);
        });
    }
    getFriendExpense(id) {
        this.service.getFriendExpense(id).subscribe(name => {
            name.forEach(element => {
                if (!(element.name == (this.user.name))) {
                    this.FriendBill.push(element);
                }
            });
        });
    }
    Back() {
        this.router.navigate(['']);
    }
};
ShowFriendDetailComponent.ctorParameters = () => [
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
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
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/user/activity/activity.component.ts");








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
    },
    {
        path: 'Activity',
        component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_7__["ActivityComponent"]
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
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/user/activity/activity.component.ts");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material/material.module */ "./src/app/material/material.module.ts");












let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_4__["AddFriendComponent"], _add_friend_expense_add_friend_expense_component__WEBPACK_IMPORTED_MODULE_5__["AddFriendExpenseComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__["EditUserComponent"], _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_7__["ShowDetailsComponent"], _show_friend_detail_show_friend_detail_component__WEBPACK_IMPORTED_MODULE_8__["ShowFriendDetailComponent"], _activity_activity_component__WEBPACK_IMPORTED_MODULE_10__["ActivityComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            src_app_material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"]
        ]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map