(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/add-group-expense/add-group-expense.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/add-group-expense/add-group-expense.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-horizontal\">\n    <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">Add Friend Expense</div>\n            <div class=\"panel-body\">            \n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"panel-body\">\n        <div class=\"form-group\">\n                <label>\n            Cost:\n            <input type=\"number\" formControlName=\"Cost\" class=\"form-control\">\n            </label>\n        </div>\n        <div class=\"form-group\">\n                <label>\n                Description:\n                <input type=\"text\" formControlName=\"Description\" class=\"form-control\">\n                </label>\n        </div>\n        <div class=\"form-group\">\n                <label>\n                Date:\n                <input type=\"date\" formControlName=\"Date\" class=\"form-control\">\n                </label>\n        </div>\n        <div class=\"form-group\">\n            <label >\n              Group Name:\n              <select (change)=\"onChange($event.target.value)\" class = \"form-control\"  formControlName=\"GroupName\">\n                    <option value=\"\">Choose your Group</option>\n                    <option *ngFor = \"let grp of grpName\" [(ngValue)]=\"grp\"  [value]=\"grp.id\">{{grp.groupName}}</option>\n                 </select>\n            </label>\n        </div>\n        \n        <div class=\"well\">\n            <div formArrayName=\"MembersExpense\" *ngFor=\"let m of profileForm.get('MembersExpense').controls;let i=index\">\n                <div [formGroupName]=\"i\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                    <label>\n                        Name\n                    </label>\n                    <!-- <input type =\"text\"  formControlName=\"Name\" > -->\n                    <select class=\"form-control\" formControlName=\"Name\">\n                        <option value=\"\">Choose User</option>\n                        <option *ngFor = \"let user of allUser\" [(ngValue)]=\"user\"  [value]=\"user.memberName\">{{user.memberName}}</option>\n                    </select>\n                    </div>\n                    <div class=\"col-sm-6\">\n                    <label>\n                        Price\n                    </label>                                \n                        <input class=\"form-control\" type=\"number\"  formControlName=\"Price\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-group\"><br>\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"AddMembers()\">Add Members</button>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"radio-inline\">\n                Split:\n            </label>\n            \n            <label class=\"radio-inline\">\n            <input type=\"radio\" formControlName=\"Split\" value=\"equally\" (click)=\"Split($event.target.value)\">Equally\n            </label>\n            <label class=\"radio-inline\">\n            <input type=\"radio\" formControlName=\"Split\" value=\"Unequally\" (click)=\"Split($event.target.value)\">Unequally\n            </label>\n        </div> \n             \n            <div class=\"form-group\">\n                <label>\n                    Paid by:\n                </label>\n                <div *ngFor=\"let name of allUser\">\n                    <input type=\"radio\" formControlName=\"Paidby\" [value]=\"name.userId\">{{name.memberName}}\n                </div>\n            </div>    \n    <div class=\"form-group\">\n        <button type=\"btn btn-success\" [disabled]=\"!profileForm.valid\">Submit</button>\n    </div>\n    </div>\n</form>\n</div>\n</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/add-group/add-group.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/add-group/add-group.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>add-group works</p> -->\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <label>\n                Name:\n                <input type=\"text\" formControlName=\"Name\" placeholder=\"Enter the Group Name\">\n                </label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n                <label>\n                Date:\n                <input type=\"date\" formControlName=\"Date\">\n                </label>\n        </div>\n        <div class=\"form-group\">\n                <label>\n                    Category:\n                </label><br>\n                <div *ngFor=\"let c of Categories\">\n                    <input type=\"radio\" formControlName=\"Category\" value={{c.categoryId}}>{{c.name}}<br>\n                </div>  \n        </div>\n        <div class=\"form-group\">\n                <button type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\n            </div>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/add-members/add-members.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/add-members/add-members.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>add-members works</p>\n\n<div class=\"well\">\n    <div [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n        <div formArrayName=\"Members\" *ngFor=\"let m of profileForm.get('Members').controls;let i=index\">\n                <div [formGroupName]=\"i\">\n                        <div class=\"form-group\">\n                                <label>\n                                    Name:\n                                </label>\n                                <input type=\"text\" formControlName=\"Name\">\n                            </div>\n                </div>\n            </div>\n        <button type=\"button\" (click)=\"AddFriends()\">Add Friends</button>\n    </div>\n</div>\n<div>\n    <button class=\"success\" (click)=\"submit()\">Add</button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/edit-expense/edit-expense.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/edit-expense/edit-expense.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>edit-expense works</p>\n\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"panel-body\">\n        <div class=\"form-group\">\n            <label>\n            Cost:\n            <input type=\"number\" formControlName=\"Cost\">\n            </label>\n        </div>\n        <div class=\"form-group\">\n                <label>\n                Description:\n                <input type=\"text\" formControlName=\"Description\">\n                </label>\n        </div>\n        <div class=\"form-group\">\n                <label>\n                Date:\n                <input type=\"date\" formControlName=\"Date\">\n                </label>\n        </div>\n        <div class=\"form-group\">\n            <label>\n                Split:\n            </label>\n            <input type=\"radio\" formControlName=\"Split\" value=\"equally\" (click)=\"Split($event.target.value)\">Equally\n            <input type=\"radio\" formControlName=\"Split\" value=\"Unequally\" (click)=\"Split($event.target.value)\">Unequally\n        </div> \n        <!-- <div class=\"well\">\n            <div formArrayName=\"MembersExpense\" *ngFor=\"let m of profileForm.get('MembersExpense').controls;let i=index\">\n                <div [formGroupName]=\"i\">\n                    <label>\n                        Name\n                    </label>\n                        <input type =\"text\"  formControlName=\"Name\" >\n                        <label>\n                            Price\n                        </label>            \n                        <input type=\"number\"  formControlName=\"Price\">\n                </div>\n            </div>\n            <button type=\"button\" (click)=\"AddMembers()\">Add Members</button>\n            </div> -->\n               \n        <div class=\"well\">\n            <div formArrayName=\"MembersExpense\" *ngFor=\"let m of profileForm.get('MembersExpense').controls;let i=index\">\n                <div [formGroupName]=\"i\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                    <label>\n                        Name\n                    </label>\n                    <!-- <input type =\"text\"  formControlName=\"Name\" > -->\n                    <select class=\"form-control\" formControlName=\"Name\">\n                        <option value=\"\">Choose User</option>\n                        <option *ngFor = \"let user of allUser\" [(ngValue)]=\"user\"  [value]=\"user.userId\">{{user.memberName}}</option>\n                    </select>\n                    </div>\n                    <div class=\"col-sm-4\">\n                    <label>\n                        Price\n                    </label>                                \n                        <input class=\"form-control\" type=\"number\"  formControlName=\"Price\">\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <label>\n                           Delete\n                        </label><br>                                \n                           <button class=\"btn btn-primary\" type=\"button\" (click)=\"deleteMembers(i)\">Delete</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-group\"><br>\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"AddMembers()\">Add Members</button>\n            </div>\n        </div>\n            <!-- <div class=\"form-group\">\n            <label>\n              GroupName:\n              <select id=\"GroupName\" (change)=\"onChange($event.target.value)\" class = \"form-control\"  formControlName=\"GroupName\">\n                    <option value=\"\">Choose your Group</option>\n                    <option *ngFor = \"let grp of grpName\" [(ngValue)]=\"grp\"  [value]=\"grp.id\">{{grp.groupName}}</option>\n                 </select>\n            </label>\n        </div>   -->\n            <div class=\"form-group\">\n                <label>\n                    Paid by:\n                </label>\n                <div *ngFor=\"let name of allUser\">\n                    <input type=\"radio\" formControlName=\"Paidby\" [value]=\"name.userId\">{{name.memberName}}\n                </div>\n            </div>\n    </div>\n    <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\n    </div>\n</form>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/group-dashboard/group-dashboard.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/group-dashboard/group-dashboard.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>group-dashboard works!</p> -->\n<!-- <p>GroupName:{{group.groupName}}</p> -->\n<!-- <p>Added by:{{group.createrExpense}}</p>\n<p>Category:{{group.categoryName}}</p> -->\n<!-- <p>Total Amount:{{group.totalAmount}}</p> -->\n<!-- <p>Date:{{group.date}}</p> -->\n<!-- <p>Paid by:{{group.expensePaidBy}}</p> -->\n<!-- </div> -->\n<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\" style=\"font-size:200%;\">{{group.groupName}}</div>\n    <div class=\"panel-body\">\n        <p>Added by:{{group.createrGroupName}}</p>\n        <p>Category:{{group.categoryName}}</p>\n        <p>Date:{{group.date}}</p>\n     \n        <div *ngFor=\"let item of a | keyvalue\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\" style=\"font-size:100%;\">{{group.groupName}}\n                        <!-- <button (click)=\"toggle(item.key)\" id=\"bt\" style=\"float: right;\">\n                                {{buttonName}}\n                            </button> -->\n                </div>\n                <!-- <ng-container *ngIf=\"group.showGroupExpense\"> -->\n                <div class=\"panel-body\">\n                        <button class=\"btn btn-success friend-btn\" (click)=\"Edit(item.key)\" id=\"bt\" style=\"float: right;\">\n                                Edit\n                            </button>\n                            <button class=\"btn btn-success friend-btn\" (click)=\"DeleteExpense(item.key)\" id=\"bt\" style=\"float: right;\">\n                                Delete\n                            </button>           \n                    <table class=\"table\">\n                        <tr>\n                            <th>Name</th>\n                            <th>Amount</th>\n                            <th>Description</th>\n                            <th>Paid by</th>\n                        </tr>\n                     <tr *ngFor=\"let i of item.value\">                                \n                         <td>{{i?.expenseUserName}}</td>\n                         <td>{{i?.splitAmount}}</td>\n                         <td>{{i.description}}</td>\n                         <td>{{i.expensePaidBy}}</td>\n                    </tr>                                       \n                    </table>  \n                </div>\n            <!-- </ng-container> -->\n            </div>\n        </div>\n       \n        \n</div>\n</div>\n<div class=\"form-group\">\n\n    <button class=\"btn btn-success friend-btn\" (click)=\"Delete()\">Delete</button>\n    <button class=\"btn btn-success friend-btn\" (click)=\"Back()\">Back</button>\n    </div>\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/showmembers/showmembers.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/showmembers/showmembers.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>showmembers works!</p>\n\n<table class=\"table\">\n    <tr>\n        <th>Name</th>\n        <th>Created Date</th>\n    </tr>\n    <tr *ngFor=\"let m of members\">\n        <td>{{m.memberName}}</td>\n        <td>{{m.createdDate}}</td>\n    </tr>\n</table>\n\n");

