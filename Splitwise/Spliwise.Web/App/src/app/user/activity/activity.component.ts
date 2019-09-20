import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ApplicationUserAC } from '../../Shared/ApplicationUserAC';
import { Activity } from 'src/app/Shared/Activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  user:ApplicationUserAC;
  Activity:Activity[];
  constructor(private service :UserServiceService) { 
    
  }

  ngOnInit() {
    this.CurrentUser();
  }
  CurrentUser(){
    this.service.username().subscribe(res=>{
      this.user=res
      this.getActivity(this.user.id);
    })
  }
  getActivity(userId:string){
    this.service.Activity(userId).subscribe(res=>{
      this.Activity=res;
    })

  }
  

}
