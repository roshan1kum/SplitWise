import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user/user-service.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationUserAC } from 'src/app/Shared/ApplicationUserAC';
import { GroupMembersAC } from 'src/app/Shared/GroupMembersAC';
import {Location} from '@angular/common';
import { Group } from 'src/app/Shared/Group';
import { GroupMembers } from '../../Shared/GroupMembers';



@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {
  user:ApplicationUserAC[];
  FormArray: Array<string> = [];
  members:GroupMembersAC;
  id:number;
  Grp:Array<GroupMembersAC>=[];
  allmembers:Array<GroupMembers>=[];
  memberID:Array<string>=[];

  constructor(private service:UserServiceService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute,private _location: Location) {
    this.getAllUser();
    this.members=new GroupMembersAC();
    this.id=+this.route.snapshot.paramMap.get('id');
  
   }
   profileForm:FormGroup;

   ngOnInit() {
    this.profileForm=this.fb.group({
      Members:this.fb.array([
        this.addFriendsGroup()
      ])
    })
  }
  addFriendsGroup():FormGroup
  {
    return this.fb.group({
      Name:['']
    });
  }
  AddFriends()
  {
    (<FormArray>this.profileForm.get('Members')).push(this.addFriendsGroup());
  }
  // getCurrentUser(): void{
  //   this.service.username().subscribe(u=>
  //     {
  //       this.currentUser=u;
  //       this.getAllUser();
  //       this.getAllMembers(this.id);
  //     });
  //   }

  getAllUser():void{
    this.service.getAllUser().subscribe(u=>{
     this.user=u;
     this.getAllMembers(this.id);
    });
    }

    getAllMembers(id:number)
    {
      this.service.getallMembers(id).subscribe(res=>{
        res.forEach(element => {
          this.memberID.push(element.userId);          
        });
        console.log(this.memberID);
      }
      )
    }

    submit()
    {
      // console.log(this.profileForm.get('Members').value);
      this.profileForm.get('Members').value.forEach(element => {
          this.user.forEach(u => {
            if(element.Name==u.name)
            {
              if(!this.FormArray.some(x=>x==u.id) && !this.memberID.some(x=>x==u.id))
              {
              this.FormArray.push(u.id);
            }
            }
          });
      });
     
      // console.log(id);
      console.log(this.FormArray);
      this.members.grpid=this.id;
      this.members.userId=this.FormArray;
      if(this.members.userId.length==0)
      {
        alert("enter valid details");        
      }
      else{
      this.service.addGroupMembersList(this.members).subscribe(res=>
        this._location.back()
      )
    }
  }
}