/***/ }),

/***/ "./src/app/Shared/Group.ts":
/*!*********************************!*\
  !*** ./src/app/Shared/Group.ts ***!
  \*********************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Group {
}


/***/ }),

/***/ "./src/app/Shared/GroupExpenseAC.ts":
/*!******************************************!*\
  !*** ./src/app/Shared/GroupExpenseAC.ts ***!
  \******************************************/
/*! exports provided: GroupExpenseAC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupExpenseAC", function() { return GroupExpenseAC; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GroupExpenseAC {
    constructor() {
        this.showGroupExpense = false;
    }
}


/***/ }),

/***/ "./src/app/Shared/GroupExpenseData.ts":
/*!********************************************!*\
  !*** ./src/app/Shared/GroupExpenseData.ts ***!
  \********************************************/
/*! exports provided: GroupExpenseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupExpenseData", function() { return GroupExpenseData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GroupExpenseData {
}


/***/ }),

/***/ "./src/app/Shared/GroupMembersAC.ts":
/*!******************************************!*\
  !*** ./src/app/Shared/GroupMembersAC.ts ***!
  \******************************************/
/*! exports provided: GroupMembersAC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMembersAC", function() { return GroupMembersAC; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GroupMembersAC {
}


/***/ }),

/***/ "./src/app/group/add-group-expense/add-group-expense.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/group/add-group-expense/add-group-expense.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2FkZC1ncm91cC1leHBlbnNlL2FkZC1ncm91cC1leHBlbnNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/group/add-group-expense/add-group-expense.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/group/add-group-expense/add-group-expense.component.ts ***!
  \************************************************************************/
