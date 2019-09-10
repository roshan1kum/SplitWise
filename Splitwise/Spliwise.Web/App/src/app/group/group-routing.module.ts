import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddMembersComponent } from './add-members/add-members.component';
import { AddFriendExpenseComponent } from '../user/add-friend-expense/add-friend-expense.component';
import { AddGroupExpenseComponent } from './add-group-expense/add-group-expense.component';


const routes: Routes = [
  {
  path:'',
  component:AddGroupComponent
  },
  {
    path:'AddMembers/:id',
    component:AddMembersComponent
  },
  {
    path:'GroupExpense',
    component:AddGroupExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
