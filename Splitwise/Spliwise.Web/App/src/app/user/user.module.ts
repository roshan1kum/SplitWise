import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddFriendExpenseComponent } from './add-friend-expense/add-friend-expense.component';
import { ShowFriendDetailComponent } from './show-friend-detail/show-friend-detail.component';



@NgModule({
  declarations: [EditUserComponent, ShowUserComponent, ShowDetailsComponent, AddFriendComponent, AddFriendExpenseComponent, ShowFriendDetailComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