/*! exports provided: AddGroupExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupExpenseComponent", function() { return AddGroupExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/user-service.service */ "./src/app/user/user-service.service.ts");
/* harmony import */ var _Shared_GroupExpenseData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/GroupExpenseData */ "./src/app/Shared/GroupExpenseData.ts");
/* harmony import */ var _Shared_Members__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Shared/Members */ "./src/app/Shared/Members.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let AddGroupExpenseComponent = class AddGroupExpenseComponent {
    constructor(service, fb, _location, router) {
        this.service = service;
        this.fb = fb;
        this._location = _location;
        this.router = router;
        this.allUser = [];
        this.groupExpense = new _Shared_GroupExpenseData__WEBPACK_IMPORTED_MODULE_4__["GroupExpenseData"]();
        this.groupExpense.groupUsersExpenses = new Array();
    }
    ngOnInit() {
        this.getCurrentUser();
        this.profileForm = this.fb.group({
            Cost: [''],
            Description: [''],
            Date: [''],
            Split: [''],
            GroupName: [''],
            Paidby: [''],
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
        // console.log(this.profileForm.get('MembersExpense').value)
    }
    deleteMembers(index) {
        this.profileForm.get('MembersExpense').removeAt(index);
    }
    getCurrentUser() {
        this.service.username().subscribe(u => {
            this.user = u;
            this.getGroups(this.user.id);
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
    onSubmit() {
        this.groupExpense.cost = this.profileForm.get('Cost').value;
        this.groupExpense.createrId = this.user.id;
        this.groupExpense.date = this.profileForm.get('Date').value;
        this.groupExpense.description = this.profileForm.get('Description').value;
        this.groupExpense.grpId = this.ID;
        this.groupExpense.paidbyId = this.profileForm.get('Paidby').value;
        this.groupExpense.split = this.profileForm.get('Split').value;
        this.profileForm.get('MembersExpense').value.forEach(element => {
            this.allUser.forEach(user => {
                if (user.memberName == element.Name) {
                    this.member = new _Shared_Members__WEBPACK_IMPORTED_MODULE_5__["Members"]();
                    this.member.Amount = element.Price;
                    this.member.userId = user.userId;
                    this.groupExpense.groupUsersExpenses.push(this.member);
                }
            });
        });
        this.service.createExpense(this.groupExpense).subscribe(res => {
            this._location.back();
        });
        // console.log(this.profileForm.get('MembersExpense').value)
    }
    onChange(id) {
        this.ID = id;
        this.allUser = new Array();
        this.service.getallMembers(id).subscribe(res => {
            res.forEach(element => {
                this.allUser.push(element);
            });
            console.log(this.allUser);
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
AddGroupExpenseComponent.ctorParameters = () => [
    { type: _user_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AddGroupExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-group-expense',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-group-expense.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/add-group-expense/add-group-expense.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-group-expense.component.css */ "./src/app/group/add-group-expense/add-group-expense.component.css")).default]
    })
], AddGroupExpenseComponent);



/***/ }),

/***/ "./src/app/group/add-group/add-group.component.css":
/*!*********************************************************!*\
  !*** ./src/app/group/add-group/add-group.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2FkZC1ncm91cC9hZGQtZ3JvdXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/group/add-group/add-group.component.ts":
/*!********************************************************!*\
  !*** ./src/app/group/add-group/add-group.component.ts ***!
  \********************************************************/
/*! exports provided: AddGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function() { return AddGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/user-service.service */ "./src/app/user/user-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Shared_Group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/Group */ "./src/app/Shared/Group.ts");





let AddGroupComponent = class AddGroupComponent {
    constructor(service, fb) {
        this.service = service;
        this.fb = fb;
        this.group = new _Shared_Group__WEBPACK_IMPORTED_MODULE_4__["Group"]();
    }
    ngOnInit() {
        this.getCategory();
        this.getCurrentUser();
        this.profileForm = this.fb.group({
            Name: [''],
            Date: [''],
            Category: ['']
        });
    }
    onSubmit() {
        this.group.categoryId = this.profileForm.get('Category').value;
        this.group.createdDate = this.profileForm.get('Date').value;
        this.group.debt = false;
        this.group.groupName = this.profileForm.get('Name').value;
        this.group.creatorId = this.user.id;
        this.service.createGroups(this.group).subscribe(res => {
            console.log(res);
        });
        //console.log(this.profileForm.get('Category').value);
    }
    getCategory() {
        this.service.getCategory().subscribe(res => {
            this.Categories = res;
        });
    }
    getCurrentUser() {
        this.service.username().subscribe(u => {
            this.user = u;
        });
    }
};
AddGroupComponent.ctorParameters = () => [
    { type: _user_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
AddGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/add-group/add-group.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-group.component.css */ "./src/app/group/add-group/add-group.component.css")).default]
    })
], AddGroupComponent);



