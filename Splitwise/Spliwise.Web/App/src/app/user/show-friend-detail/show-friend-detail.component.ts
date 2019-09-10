import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FriendBillAC } from '../../Shared/FriendBillAC';
import { ApplicationUserAC } from 'src/app/Shared/ApplicationUserAC';



@Component({
  selector: 'app-show-friend-detail',
  templateUrl: './show-friend-detail.component.html',
  styleUrls: ['./show-friend-detail.component.css']
})
export class ShowFriendDetailComponent implements OnInit {
  FriendBill:FriendBillAC[];
  user:ApplicationUserAC;

  constructor(private service:UserServiceService) {
    this.getCurrentUser();
   }

  ngOnInit() {
  }
  getCurrentUser(): void{
    this.service.username().subscribe(u=>
      {
        this.user=u;
        this.getFriendExpense(this.user.id);
      });
    }

  getFriendExpense(id){
    this.service.getFriendExpense(id).subscribe(name=>this.FriendBill=name);
  }
  }
