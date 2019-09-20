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

        public void AddFriendBill(FriendExpensesData data)
        {
            int expId = GetExpenseId(data.Date);
            List<FriendBill> list = new List<FriendBill>();
            List<FriendBill> a = Context.FriendBills.Where(x => x.FriendExpId == expId).ToList();
            List<FriendExpense> expense = Context.FriendExpenses.Where(x => x.Paidby == data.Paidby).ToList();
            int f = 0, k = 0;

            if (expense.Count != 0)
            {
                foreach (var exp in expense)
                {
                    k = 0;
                    foreach (var i in data.FriendUserExpense)
                    {
                        var b = Context.FriendBills.FirstOrDefault(x => x.FriendId == i.UserId);
                        if (b != null)
                        {
                            k++;
                        }
                    }
                    if (k == data.FriendUserExpense.Count)
                    {
                        f = 0;
                        foreach (var i in data.FriendUserExpense)
                        {
                            var x = Context.FriendBills.FirstOrDefault(b => b.FriendExpId == exp.Id && b.FriendId == i.UserId);
                            x.Bill += i.Amount;
                            Context.FriendBills.Update(x);
                            f++;
                        }
                    }
                    if (f == k)
                    {
                        break;
                    }

                }
                if (f == 0)
                {
                    foreach (var i in data.FriendUserExpense)
                    {
                        FriendBill bills = new FriendBill();
                        bills.FriendExpId = expId;
                        bills.FriendId = i.UserId;
                        bills.Bill = i.Amount;
                        list.Add(bills);
                    }
                    Context.FriendBills.AddRange(list);
                }
            }
            else
            {
                foreach (var i in data.FriendUserExpense)
                {
                    FriendBill bills = new FriendBill();
                    bills.FriendExpId = expId;
                    bills.FriendId = i.UserId;
                    bills.Bill = i.Amount;
                    list.Add(bills);
                }
                Context.FriendBills.AddRange(list);
            }
        }                                                       
        private int GetExpenseId(DateTime dateTime)
        {
            int id = Context.FriendExpenses.FirstOrDefault(e => e.Date == dateTime).Id;
            return id;
        }

        public void CreateFriendExpense(FriendExpensesData friendExpensesData)
        {
            int k = 0;
            int f = 0;
            List<FriendExpense> expense = Context.FriendExpenses.Where(x => x.Paidby == friendExpensesData.Paidby).ToList();
            if (expense.Count != 0)
            {
                foreach (var exp in expense)
                {
                    k = 0;
                    foreach (var i in friendExpensesData.FriendUserExpense)
                    {
                        var b = Context.FriendBills.FirstOrDefault(x => x.FriendId == i.UserId);
                        if (b != null)
                        {
                            k++;
                        }
                    }
                    if (k == friendExpensesData.FriendUserExpense.Count)
                    {
                        exp.Amount+= friendExpensesData.Amount;
                        exp.Date = friendExpensesData.Date;
                        Context.FriendExpenses.Update(exp);
                        f = 1;
                        break;
                    }
                }
                if (f != 1)
                {
                    FriendExpense exp = new FriendExpense();
                    exp.Date = friendExpensesData.Date;
                    exp.Description = friendExpensesData.Description;
                    exp.Amount = friendExpensesData.Amount;
                    exp.Split = friendExpensesData.Split;
                    exp.Paidby = friendExpensesData.Paidby;
                    Context.FriendExpenses.Add(exp);
                }
            }
            else
            {
                FriendExpense exp = new FriendExpense();
                exp.Date = friendExpensesData.Date;
                exp.Description = friendExpensesData.Description;
                exp.Amount = friendExpensesData.Amount;
                exp.Split = friendExpensesData.Split;
                exp.Paidby = friendExpensesData.Paidby;
                Context.FriendExpenses.Add(exp);
            }
        }
            
            
            //var a = Context.FriendExpenses.FirstOrDefault(x => x.Paidby == friendExpensesData.Paidby);
            //int k = 0;
            //if (a != null)
            //{
            //    foreach(var i in friendExpensesData.FriendUserExpense)
            //    {
            //        var b = Context.FriendBills.FirstOrDefault(x => x.FriendId==i.UserId);
            //        if (b != null)
            //        {
            //            k++;
            //            //a.Amount += friendExpensesData.Amount;
            //            //Context.FriendExpenses.Update(a);
            //        }
            //    }
            //    if(k==friendExpensesData.FriendUserExpense.Count)
            //    {
            //        a.Amount += friendExpensesData.Amount;
            //        Context.FriendExpenses.Update(a);
            //    }
            //    else
            //    {
            //        FriendExpense exp = new FriendExpense();
            //        exp.Date = friendExpensesData.Date;
            //        exp.Description = friendExpensesData.Description;
            //        exp.Amount = friendExpensesData.Amount;
            //        exp.Split = friendExpensesData.Split;
            //        exp.Paidby = friendExpensesData.Paidby;
            //        Context.FriendExpenses.Add(exp);
            //    }

            //}
            //else
            //{
            //    FriendExpense exp = new FriendExpense();
            //    exp.Date = friendExpensesData.Date;
            //    exp.Description = friendExpensesData.Description;
            //    exp.Amount = friendExpensesData.Amount;
            //    exp.Split = friendExpensesData.Split;
            //    exp.Paidby = friendExpensesData.Paidby;
            //    Context.FriendExpenses.Add(exp);
            //}            


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
                    friendBillAC.Id = j.Id;
                    friendBillAC.Amount = j.Bill;
                    friendBillAC.Date = j.FriendExpense.Date;
                    friendBillAC.Name = j.FriendUser.Name;
                    friendBillAC.Email = j.FriendUser.Email;
                    friendBillAC.PaidbyAmount = j.FriendExpense.Amount;
                    friendBillAC.PaidbyEmail = j.FriendExpense.PaidbyUser.Email;
                    friendBillAC.PaidbyUserName = j.FriendExpense.PaidbyUser.Name;
                    friendBillAC.Description = j.FriendExpense.Description;
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

        public IEnumerable<Group> GetGroups(string userId)
        {
            List<Group> List = new List<Group>();
            var grp = Context.GroupMembers.Where(x => x.UserID == userId)
                              .Include(x => x.Group);
            foreach (var i in grp)
            {
                List.Add(i.Group);
            }
            return List.AsEnumerable();
        }

        public IEnumerable<Category> GetCategory()
        {
            //IEnumerable<Category> cat = Context.Category.ToList();
            //return cat;
            List<Category> list = new List<Category>();
            IEnumerable<Category> cat = Context.Category.ToList();
            foreach (var i in cat)
            {
                Category c = new Category();
                c.CategoryId = i.CategoryId;
                c.Name = i.Name;
                list.Add(c);
            }
            return list;


        }

        public IEnumerable<Activity> GetActivity(string id)
        {
            return Context.Activity.Where(x => x.UserId == id).Include(x=>x.User);
            
        }

        public void UnFriend(string yourId, string friendId)
        {
            var a=Context.Friend.First(x => x.YourId == yourId && x.FriendId == friendId);
            var b = Context.Friend.First(x => x.YourId == friendId && x.FriendId == yourId);
            Context.Friend.Remove(a);
            Context.Friend.Remove(b);
        }

        #endregion
    }
}
