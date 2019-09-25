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
import { Router } from '@angular/router';

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
  length:number;
  a:any;
  constructor(private service:UserServiceService,private fb:FormBuilder,private _location: Location,private router:Router) {
    
    this.groupExpense = new GroupExpenseData();
    this.groupExpense.groupUsersExpenses=new Array<Members>();
   }
  profileForm:FormGroup;

  ngOnInit() {
    this.getCurrentUser();
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
    // console.log(this.profileForm.get('MembersExpense').value)
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
      // this.service.getallGroups(id).subscribe(res=>{
      //   this.grpName=res;
      // })
      this.service.getGroupsofUser(id).subscribe(res=>{
          this.grpName=res;
        })
    }
    onSubmit()
    {     
      this.groupExpense.cost=this.profileForm.get('Cost').value;
      this.groupExpense.createrId=this.user.id;
      this.groupExpense.date=this.profileForm.get('Date').value;
      this.groupExpense.description=this.profileForm.get('Description').value
      this.groupExpense.grpId=this.ID;
      this.groupExpense.paidbyId=this.profileForm.get('Paidby').value;
      this.groupExpense.split=this.profileForm.get('Split').value;
      this.profileForm.get('MembersExpense').value.forEach(element => {
        this.allUser.forEach(user => {
          if(user.memberName==element.Name)
          {
            this.member=new Members();
            this.member.Amount=element.Price;
            this.member.userId=user.userId;
            this.groupExpense.groupUsersExpenses.push(this.member);
          }
        });
      });
      this.service.createExpense(this.groupExpense).subscribe(res=>{
        this._location.back()
      })
      // console.log(this.profileForm.get('MembersExpense').value)
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
  Split(isChecked:string)
    {
      if(isChecked=="equally")
      {

        let K=0;   
        this.profileForm.get('MembersExpense').value.forEach(element => {
          K++;                 
         });
     
         this.profileForm.get('MembersExpense').value.forEach(element => {
          element.Price=this.profileForm.get('Cost').value/K;                  
         });
         this.a=this.profileForm.get('MembersExpense').value
         this.profileForm.setControl('MembersExpense',this.setExistingPrice(this.a))
      }
      else{
        this.profileForm.get('MembersExpense').value.forEach(element => {
          element.Price=""                  
         });
         this.a=this.profileForm.get('MembersExpense').value
         this.profileForm.setControl('MembersExpense',this.setExistingPrice(this.a))
      }
    }
    setExistingPrice(priceSet:any):FormArray
    {
      const formArray=new FormArray([]);
      priceSet.forEach(element => {
        formArray.push(this.fb.group({
          Name:element.Name,
          Price:element.Price
        }));        
      });
      return formArray;
    }
  Back()
  {
    this.router.navigate([''])
  }


  // onSplit(isChecked:boolean)
  // {
  //    this.length=this.profileForm.get('MembersExpense').value.length;
  //    this.profileForm.get('MembersExpense').value.forEach(element => {
  //      this.profileForm.setValue('MembersExpense')
  //    });
  // }
}
 
