﻿using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Splitwise.Repository.ApplicationClasses;
using Splitwise.Repository.AplicationClasses;

namespace Splitwise.Repository.User
{
    public interface IUserRepository
    {
        Task<ApplicationUserAc> EditUSer(string id,ApplicationUserAc user);
        Task<ApplicationUser> GetUserbyID(string id);
        IEnumerable<ApplicationUserAc> GetAllUsers();
        
        Task<Friend> AddFriend(string id,string yourId);
        Task<FriendExpense> CreateFriendExpense(FriendExpensesData friendExpensesData);
        Task<FriendExpensesData> AddFriendBill(FriendExpensesData data);
        IEnumerable<FriendBillAC> ShowFriend(string userId);


    }
}