/***/ }),

/***/ "./src/app/group/add-members/add-members.component.css":
/*!*************************************************************!*\
  !*** ./src/app/group/add-members/add-members.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2FkZC1tZW1iZXJzL2FkZC1tZW1iZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/group/add-members/add-members.component.ts":
/*!************************************************************!*\
  !*** ./src/app/group/add-members/add-members.component.ts ***!
  \************************************************************/
/*! exports provided: AddMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersComponent", function() { return AddMembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_user_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/user-service.service */ "./src/app/user/user-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Shared_GroupMembersAC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/GroupMembersAC */ "./src/app/Shared/GroupMembersAC.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let AddMembersComponent = class AddMembersComponent {
    constructor(service, fb, router, route, _location) {
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.FormArray = [];
        this.Grp = [];
        this.allmembers = [];
        this.memberID = [];
        this.members = new src_app_Shared_GroupMembersAC__WEBPACK_IMPORTED_MODULE_5__["GroupMembersAC"]();
        this.id = +this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.getAllUser();
        this.profileForm = this.fb.group({
            Members: this.fb.array([
                this.addFriendsGroup()
            ])
        });
    }
    addFriendsGroup() {
        return this.fb.group({
            Name: ['']
        });
    }
    AddFriends() {
        this.profileForm.get('Members').push(this.addFriendsGroup());
    }
    // getCurrentUser(): void{
    //   this.service.username().subscribe(u=>
    //     {
    //       this.currentUser=u;
    //       this.getAllUser();
    //       this.getAllMembers(this.id);
    //     });
    //   }
    getAllUser() {
        this.service.getAllUser().subscribe(u => {
            this.user = u;
            this.getAllMembers(this.id);
        });
    }
    getAllMembers(id) {
        this.service.getallMembers(id).subscribe(res => {
            res.forEach(element => {
                this.memberID.push(element.userId);
            });
            console.log(this.memberID);
        });
    }
    submit() {
        // console.log(this.profileForm.get('Members').value);
        this.profileForm.get('Members').value.forEach(element => {
            this.user.forEach(u => {
                if (element.Name == u.name) {
                    if (!this.FormArray.some(x => x == u.id) && !this.memberID.some(x => x == u.id)) {
                        this.FormArray.push(u.id);
                    }
                }
            });
        });
        // console.log(id);
        console.log(this.FormArray);
        this.members.grpid = this.id;
        this.members.userId = this.FormArray;
        if (this.members.userId.length == 0) {
            alert("enter valid details");
        }
        else {
            this.service.addGroupMembersList(this.members).subscribe(res => this._location.back());
        }
    }
};
AddMembersComponent.ctorParameters = () => [
    { type: src_app_user_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
AddMembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-members',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-members.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/add-members/add-members.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-members.component.css */ "./src/app/group/add-members/add-members.component.css")).default]
    })
], AddMembersComponent);



