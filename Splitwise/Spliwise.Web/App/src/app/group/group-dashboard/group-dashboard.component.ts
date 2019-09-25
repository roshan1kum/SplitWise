import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user/user-service.service';
import { GroupExpenseAC } from '../../Shared/GroupExpenseAC';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationUserAC } from '../../Shared/ApplicationUserAC';
import { Group } from 'src/app/Shared/Group';

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
  a: Dictionary<GroupExpenseAC[]>
  public buttonName:any = 'Show';
  public show:boolean = false;


  constructor(private service:UserServiceService,private route:ActivatedRoute,private router:Router) {
    this.id=+this.route.snapshot.paramMap.get('id');
    // this.getGroups(this.id);
  
    this.group=new GroupExpenseAC();
   }

  ngOnInit() {
    this.GetGroupId(this.id);
    this.getcurrentUser();
  }
  GetGroupId(id:number)
  {
    this.service.GetGroupId(id).subscribe(res=>{
      // this.groupExpense=res;
      this.a=res;
      if(Object.keys(this.a))
      {
        let key=Object.keys(this.a)[0];
        this.group.groupName=this.a[key][0].groupName;
        this.group.createrExpense=this.a[key][0].createrExpense;
        this.group.categoryName=this.a[key][0].categoryName;
        this.group.date=this.a[key][0].date;
        //this.group.createrExpense=this.groupExpense[0].createrExpense;
        this.group.createrGroupName=this.a[key][0].createrGroupName;  
      }
        // Use `key` and `value`

       console.log(this.a);
      // console.log(this.a['expId'])
      // this.group=this.a['1015'][0].groupName;
      // console.log(this.group)
      // console.log(this.group);
      // this.group.groupName=this.groupExpense[0].groupName
      // this.group.createrExpense=this.groupExpense[0].createrExpense;
      // this.group.categoryName=this.groupExpense[0].categoryName;
      // this.group.totalAmount=this.groupExpense[0].totalAmount;
      // this.group.date=this.groupExpense[0].date;
      // this.group.expensePaidBy=this.groupExpense[0].expensePaidBy;
      // this.createrGroupName=this.groupExpense[0].createrGroupName;      
    })
  }
  getcurrentUser(){
    this.service.username().subscribe(res=>{
      this.user=res;
    })
  }
  // toggle(id:number) {
  //   if(item.showItem)  
  //   item.showItem = false;
  //   else
  //   item.showItem= true;
  // }
  Delete()
  {
    alert("deleted the Group Expense");
    const id=+this.route.snapshot.paramMap.get('id');

    this.service.Delete(id).subscribe(res=>
    {
      this.router.navigate(['']); 
    })
  }
  Edit(id:number)
  {
    this.router.navigate(['Groups/Edit',id]);
  }
  Back()
  {
    this.router.navigate([''])
  }
  DeleteExpense(id:number)
  {
    alert(id)
    this.service.deleteExpense(id).subscribe(res=>
    {
      this.ngOnInit();
    })
    
  }
    

}
