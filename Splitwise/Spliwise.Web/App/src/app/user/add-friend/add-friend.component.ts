import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ApplicationUserAC } from '../Shared/ApplicationUserAC';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Friend } from '../Shared/Friend';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  user:ApplicationUserAC[];
  currentUser:ApplicationUserAC;
  FormArray: Array<string> = [];
  FriendName:ApplicationUserAC[];
  frnd:Friend;

  constructor(private service:UserServiceService,private fb:FormBuilder,private router:Router) {
    this.getCurrentUser();
    this.frnd=new Friend();
  
   }

  ngOnInit() {
  }

  getCurrentUser(): void{
    this.service.username().subscribe(u=>
      {
        this.currentUser=u;
        this.getFriend(u.id)
        this.getAllUser();
      });
    }

  getAllUser():void{
    this.service.getAllUser().subscribe(u=>{
     this.user=u;
    });
    }
    getFriend(id):void{
      this.service.getFriend(id).subscribe(name=>this.FriendName=name);
    }
    onChange(id:string, isChecked: boolean) {
      if(isChecked) {
        this.FormArray.push(id);
      } else {
        let index = this.FormArray.indexOf(id);
        this.FormArray.splice(index,1);
      }
  }
  submit()
  {
   this.frnd.yourId=this.currentUser.id;
   this.frnd.FriendId=this.FormArray;
    this.service.AddFriend(this.frnd).subscribe(res=>{
      this.router.navigate(['']);
    });
  } 

  }