/***/ }),

/***/ "./src/app/group/edit-expense/edit-expense.component.css":
/*!***************************************************************!*\
  !*** ./src/app/group/edit-expense/edit-expense.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2VkaXQtZXhwZW5zZS9lZGl0LWV4cGVuc2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/group/edit-expense/edit-expense.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/group/edit-expense/edit-expense.component.ts ***!
  \**************************************************************/
/*! exports provided: EditExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditExpenseComponent", function() { return EditExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Shared_GroupExpenseData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/GroupExpenseData */ "./src/app/Shared/GroupExpenseData.ts");
/* harmony import */ var _user_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/user-service.service */ "./src/app/user/user-service.service.ts");
/* harmony import */ var _Shared_Members__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Shared/Members */ "./src/app/Shared/Members.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let EditExpenseComponent = class EditExpenseComponent {
    constructor(_location, route, fb, service, router) {
        this._location = _location;
        this.route = route;
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.details = new _Shared_GroupExpenseData__WEBPACK_IMPORTED_MODULE_4__["GroupExpenseData"]();
        this.allUser = [];
        this.NamePrice = [];
        this.expenseData = new _Shared_GroupExpenseData__WEBPACK_IMPORTED_MODULE_4__["GroupExpenseData"]();
        this.expenseData.groupUsersExpenses = new Array();
    }
    ngOnInit() {
        this.profileForm = this.fb.group({
            Cost: [''],
            Description: [''],
            Date: [''],
            Split: [''],
            Paidby: [''],
            GroupName: [''],
            MembersExpense: this.fb.array([
                this.addMembersFormGroup()
            ])
        });
        // this.expenseData.groupUsersExpenses=new Array<Members>();
        this.route.paramMap.subscribe(params => {
            this.ID = +params.get('id');
            if (this.ID) {
                this.getExpenseDetails(this.ID);
                //this.getCurrentUser();
            }
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
        // console.log(this.profileForm.get('MembersExpense').value)
    }
    deleteMembers(index) {
        this.profileForm.get('MembersExpense').removeAt(index);
    }
    getExpenseDetails(ID) {
        this.service.getExpenseDetailsId(ID).subscribe(res => {
            this.data = res;
            this.getCurrentUser();
            console.log(this.data);
            // this.edit(res);
        });
    }
    getCurrentUser() {
        this.service.username().subscribe(u => {
            this.user = u;
            this.getGroups(this.user.id);
        });
    }
    getGroups(id) {
        this.service.getGroupsofUser(id).subscribe(res => {
            this.grpName = res;
            // this.default=this.grpName.find(x=>x.id==this.data.grpId)
            this.edit(this.data);
            // console.log(this.default)
        });
    }
    edit(details) {
        console.log(details);
        this.profileForm.patchValue({
            Cost: details.cost,
            Description: details.description,
            Date: details.date,
            Split: details.split,
            Paidby: details.paidbyId
            // GroupName:new FormControl(d.id)
        });
        this.profileForm.controls['GroupName'].patchValue(this.data.grpId, { onlySelf: true });
        this.allUserGroup(this.data.grpId);
    }
    // Nameprice(array:any){
    //   this.NamePrice=new Array<NamePrice>();
    //   array.forEach(element => {
    //     this.NP=new NamePrice();        
    //    this.allUser.forEach(e => {
    //      if(e.userId==element.userId)
    //      {
    //        this.NP.Name=e.memberName;
    //        this.NP.Price=element.amount;
    //        this.NamePrice.push(this.NP);      
    //      }         
    //    });       
    //   });
    //   this.profileForm.setControl('MembersExpense',this.setExistingUser(this.data.groupUsersExpenses))
    //   console.log(this.NamePrice);
    // }
    // setExistingUser(array:any):FormArray
    // {
    //   const formArray=new FormArray([]);      
    //   array.forEach(element => {
    //     formArray.push(this.fb.group({
    //       Name:element.Name,
    //       Price:element.Price
    //     }));        
    //   });
    //   return formArray;
    // }
    allUserGroup(id) {
        this.allUser = new Array();
        this.service.getallMembers(id).subscribe(res => {
            res.forEach(element => {
                this.allUser.push(element);
            });
            console.log(this.allUser);
            this.profileForm.setControl('MembersExpense', this.setExistingUser(this.data.groupUsersExpenses));
            // this.Nameprice(this.data.groupUsersExpenses);        
        });
    }
    setExistingUser(array) {
        const formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        array.forEach(element => {
            formArray.push(this.fb.group({
                Name: element.userId,
                Price: element.amount
            }));
        });
        return formArray;
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
    onSubmit() {
        console.log(this.profileForm.value);
        this.expenseData.cost = this.profileForm.get('Cost').value;
        this.expenseData.description = this.profileForm.get('Description').value;
        this.expenseData.date = this.profileForm.get('Date').value;
        this.expenseData.grpId = this.profileForm.get('GroupName').value;
        this.expenseData.paidbyId = this.profileForm.get('Paidby').value;
        this.expenseData.split = this.profileForm.get('Split').value;
        this.expenseData.createrId = this.data.createrId;
        this.expenseData.id = this.ID;
        this.profileForm.get('MembersExpense').value.forEach(element => {
            this.member = new _Shared_Members__WEBPACK_IMPORTED_MODULE_6__["Members"]();
            this.member.userId = element.Name;
            this.member.Amount = element.Price;
            this.expenseData.groupUsersExpenses.push(this.member);
        });
        console.log(this.expenseData);
        this.service.EditExpense(this.ID, this.expenseData).subscribe(res => {
            this._location.back();
        });
    }
};
EditExpenseComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-expense',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-expense.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/edit-expense/edit-expense.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-expense.component.css */ "./src/app/group/edit-expense/edit-expense.component.css")).default]
    })
], EditExpenseComponent);



