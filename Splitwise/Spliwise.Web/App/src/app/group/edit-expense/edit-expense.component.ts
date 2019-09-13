import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  profileForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.profileForm=this.fb.group({
      Cost:[''],
      Description: [''],
      Date:[''],
      Split: ['']
    })
  }

}
