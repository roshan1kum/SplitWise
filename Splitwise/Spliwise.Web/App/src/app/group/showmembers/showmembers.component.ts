import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user/user-service.service';
import { GroupMemberDetailsAC } from '../../Shared/GroupMemberDetailsAC';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showmembers',
  templateUrl: './showmembers.component.html',
  styleUrls: ['./showmembers.component.css']
})
export class ShowmembersComponent implements OnInit {

  id:number;
  members:Array<GroupMemberDetailsAC>=[];
  constructor(private service :UserServiceService,private route:ActivatedRoute) { 
   
  }

  ngOnInit() {
    this.id=+this.route.snapshot.paramMap.get('id');
    this.getallMembers(this.id);
  }
  getallMembers(id:number){
    this.service.getallMembers(id).subscribe(res=>{
    this.members=res;
    console.log(this.members)
  })
    }
}