/***/ }),

/***/ "./src/app/group/group-dashboard/group-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/group/group-dashboard/group-dashboard.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2dyb3VwLWRhc2hib2FyZC9ncm91cC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/group/group-dashboard/group-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/group/group-dashboard/group-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: GroupDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDashboardComponent", function() { return GroupDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/user-service.service */ "./src/app/user/user-service.service.ts");
/* harmony import */ var _Shared_GroupExpenseAC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/GroupExpenseAC */ "./src/app/Shared/GroupExpenseAC.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let GroupDashboardComponent = class GroupDashboardComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.buttonName = 'Show';
        this.show = false;
        this.id = +this.route.snapshot.paramMap.get('id');
        // this.getGroups(this.id);
        this.group = new _Shared_GroupExpenseAC__WEBPACK_IMPORTED_MODULE_3__["GroupExpenseAC"]();
    }
    ngOnInit() {
        this.GetGroupId(this.id);
        this.getcurrentUser();
    }
    GetGroupId(id) {
        this.service.GetGroupId(id).subscribe(res => {
            // this.groupExpense=res;
            this.a = res;
            if (Object.keys(this.a)) {
                let key = Object.keys(this.a)[0];
                this.group.groupName = this.a[key][0].groupName;
                this.group.createrExpense = this.a[key][0].createrExpense;
                this.group.categoryName = this.a[key][0].categoryName;
                this.group.date = this.a[key][0].date;
                //this.group.createrExpense=this.groupExpense[0].createrExpense;
                this.group.createrGroupName = this.a[key][0].createrGroupName;
            }
            // Use `key` and `value`
            console.log(this.a);
            // console.log(this.a['expId'])
            // this.group=this.a['1015'][0].groupName;
            // console.log(this.group)
            // console.log(this.group);
            // this.group.groupName=this.groupExpense[0].groupName
            // this.group.createrExpense=this.groupExpense[0].createrExpense;
            // this.group.categoryName=this.groupExpense[0].categoryName;
            // this.group.totalAmount=this.groupExpense[0].totalAmount;
            // this.group.date=this.groupExpense[0].date;
            // this.group.expensePaidBy=this.groupExpense[0].expensePaidBy;
            // this.createrGroupName=this.groupExpense[0].createrGroupName;      
        });
    }
    getcurrentUser() {
        this.service.username().subscribe(res => {
            this.user = res;
        });
    }
    // toggle(id:number) {
    //   if(item.showItem)  
    //   item.showItem = false;
    //   else
    //   item.showItem= true;
    // }
    Delete() {
        alert("deleted the Group Expense");
        const id = +this.route.snapshot.paramMap.get('id');
        this.service.Delete(id).subscribe(res => {
            this.router.navigate(['']);
        });
    }
    Edit(id) {
        this.router.navigate(['Groups/Edit', id]);
    }
    Back() {
        this.router.navigate(['']);
    }
    DeleteExpense(id) {
        alert(id);
        this.service.deleteExpense(id).subscribe(res => {
            this.ngOnInit();
        });
    }
};
GroupDashboardComponent.ctorParameters = () => [
    { type: _user_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GroupDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/group-dashboard/group-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-dashboard.component.css */ "./src/app/group/group-dashboard/group-dashboard.component.css")).default]
    })
], GroupDashboardComponent);



