import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user/user-service.service';
import { GroupExpenseAC } from '../../Shared/GroupExpenseAC';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationUserAC } from '../../Shared/ApplicationUserAC';

@Component({
  selector: 'app-group-dashboard',
  templateUrl: './group-dashboard.component.html',
  styleUrls: ['./group-dashboard.component.css']
})
export class GroupDashboardComponent implements OnInit {
  groupExpense:GroupExpenseAC[];
  group:GroupExpenseAC;
  id:number;
  groupName:string;
  user: ApplicationUserAC;
  createrGroupName:string;
  

  constructor(private service:UserServiceService,private route:ActivatedRoute,private router:Router) {
    this.id=+this.route.snapshot.paramMap.get('id');
    this.GetGroupId(this.id);
    this.getcurrentUser();
    this.group=new GroupExpenseAC();
   }

  ngOnInit() {
  }
  GetGroupId(id:number)
  {
    this.service.GetGroupId(id).subscribe(res=>{
      this.groupExpense=res;
      console.log(this.groupExpense);
      this.group.groupName=this.groupExpense[0].groupName
      this.group.createrExpense=this.groupExpense[0].createrExpense;
      this.group.categoryName=this.groupExpense[0].categoryName;
      this.group.totalAmount=this.groupExpense[0].totalAmount;
      this.group.date=this.groupExpense[0].date;
      this.group.expensePaidBy=this.groupExpense[0].expensePaidBy;
      this.createrGroupName=this.groupExpense[0].createrGroupName;
    })
  }
  getcurrentUser(){
    this.service.username().subscribe(res=>{
      this.user=res;
    })
  }
  Delete()
  {
    alert("deleted the Group Expense");
    const id=+this.route.snapshot.paramMap.get('id');

    this.service.Delete(id).subscribe(res=>
    {
      this.router.navigate(['']); 
    })
  }
  Edit()
  {
    const id=+this.route.snapshot.paramMap.get('id'); 
    this.router.navigate(['Groups/Edit',id]);
  }

}
