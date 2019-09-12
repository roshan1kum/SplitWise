import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { UserServiceService } from '../../user/user-service.service';
import { Group } from 'src/app/Shared/Group';
import { ApplicationUserAC } from 'src/app/Shared/ApplicationUserAC';
import { GroupMembersAC } from '../../Shared/GroupMembersAC';
import { GroupMemberDetailsAC } from '../../Shared/GroupMemberDetailsAC';
import { GroupExpenseData } from '../../Shared/GroupExpenseData';
import { Members } from '../../Shared/Members';
import {Location} from '@angular/common';


@Component({
  selector: 'app-add-group-expense',
  templateUrl: './add-group-expense.component.html',
  styleUrls: ['./add-group-expense.component.css']
})
export class AddGroupExpenseComponent implements OnInit {
  user:ApplicationUserAC;
  grpName:Group[];
  allUser:Array<GroupMemberDetailsAC>=[];
  groupExpense:GroupExpenseData;
  ID:number;
  member:Members;
  constructor(private service:UserServiceService,private fb:FormBuilder,private _location: Location) {
    this.getCurrentUser();
    this.groupExpense = new GroupExpenseData();
    this.groupExpense.GroupUsersExpenses=new Array<Members>();
   }
  profileForm:FormGroup;

  ngOnInit() {
    this.profileForm = this.fb.group({
      Cost:[''],
      Description: [''],
      Date:[''],
      Split: [''],
      GroupName:[''],
      Paidby:[''],
      MembersExpense:this.fb.array([
        this.addMembersFormGroup()
      ])
    })
  }
  addMembersFormGroup():FormGroup{
    return this.fb.group({
      Name:[''],
      Price: ['']
    });
  }
  AddMembers():void{
    (<FormArray>this.profileForm.get('MembersExpense')).push(this.addMembersFormGroup());
  }
  deleteMembers(index) {
    (<FormArray>this.profileForm.get('MembersExpense')).removeAt(index);
  }

  getCurrentUser(): void{
    this.service.username().subscribe(u=>
      {
        this.user=u;
        this.getGroups(this.user.id);
      });
    }
    getGroups(id:string)
    {
      this.service.getallGroups(id).subscribe(res=>{
        this.grpName=res;
      })
    }
   
    onSubmit()
    {
      // console.log(this.profileForm.value);
      // console.log(this.profileForm.get('MembersExpense').value);
      // this.profileForm.get('MembersExpense').value.forEach(element => {
      //   console.log(element.Name)
        
      // });
      this.groupExpense.Cost=this.profileForm.get('Cost').value;
      this.groupExpense.CreaterId=this.user.id;
      this.groupExpense.Date=this.profileForm.get('Date').value;
      this.groupExpense.Description=this.profileForm.get('Description').value
      this.groupExpense.GrpId=this.ID;
      this.groupExpense.PaidbyId=this.profileForm.get('Paidby').value;
      this.groupExpense.Split=this.profileForm.get('Split').value;
      this.profileForm.get('MembersExpense').value.forEach(element => {
        this.allUser.forEach(user => {
          if(user.memberName==element.Name)
          {
            this.member=new Members();
            this.member.Amount=element.Price;
            this.member.userId=user.userId;
            this.groupExpense.GroupUsersExpenses.push(this.member);
          }
        });
      });
      debugger;
      this.service.createExpense(this.groupExpense).subscribe(res=>{
        this._location.back()
      })
      }
    onChange(id:number) {
      this.ID=id;
      this.allUser=new Array<GroupMemberDetailsAC>();
      this.service.getallMembers(id).subscribe(res=>{
        res.forEach(element => {
          this.allUser.push(element);
        });
        console.log(this.allUser);
      })
  }
}