/***/ }),

/***/ "./src/app/group/group-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/group/group-routing.module.ts ***!
  \***********************************************/
/*! exports provided: GroupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupRoutingModule", function() { return GroupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-group/add-group.component */ "./src/app/group/add-group/add-group.component.ts");
/* harmony import */ var _add_members_add_members_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-members/add-members.component */ "./src/app/group/add-members/add-members.component.ts");
/* harmony import */ var _add_group_expense_add_group_expense_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-group-expense/add-group-expense.component */ "./src/app/group/add-group-expense/add-group-expense.component.ts");
/* harmony import */ var _group_dashboard_group_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-dashboard/group-dashboard.component */ "./src/app/group/group-dashboard/group-dashboard.component.ts");
/* harmony import */ var _showmembers_showmembers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./showmembers/showmembers.component */ "./src/app/group/showmembers/showmembers.component.ts");
/* harmony import */ var _edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-expense/edit-expense.component */ "./src/app/group/edit-expense/edit-expense.component.ts");









const routes = [
    {
        path: '',
        component: _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_3__["AddGroupComponent"]
    },
    {
        path: 'AddMembers/:id',
        component: _add_members_add_members_component__WEBPACK_IMPORTED_MODULE_4__["AddMembersComponent"]
    },
    {
        path: 'GroupExpense',
        component: _add_group_expense_add_group_expense_component__WEBPACK_IMPORTED_MODULE_5__["AddGroupExpenseComponent"]
    },
    {
        path: 'GroupDashboard/:id',
        component: _group_dashboard_group_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["GroupDashboardComponent"]
    },
    {
        path: 'ShowMembers/:id',
        component: _showmembers_showmembers_component__WEBPACK_IMPORTED_MODULE_7__["ShowmembersComponent"]
    },
    {
        path: 'Edit/:id',
        component: _edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_8__["EditExpenseComponent"]
    }
];
let GroupRoutingModule = class GroupRoutingModule {
};
GroupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GroupRoutingModule);



