import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { ApplicationUserAC } from 'src/app/Shared/ApplicationUserAC';
import { FriendBillAC } from 'src/app/Shared/FriendBillAC';
import { Group } from 'src/app/Shared/Group';
import {Location} from '@angular/common';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  user:ApplicationUserAC;
  FriendName:ApplicationUserAC[];
  grpName:Group[];
  FriendBill:FriendBillAC[];
  createrID:string;
  
  constructor(private service:UserServiceService,private router:Router,) {   
    
   }

  ngOnInit() {
    this.getCurrentUser();

  }
  getCurrentUser(): void{
    this.service.username().subscribe(u=>
      {
        this.user=u;
        this.getFriend(this.user.id);
        this.getGroups(this.user.id);
        this.getFriendExpense(this.user.id);
      });
    }
  getFriend(id):void{
    this.service.getFriend(id).subscribe(name=>this.FriendName=name);
  }
  getGroups(id):void{
    this.service.getGroupsofUser(id).subscribe(name=>{
      this.grpName=name
      // this.createrID=this.grpName[0].creatorid;
    });
  }
  getFriendExpense(id){
    this.service.getFriendExpense(id).subscribe(name=>this.FriendBill=name);
  }
  AddFriend(){
    this.router.navigate(['AddFriend']);
  } 
  AddGroup(){
    this.router.navigate(['Groups']);
  }
  AddFriendExpense(){
    this.router.navigate(['AddFriendExpense']);
  }
  FriendDashBoard()
  {
    this.router.navigate(['FriendDashboard'])
  }
  AddMembers(id:number)
  {
    this.router.navigate(['./Groups/AddMembers',id]);
  }
  AddGroupExpense(id:number)
  {
    this.router.navigate(['./Groups/GroupExpense']);
  }
  NavigateToGroupDashboard(id:number){
    this.router.navigate(['./Groups/GroupDashboard',id]);
  }
  Settlement(){
    this.router.navigate(['Settlement']);
  }
  Members(id:number)
  {
    this.router.navigate(['./Groups/ShowMembers',id])
  }
  Activity()
  {
    this.router.navigate(['Activity'])
  }
  UnFriend(id:string)
  {
    // alert(id);
    // debugger;
    this.service.Unfriend(this.user.id,id).subscribe( 
      (data) =>{
        console.log(data);
        this.FriendName.splice

        this.ngOnInit();

      }),
      err => {
        console.log("Error");
      }   
  }
  
}
