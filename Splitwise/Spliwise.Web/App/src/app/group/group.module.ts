import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddMembersComponent } from './add-members/add-members.component';
import { AddGroupExpenseComponent } from './add-group-expense/add-group-expense.component';
import { GroupDashboardComponent } from './group-dashboard/group-dashboard.component';



@NgModule({
  declarations: [AddGroupComponent, AddMembersComponent, AddGroupExpenseComponent, GroupDashboardComponent],
  imports: [
    CommonModule
  ]
})
export class GroupModule { }
