(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/add-group-expense/add-group-expense.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/add-group-expense/add-group-expense.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>add-group-expense works!</p>\n\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"panel-body\">\n        <div class=\"form-group\">\n            <label>\n            Cost:\n            <input type=\"number\" formControlName=\"Cost\">\n            </label>\n        </div>\n        <div class=\"form-group\">\n                <label>\n                Description:\n                <input type=\"text\" formControlName=\"Description\">\n                </label>\n        </div>\n        <div class=\"form-group\">\n                <label>\n                Date:\n                <input type=\"date\" formControlName=\"Date\">\n                </label>\n        </div>\n        <div class=\"form-group\">\n            <label>\n                Split:\n            </label>\n            <input type=\"radio\" formControlName=\"Split\" value=\"equally\">Equally\n            <input type=\"radio\" formControlName=\"Split\" value=\"Unequally\">Unequally\n        </div> \n        <div class=\"well\">\n            <div formArrayName=\"MembersExpense\" *ngFor=\"let m of profileForm.get('MembersExpense').controls;let i=index\">\n                <div [formGroupName]=\"i\">\n                    <label>\n                        Name\n                    </label>\n                        <input type =\"text\"  formControlName=\"Name\" >\n                        <label>\n                            Price\n                        </label>            \n                        <input type=\"number\"  formControlName=\"Price\">\n                </div>\n            </div>\n            <button type=\"button\" (click)=\"AddMembers()\">Add Members</button>\n            </div>\n            <div class=\"form-group\">\n            <label>\n              GroupName:\n              <select (change)=\"onChange($event.target.value)\" class = \"form-control\"  formControlName=\"GroupName\">\n                    <option value=\"\">Choose your Group</option>\n                    <option *ngFor = \"let grp of grpName\" [(ngValue)]=\"grp\"  [value]=\"grp.id\">{{grp.groupName}}</option>\n                 </select>\n            </label>\n        </div>  \n            <div class=\"form-group\">\n                <label>\n                    Paid by:\n                </label>\n                <div *ngFor=\"let name of allUser\">\n                    <input type=\"radio\" formControlName=\"Paidby\" [value]=\"name.userId\">{{name.memberName}}\n                </div>\n            </div>\n    </div>\n    <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\n    </div>\n</form>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/group-dashboard/group-dashboard.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/group-dashboard/group-dashboard.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>group-dashboard works!</p>\n<p>GroupName:{{group.groupName}}</p>\n<p>Added by:{{group.createrExpense}}</p>\n<p>Category:{{group.categoryName}}</p>\n<p>Total Amount Paid:{{group.totalAmount}}</p>\n<p>Date:{{group.date}}</p>\n<p>Paid by:{{group.expensePaidBy}}</p>\n\n<table class=\"table\">\n    <tr>\n        <th>Name</th>\n        <th>Amount</th>\n    </tr>\n    <tr tr *ngFor=\"let bill of groupExpense\">\n        <td>{{bill?.expenseUserName}}</td>\n        <td>{{bill?.splitAmount}}</td>\n    </tr>\n</table>\n\n\n\n\n");

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







let AddGroupExpenseComponent = class AddGroupExpenseComponent {
    constructor(service, fb, _location) {
        this.service = service;
        this.fb = fb;
        this._location = _location;
        this.allUser = [];
        this.getCurrentUser();
        this.groupExpense = new _Shared_GroupExpenseData__WEBPACK_IMPORTED_MODULE_4__["GroupExpenseData"]();
        this.groupExpense.GroupUsersExpenses = new Array();
    }
    ngOnInit() {
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
        this.service.getallGroups(id).subscribe(res => {
            this.grpName = res;
        });
    }
    onSubmit() {
        // console.log(this.profileForm.value);
        // console.log(this.profileForm.get('MembersExpense').value);
        // this.profileForm.get('MembersExpense').value.forEach(element => {
        //   console.log(element.Name)
        // });
        this.groupExpense.Cost = this.profileForm.get('Cost').value;
        this.groupExpense.CreaterId = this.user.id;
        this.groupExpense.Date = this.profileForm.get('Date').value;
        this.groupExpense.Description = this.profileForm.get('Description').value;
        this.groupExpense.GrpId = this.ID;
        this.groupExpense.PaidbyId = this.profileForm.get('Paidby').value;
        this.groupExpense.Split = this.profileForm.get('Split').value;
        this.profileForm.get('MembersExpense').value.forEach(element => {
            this.allUser.forEach(user => {
                if (user.memberName == element.Name) {
                    this.member = new _Shared_Members__WEBPACK_IMPORTED_MODULE_5__["Members"]();
                    this.member.Amount = element.Price;
                    this.member.userId = user.userId;
                    this.groupExpense.GroupUsersExpenses.push(this.member);
                }
            });
        });
        debugger;
        this.service.createExpense(this.groupExpense).subscribe(res => {
            this._location.back();
        });
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
};
AddGroupExpenseComponent.ctorParameters = () => [
    { type: _user_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
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
        this.getCategory();
        this.group = new _Shared_Group__WEBPACK_IMPORTED_MODULE_4__["Group"]();
        this.getCurrentUser();
    }
    ngOnInit() {
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
        this.getAllUser();
        this.members = new src_app_Shared_GroupMembersAC__WEBPACK_IMPORTED_MODULE_5__["GroupMembersAC"]();
        this.id = +this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
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
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.GetGroupId(this.id);
        this.group = new _Shared_GroupExpenseAC__WEBPACK_IMPORTED_MODULE_3__["GroupExpenseAC"]();
    }
    ngOnInit() {
    }
    GetGroupId(id) {
        this.service.GetGroupId(id).subscribe(res => {
            this.groupExpense = res;
            console.log(this.groupExpense);
            this.group.groupName = this.groupExpense[0].groupName;
            this.group.createrExpense = this.groupExpense[0].createrExpense;
            this.group.categoryName = this.groupExpense[0].categoryName;
            this.group.totalAmount = this.groupExpense[0].totalAmount;
            this.group.date = this.groupExpense[0].date;
            this.group.expensePaidBy = this.groupExpense[0].expensePaidBy;
        });
    }
};
GroupDashboardComponent.ctorParameters = () => [
    { type: _user_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
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









let GroupModule = class GroupModule {
};
GroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_4__["AddGroupComponent"], _add_group_expense_add_group_expense_component__WEBPACK_IMPORTED_MODULE_5__["AddGroupExpenseComponent"], _add_members_add_members_component__WEBPACK_IMPORTED_MODULE_6__["AddMembersComponent"], _group_dashboard_group_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["GroupDashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _group_routing_module__WEBPACK_IMPORTED_MODULE_3__["GroupRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]
    })
], GroupModule);



/***/ })

}]);
//# sourceMappingURL=group-group-module.js.map