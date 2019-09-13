import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddMembersComponent } from './add-members/add-members.component';
import { AddFriendExpenseComponent } from '../user/add-friend-expense/add-friend-expense.component';
import { AddGroupExpenseComponent } from './add-group-expense/add-group-expense.component';
import { GroupDashboardComponent } from './group-dashboard/group-dashboard.component';
import { ShowmembersComponent } from './showmembers/showmembers.component';
import { componentFactoryName } from '@angular/compiler';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';


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
  },
  {
    path:'GroupDashboard/:id',
    component:GroupDashboardComponent
  },
  {
    path:'ShowMembers/:id',
    component:ShowmembersComponent
  },
  {
    path:'Edit/:id',
    component:EditExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