/***/ }),

/***/ "./src/app/group/group.module.ts":
/*!***************************************!*\
  !*** ./src/app/group/group.module.ts ***!
  \***************************************/
/*! exports provided: GroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupModule", function() { return GroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _group_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-routing.module */ "./src/app/group/group-routing.module.ts");
/* harmony import */ var _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-group/add-group.component */ "./src/app/group/add-group/add-group.component.ts");
/* harmony import */ var _add_group_expense_add_group_expense_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-group-expense/add-group-expense.component */ "./src/app/group/add-group-expense/add-group-expense.component.ts");
/* harmony import */ var _add_members_add_members_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-members/add-members.component */ "./src/app/group/add-members/add-members.component.ts");
/* harmony import */ var _group_dashboard_group_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group-dashboard/group-dashboard.component */ "./src/app/group/group-dashboard/group-dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _showmembers_showmembers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./showmembers/showmembers.component */ "./src/app/group/showmembers/showmembers.component.ts");
/* harmony import */ var _edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-expense/edit-expense.component */ "./src/app/group/edit-expense/edit-expense.component.ts");











let GroupModule = class GroupModule {
};
GroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_4__["AddGroupComponent"], _add_group_expense_add_group_expense_component__WEBPACK_IMPORTED_MODULE_5__["AddGroupExpenseComponent"], _add_members_add_members_component__WEBPACK_IMPORTED_MODULE_6__["AddMembersComponent"], _group_dashboard_group_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["GroupDashboardComponent"], _showmembers_showmembers_component__WEBPACK_IMPORTED_MODULE_9__["ShowmembersComponent"], _edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_10__["EditExpenseComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _group_routing_module__WEBPACK_IMPORTED_MODULE_3__["GroupRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]
    })
], GroupModule);



/***/ }),

/***/ "./src/app/group/showmembers/showmembers.component.css":
/*!*************************************************************!*\
  !*** ./src/app/group/showmembers/showmembers.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL3Nob3dtZW1iZXJzL3Nob3dtZW1iZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/group/showmembers/showmembers.component.ts":
/*!************************************************************!*\
  !*** ./src/app/group/showmembers/showmembers.component.ts ***!
  \************************************************************/
/*! exports provided: ShowmembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowmembersComponent", function() { return ShowmembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/user-service.service */ "./src/app/user/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ShowmembersComponent = class ShowmembersComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.members = [];
    }
    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getallMembers(this.id);
    }
    getallMembers(id) {
        this.service.getallMembers(id).subscribe(res => {
            this.members = res;
            console.log(this.members);
        });
    }
};
ShowmembersComponent.ctorParameters = () => [
    { type: _user_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ShowmembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showmembers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./showmembers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/showmembers/showmembers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./showmembers.component.css */ "./src/app/group/showmembers/showmembers.component.css")).default]
    })
], ShowmembersComponent);



/***/ })

}]);
//# sourceMappingURL=group-group-module.js.map