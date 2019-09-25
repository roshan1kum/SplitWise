import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddFriendExpenseComponent } from './add-friend-expense/add-friend-expense.component';
import { ShowFriendDetailComponent } from './show-friend-detail/show-friend-detail.component';
import { ActivityComponent } from './activity/activity.component';


const routes: Routes = [
  {
    path:'',
    component:ShowDetailsComponent
  },
  {
    path:'AddFriend',
    component:AddFriendComponent
  },
  {
    path:'AddFriendExpense',
    component:AddFriendExpenseComponent
  },
  {
    path:'FriendDashboard',
    component:ShowFriendDetailComponent
  },
  {
    path:'Activity',
    component:ActivityComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
