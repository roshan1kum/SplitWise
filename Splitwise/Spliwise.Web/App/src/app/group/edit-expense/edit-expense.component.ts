import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { GroupExpenseAC } from '../../Shared/GroupExpenseAC';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupExpenseData } from '../../Shared/GroupExpenseData';
import { UserServiceService } from '../../user/user-service.service';
import { ApplicationUserAC } from '../../Shared/ApplicationUserAC';
import { Group } from 'src/app/Shared/Group';
import { GroupMemberDetailsAC } from 'src/app/Shared/GroupMemberDetailsAC';
import { NamePrice } from '../../Shared/NamePrice';
import { Members } from '../../Shared/Members';
import {Location} from '@angular/common';


@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  profileForm:FormGroup;
  GroupExpense:GroupExpenseAC
  data:GroupExpenseData;
  details:GroupExpenseData=new GroupExpenseData();
  user:ApplicationUserAC;
  grpName:Group[];
  default:Group;
  ID:number;
  allUser:Array<GroupMemberDetailsAC>=[];
  NamePrice:Array<NamePrice>=[];
  NP:NamePrice;
  a:any;
  expenseData:GroupExpenseData;
  member:Members;

  constructor(private _location: Location,private route:ActivatedRoute,private fb:FormBuilder,private service:UserServiceService,private router:Router) {
    this.expenseData = new GroupExpenseData();
    this.expenseData.groupUsersExpenses=new Array<Members>();      
    }


  ngOnInit() {
    this.profileForm=this.fb.group({
      Cost:[''],
      Description: [''],
      Date:[''],
      Split: [''],
      Paidby:[''],
      GroupName:[''],
      MembersExpense:this.fb.array([
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
  getExpenseDetails(ID:number)
  {
    this.service.getExpenseDetailsId(ID).subscribe(res=>{
      this.data=res;
       this.getCurrentUser();
       console.log(this.data)
      // this.edit(res);
    });
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
      this.service.getGroupsofUser(id).subscribe(res=>{
          this.grpName=res;
          // this.default=this.grpName.find(x=>x.id==this.data.grpId)
          this.edit(this.data);
            // console.log(this.default)
        })
    }
    edit(details:GroupExpenseData)
    {
      console.log(details)
      this.profileForm.patchValue({
        Cost:details.cost,
        Description:details.description,
        Date:details.date,
        Split:details.split,
        Paidby:details.paidbyId
        // GroupName:new FormControl(d.id)
      });
        this.profileForm.controls['GroupName'].patchValue(this.data.grpId,{onlySelf: true});        
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

    allUserGroup(id:number)
    {
      this.allUser=new Array<GroupMemberDetailsAC>();
      this.service.getallMembers(id).subscribe(res=>{
        res.forEach(element => {
          this.allUser.push(element);
          
        });
        console.log(this.allUser)
        this.profileForm.setControl('MembersExpense',this.setExistingUser(this.data.groupUsersExpenses))
        // this.Nameprice(this.data.groupUsersExpenses);        
      })
    }
    setExistingUser(array:any):FormArray
    {
      const formArray=new FormArray([]);      
      array.forEach(element => {
        formArray.push(this.fb.group({
          Name:element.userId,
          Price:element.amount
        }));        
      });
      return formArray;
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
    onSubmit()
    {
      console.log(this.profileForm.value)
      this.expenseData.cost=this.profileForm.get('Cost').value;
      this.expenseData.description=this.profileForm.get('Description').value;
      this.expenseData.date=this.profileForm.get('Date').value;
      this.expenseData.grpId=this.profileForm.get('GroupName').value;
      this.expenseData.paidbyId=this.profileForm.get('Paidby').value;
      this.expenseData.split=this.profileForm.get('Split').value;
      this.expenseData.createrId=this.data.createrId;
      this.expenseData.id=this.ID;
      this.profileForm.get('MembersExpense').value.forEach(element => {
        this.member=new Members();
        this.member.userId=element.Name;
        this.member.Amount=element.Price;
        this.expenseData.groupUsersExpenses.push(this.member);
      });
      console.log(this.expenseData)
      this.service.EditExpense(this.ID,this.expenseData).subscribe(res=>{
        this._location.back();
      })
    }
  }
