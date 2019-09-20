using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Splitwise.Repository.ApplicationClasses;
using Splitwise.Repository.AplicationClasses;
using Microsoft.AspNetCore.Mvc;

namespace Splitwise.Repository.User
{
    public interface IUserRepository
    {
        Task<ApplicationUserAc> EditUSer(string id,ApplicationUserAc user);
        Task<ApplicationUser> GetUserbyID(string id);
        IEnumerable<ApplicationUserAc> GetAllUsers();
        ApplicationUserAc GetCurentUser(ApplicationUser user);
        IEnumerable<ApplicationUserAc> GetFriend(string userId);
        IEnumerable<Group> GetGroups(string userId);



        IEnumerable<Friend> AddFriend(List<string> id, string yourId);
        void CreateFriendExpense(FriendExpensesData friendExpensesData);
        void AddFriendBill(FriendExpensesData data);
        IEnumerable<FriendBillAC> ShowFriend(string userId);
        IEnumerable<Category> GetCategory();
        IEnumerable<Activity> GetActivity(string id);
        void UnFriend(string yourId, string friendId);
    }
}
