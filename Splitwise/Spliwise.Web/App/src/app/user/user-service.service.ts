import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationUserAC } from '../Shared/ApplicationUserAC';
import { Group } from '../Shared/Group';
import { FriendBillAC } from '../Shared/FriendBillAC';
import { Friend } from '../Shared/Friend';
import { FriendExpensesData } from '../Shared/FriendExpensesData';
import { Category } from '../Shared/Category';
import { GroupMembersAC } from '../Shared/GroupMembersAC';

import { GroupMemberDetailsAC } from 'src/app/Shared/GroupMemberDetailsAC';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  readonly rootUrl="http://localhost:50534/api/User"

  constructor(private http:HttpClient) {}

  username():Observable<ApplicationUserAC>{
    return this.http.get<ApplicationUserAC>(this.rootUrl+'/CurrentUser');
  }

  getFriend(id:string):Observable<ApplicationUserAC[]>{
    return this.http.get<ApplicationUserAC[]>(this.rootUrl+'/GetFriend/'+id);

  }
  getGroups(id:string):Observable<Group[]>{
    return this.http.get<Group[]>(this.rootUrl+'/GetGroups/'+id);
  }
  getFriendExpense(id:string):Observable<FriendBillAC[]>{
    return this.http.get<FriendBillAC[]>(this.rootUrl+'/ShowFriendExpense/'+id);
  }

  getAllUser():Observable<ApplicationUserAC[]>{
    return this.http.get<ApplicationUserAC[]>(this.rootUrl);
  }

  AddFriend(Id:Friend)
  {
    return this.http.post("http://localhost:50534/api/User/AddFriend",Id);
  }
  CreateFriendExpense(friendExpenseData:FriendExpensesData){
    return this.http.post(this.rootUrl+'/CreateFriendExpense',friendExpenseData);
  }
  getCategory():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.rootUrl+'/Category');
  }
  createGroups(group:Group)
  {
    return this.http.post("http://localhost:50534/api/Groups",group);
  }
  addGroupMembersList(GroupMember:GroupMembersAC)
  {
    return this.http.post("http://localhost:50534/api/Groups/AddMembersList",GroupMember);
  }
  getallMembers(id:number):Observable<GroupMemberDetailsAC[]>
  {
    return this.http.get<GroupMemberDetailsAC[]>("http://localhost:50534/api/Groups/GetMembers/"+id);
  }
  getallGroups(id:string):Observable<Group[]>
  {
    return this.http.get<Group[]>("http://localhost:50534/api/Groups/GetAllGroupsId/"+id);
  }
}
