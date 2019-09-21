import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GroupExpenseAC } from '../../Shared/GroupExpenseAC';
import { ActivatedRoute } from '@angular/router';
import { GroupExpenseData } from '../../Shared/GroupExpenseData';
import { UserServiceService } from '../../user/user-service.service';


@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  profileForm:FormGroup;
  GroupExpense:GroupExpenseAC
  data:GroupExpenseData;
  details:GroupExpenseData=new GroupExpenseData();


  constructor(private route:ActivatedRoute,private fb:FormBuilder,private service:UserServiceService) {    
  }

  ngOnInit() {
    this.profileForm=this.fb.group({
      Cost:[''],
      Description: [''],
      Date:[''],
      Split: [''],
      GroupName:[''],
      Paidby:[''],

    })
    this.route.paramMap.subscribe(params => {
      const ID = +params.get('id');
      if (ID) {
        this.getExpenseDetails(ID);
      }
    });
  }
  getExpenseDetails(ID:number)
  {
    this.service.getExpenseDetailsId(ID).subscribe(res=>{
      this.data=res;
      this.edit(res);
    });
  }
  edit(details:GroupExpenseData)
  {
    console.log(details)
    this.profileForm.patchValue({
      Cost:details.cost,
      Description:details.description,
      Date:details.date,
      Split:details.split     
    });
  }
}
