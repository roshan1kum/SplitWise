import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddGroupExpenseComponent } from './add-group-expense/add-group-expense.component';
import { AddMembersComponent } from './add-members/add-members.component';
import { GroupDashboardComponent } from './group-dashboard/group-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowmembersComponent } from './showmembers/showmembers.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';


@NgModule({
  declarations: [AddGroupComponent, AddGroupExpenseComponent, AddMembersComponent, GroupDashboardComponent, ShowmembersComponent,EditExpenseComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GroupModule { }
