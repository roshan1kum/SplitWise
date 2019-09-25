import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { ApplicationUserAC } from 'src/app/Shared/ApplicationUserAC';
import { Members } from 'src/app/Shared/Members';
import { FriendExpensesData } from 'src/app/Shared/FriendExpensesData';

@Component({
  selector: 'app-add-friend-expense',
  templateUrl: './add-friend-expense.component.html',
  styleUrls: ['./add-friend-expense.component.css']
})
export class AddFriendExpenseComponent implements OnInit {

FriendName:ApplicationUserAC[];
user:ApplicationUserAC;
FriendExpense:FriendExpensesData;
member:Members;
mem:Array<Members>;
price:number;
name:string;
m:Members;
a:FormArray;

// friendN:string[];
  constructor(private service:UserServiceService,private fb:FormBuilder,private router:Router) {
    this.FriendName=new Array<ApplicationUserAC>();
    
    this.FriendExpense=new FriendExpensesData();
    this.FriendExpense.friendUserExpense=new Array<Members>();
     }
  profileForm:FormGroup;

  ngOnInit() {
     this.getCurrentUser();
    this.profileForm = this.fb.group({
      Cost:[''],
      Description: [''],
      Date:[''],
      Split: [''],
      MembersExpense:this.fb.array([
        this.addMembersFormGroup()
      ])
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
  }
  deleteMembers(index) {
    (<FormArray>this.profileForm.get('MembersExpense')).removeAt(index);
  }

  onSubmit() {
    //console.log(this.profileForm.get('MembersExpense').value);
    this.FriendExpense.amount=this.profileForm.get('Cost').value;
    this.FriendExpense.Date=this.profileForm.get('Date').value;
    this.FriendExpense.Description=this.profileForm.get('Description').value;
    this.FriendExpense.split=this.profileForm.get('Split').value;
    this.FriendExpense.paidby=this.user.id;  
    this.profileForm.get('MembersExpense').value.forEach(element => {
      this.FriendName.forEach(frnd => {
        if(frnd.name==element.Name)
        {
          this.member = new Members();
          this.member.userId = frnd.id;
          this.member.Amount = element.Price;
          this.FriendExpense.friendUserExpense.push(this.member);   
        }
      });
    });
    
    console.log(this.FriendExpense);
    this.service.CreateFriendExpense(this.FriendExpense).subscribe(res=>
    {
      this.router.navigate(['FriendDashboard']);
    });
  }

  getCurrentUser(): void{
    this.service.username().subscribe(u=>
      {
        this.user=u;
        this.FriendName.push(this.user);
        this.getFriend(this.user.id);
      });
    }
    getFriend(id):void{
      this.service.getFriend(id).subscribe(name=>{
        name.forEach(element => {
          this.FriendName.push(element);
        });
        
        console.log(this.FriendName);
      }); 
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

    // SaveGroupExpense(grpexpForm:NgForm)
    // {
    //     console.log(grpexpForm.value)
    // }
}
