import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { ApplicationUserAC } from '../Shared/ApplicationUserAC';
import { FriendBillAC } from '../Shared/FriendBillAC';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  user:ApplicationUserAC;
  FriendName:ApplicationUserAC[];
  grpName:string[];
  FriendBill:FriendBillAC[];

  constructor(private service:UserServiceService,private router:Router) {
    this.getCurrentUser();

   }

  ngOnInit() {
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
    this.service.getGroups(id).subscribe(name=>this.grpName=name);
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
}
