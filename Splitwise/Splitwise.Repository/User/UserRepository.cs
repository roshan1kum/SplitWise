using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Model;
using Splitwise.Repository.AplicationClasses;
using Splitwise.Repository.ApplicationClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository.User
{
    class UserRepository : IUserRepository
    {

        #region Private Variables
        private readonly SplitwiseContext Context;
        #endregion

        #region Constructors                
        public UserRepository(SplitwiseContext Context)
        {
            this.Context = Context;
        }
        #endregion

        #region Public method
        public IEnumerable<Friend> AddFriend(List<string> id,string yourId)
        {
            List<Friend> list = new List<Friend>();
            foreach(var i in id)
            {
                Friend frnd = new Friend();
                frnd.YourId = yourId;
                frnd.FriendId = i;
                list.Add(frnd);
            }
            foreach (var i in id)
            {
                Friend frnd = new Friend();
                frnd.YourId = i;
                frnd.FriendId = yourId;
                list.Add(frnd);
            }
            Context.Friend.AddRange(list);
            return list.AsEnumerable(); 
        }

        public async Task<FriendExpensesData> AddFriendBill(FriendExpensesData data)
        {

            int expId = GetExpenseId(data.Date);
            List<FriendBill> list = new List<FriendBill>();
            foreach(var i in data.FriendUserExpense)
            {
                FriendBill bills = new FriendBill();
                bills.FriendExpId = expId;
                bills.FriendId = i.UserId;
                bills.Bill = i.Amount;
                list.Add(bills);
            }
            await Context.FriendBills.AddRangeAsync(list);
            return data;

        }
        private int GetExpenseId(DateTime dateTime)
        {
            int id = Context.FriendExpenses.FirstOrDefault(e => e.Date == dateTime).Id;
            return id;
        }

        public async Task<FriendExpense> CreateFriendExpense(FriendExpensesData friendExpensesData)
        {
            FriendExpense exp = new FriendExpense();
            exp.Date = friendExpensesData.Date;
            exp.Description = friendExpensesData.Description;
            exp.Amount = friendExpensesData.Amount;
            exp.Split = friendExpensesData.Split;
            exp.Paidby = friendExpensesData.Paidby;

            await Context.FriendExpenses.AddAsync(exp);
            return exp;
        }

        public void Createuser(ApplicationUser user)
        {
            Context.Add(user);
        }
  
        public async Task<ApplicationUserAc> EditUSer(string id,ApplicationUserAc user)
        {
            var users = await Context.Users.FindAsync(id);
            users.Name = user.Name;
            users.Email = user.Email;
            user.Username = user.Username;
            return user;
            
        }

        public IEnumerable<ApplicationUserAc> GetAllUsers()
        {
            var users = Context.Users.ToList();
            List<ApplicationUserAc> List = new List<ApplicationUserAc>();
            foreach(var i in users)
            {
                ApplicationUserAc user = new ApplicationUserAc();
                user.Name = i.Name;
                user.Email = i.Email;
                user.Username = i.UserName;
                user.Id=i.Id;
                List.Add(user);
            }
            return List;
        }
     
        public async Task<ApplicationUser> GetUserbyID(string id)
        {

            return await Context.Users.FindAsync(id);
        }
       
        public async Task Save()
        {
            await Context.SaveChangesAsync();
        }

        public IEnumerable<FriendBillAC> ShowFriend(string userId)
        {
           var exp = Context.FriendExpenses.Where(e => e.Paidby == userId);
            List<List<FriendBill>> list = new List<List<FriendBill>>();
            List<FriendBillAC> bill = new List<FriendBillAC>();
            foreach (var i in exp)
            {
                int expId = i.Id;

               var a=Context.FriendBills.Where(b => b.FriendExpId == expId).
                           Include(b => b.FriendUser).
                           Include(b => b.FriendExpense).
                           ThenInclude(b=>b.PaidbyUser).
                           ToList();
                list.Add(a);
            }
            foreach(var i in list)
            {
                foreach(var j in i)
                {
                    FriendBillAC friendBillAC = new FriendBillAC();
                    friendBillAC.Amount = j.Bill;
                    friendBillAC.Date = j.FriendExpense.Date;
                    friendBillAC.Name = j.FriendUser.Name;
                    friendBillAC.Email = j.FriendUser.Email;
                    friendBillAC.PaidbyAmount = j.FriendExpense.Amount;
                    friendBillAC.PaidbyEmail = j.FriendExpense.PaidbyUser.Email;
                    friendBillAC.PaidbyUserName = j.FriendExpense.PaidbyUser.Name;
                    bill.Add(friendBillAC);
                }
            }

            return bill.AsEnumerable();
        }

        public ApplicationUserAc GetCurentUser(ApplicationUser user)
        {
            ApplicationUserAc applicationUserAc = new ApplicationUserAc();
            applicationUserAc.Name = user.Name;
            applicationUserAc.Email = user.Email;
            applicationUserAc.Username = user.UserName;
            applicationUserAc.Id = user.Id;
            return applicationUserAc;
        }

        public IEnumerable<ApplicationUserAc> GetFriend(string userId)
        {
            List<ApplicationUserAc> list = new List<ApplicationUserAc>();
            var friend=Context.Friend.Where(u => u.YourId == userId).
                                Include(u=>u.User);
            foreach(var i in friend)
            {
                ApplicationUserAc applicationUserAc = new ApplicationUserAc();
                applicationUserAc.Id = i.User.Id;
                applicationUserAc.Name = i.User.Name;
                applicationUserAc.Email = i.User.Email;
                applicationUserAc.Username = i.User.UserName;
                list.Add(applicationUserAc);
            }

            return list.AsEnumerable();
        }

        public IEnumerable<string> GetGroups(string userId)
        {
            List<string> List = new List<string>();
            var grp = Context.GroupMembers.Where(x => x.UserID == userId)
                              .Include(x => x.Group);
            foreach (var i in grp)
            {
                List.Add(i.Group.GroupName);
            }

            return List.AsEnumerable();

        }

        #endregion
    }
}
