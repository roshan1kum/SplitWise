import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddFriendExpenseComponent } from './add-friend-expense/add-friend-expense.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowFriendDetailComponent } from './show-friend-detail/show-friend-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivityComponent } from './activity/activity.component';



@NgModule({
  declarations: [AddFriendComponent, AddFriendExpenseComponent, EditUserComponent, ShowDetailsComponent, ShowFriendDetailComponent, ActivityComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ]
})
export class UserModule { }
