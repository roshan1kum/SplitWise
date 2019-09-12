import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from '../../user/user-service.service';
import { ApplicationUserAC } from '../../Shared/ApplicationUserAC';
import { Group } from 'src/app/Shared/Group';
import { GroupMemberDetailsAC } from 'src/app/Shared/GroupMemberDetailsAC';
import { SettlementData } from '../../Shared/SettlementData';
import {Location} from '@angular/common';


@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {
  user:ApplicationUserAC;
  grpName:Group[];
  ID:number;
  allUser:Array<GroupMemberDetailsAC>=[];
  default: string = 'UK';
  FriendName:ApplicationUserAC[];
  flag:string="Friends";
  settlement:SettlementData;

  constructor(private fb:FormBuilder,private service:UserServiceService,private _location: Location) {
    this.FriendName=new Array<ApplicationUserAC>();
    this.getCurrentUser();
    this.settlement=new SettlementData();
   }

  profileForm:FormGroup;

  ngOnInit() {
    this.profileForm = this.fb.group({
      Cost:[''],
      Date:[''],
      Group:[''],
      User1:[''],
      User2:['']
    })
  }
  getCurrentUser(): void{
    this.service.username().subscribe(u=>
      {
        this.user=u;
        this.FriendName.push(this.user);
        this.getGroups(this.user.id);
        this.getFriend(this.user.id);
      });
    }
    getGroups(id:string)
    {
      this.service.getallGroups(id).subscribe(res=>{
        this.grpName=res;
      })
    }
    onChange(id:number) {
      this.ID=id;
      this.allUser=new Array<GroupMemberDetailsAC>();
      this.service.getallMembers(id).subscribe(res=>{
        res.forEach(element => {
          this.allUser.push(element);
        });
        // console.log(this.allUser);
        if(this.allUser.length>0)
        {
          this.flag="Group"
        }
        else{
          this.flag="Friends"
        }
      })
  }
  getFriend(id):void{
    this.service.getFriend(id).subscribe(name=>{
      name.forEach(element => {
        this.FriendName.push(element);
      });
    });
  }
  onSubmit()
  {
    // console.log(this.profileForm.value)
    this.settlement.amount=this.profileForm.get('Cost').value;
    this.settlement.date=this.profileForm.get('Date').value
    this.settlement.groupId=+this.profileForm.get('Group').value
    this.settlement.yourId=this.profileForm.get('User1').value
    this.settlement.toId=this.profileForm.get('User2').value
    console.log(this.settlement);
    this.service.Settlement(this.settlement).subscribe(res=>{
      this._location.back();
    });
  }
}
