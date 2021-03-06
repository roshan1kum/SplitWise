import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { ApplicationUserAC } from 'src/app/Shared/ApplicationUserAC';
import { Friend } from 'src/app/Shared/Friend';


@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  user:ApplicationUserAC[];
  currentUser:ApplicationUserAC;
  FormArray: Array<string> = [];
  FriendName:Array<string>=[];
  frnd:Friend;

  constructor(private service:UserServiceService,private fb:FormBuilder,private router:Router) {
    
    this.frnd=new Friend();
  
   }
   profileForm:FormGroup;

  ngOnInit() {
    this.getCurrentUser();
    this.profileForm=this.fb.group({
      Friends:this.fb.array([
        this.addFriendsGroup()
      ])
    })
  }

    addFriendsGroup():FormGroup
    {
      return this.fb.group({
        UserName:['']
      });
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
      this.service.getFriend(id).subscribe(res=>{
        res.forEach(element => {
          this.FriendName.push(element.id);          
        });
        // console.log(this.memberID);
      })
    }

  AddFriends()
  {
    (<FormArray>this.profileForm.get('Friends')).push(this.addFriendsGroup());
  }
  submit()
  {
    this.profileForm.get('Friends').value.forEach(element => {
      this.user.forEach(u => {
        if(u.username==element.UserName){
          if(!this.FormArray.some(x=>x==u.id) && !this.FriendName.some(x=>x==u.id))
          {
            this.FormArray.push(u.id);
          }    
      }
      });
    });
    console.log(this.FormArray);
    this.frnd.yourId=this.currentUser.id;
    this.frnd.FriendId=this.FormArray;
    if(this.frnd.FriendId.length==0)
    {
      alert("enter valid details");        
    }
    else{
    this.service.AddFriend(this.frnd).subscribe(res=>{
      this.router.navigate(['']);
    });
  }
}
}




    //   onChange(id:string, isChecked: boolean) {
  //     if(isChecked) {
  //       this.FormArray.push(id);
  //     } else {
  //       let index = this.FormArray.indexOf(id);
  //       this.FormArray.splice(index,1);
  //     }
  // }