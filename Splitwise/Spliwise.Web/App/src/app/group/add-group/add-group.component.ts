import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user/user-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Group } from '../../Shared/Group';
import { ApplicationUserAC } from '../../Shared/ApplicationUserAC';
import { Category } from '../../Shared/Category';


@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  Categories:Category[];
  profileForm:FormGroup;
  group:Group;
  user:ApplicationUserAC;
  constructor(private service :UserServiceService,private fb:FormBuilder) {
    this.getCategory();
    this.group=new Group();
    this.getCurrentUser();

   }

  ngOnInit() {
    this.profileForm=this.fb.group({
      Name:[''],
      Date:[''],
      Category:['']
    })
  }
  onSubmit()
  {
    this.group.categoryId=this.profileForm.get('Category').value
    this.group.createdDate=this.profileForm.get('Date').value
    this.group.debt=false;
    this.group.groupName=this.profileForm.get('Name').value;
    this.group.creatorId=this.user.id;
    this.service.createGroups(this.group).subscribe(res=>{
      console.log(res);
    }
    )
    //console.log(this.profileForm.get('Category').value);

  }
  getCategory():void
  {
    this.service.getCategory().subscribe(res=>
    {
      this.Categories=res;
    });
  }
  getCurrentUser(): void{
    this.service.username().subscribe(u=>
      {
        this.user=u;
      });
    }
}
