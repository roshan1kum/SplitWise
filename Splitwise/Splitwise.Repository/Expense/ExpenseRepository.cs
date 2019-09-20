using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Model;
using Splitwise.Repository.ApplicationClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository
{
    public class ExpenseRepository : IExpenseRepository
    {
        #region Private Variable
        private readonly SplitwiseContext context;
        #endregion

        #region Constructor
        public ExpenseRepository(SplitwiseContext context)
        {
            this.context = context;
        }

        public async Task<UserInExpense> AddUser(UserInExpense userInExpense,int expId)
        {

            //int expId = GetExpenseId(userInExpense.Date);
            List<UserExpense> list = new List<UserExpense>();
            foreach (var i in userInExpense.GroupUsersExpenses)
            {
                UserExpense userExpense = new UserExpense();
                userExpense.ExpId = expId;
                userExpense.UsersId = i.UserId;
                userExpense.SplitAmount = i.Amount;
                list.Add(userExpense);
            }
            await context.UserExpenses.AddRangeAsync(list);
            return userInExpense;
        }

        private int GetExpenseId(DateTime dateTime)
        {
            int id = context.Expense.FirstOrDefault(e => e.Date == dateTime).Id;
            return id;
        }
        #endregion

        #region Public method
        public async Task<Expense> CreateExpense(UserInExpense userInExpense,string userId)
        {
            Expense exp = new Expense();
            exp.CreaterId = userInExpense.CreaterId;
            exp.Cost = userInExpense.Cost;
            exp.Date = userInExpense.Date;
            exp.Description = userInExpense.Description;
            exp.Split = userInExpense.Split;
            exp.PaidbyId = userInExpense.PaidbyId;
            exp.GrpId = userInExpense.GrpId;
          

            var grp = context.Group.Find(userInExpense.GrpId);
            Activity activity = new Activity();
            activity.UserId = userId;
            activity.Description = "Created Expense in group :" + grp.GroupName;

            await context.Expense.AddAsync(exp);
            await context.Activity.AddAsync(activity);
            return exp;
        }

        public void EditExpense(int id, Expense expense)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Expense> GetAllExpenses()
        {
            var expense = context.Expense.
                          Include(e=>e.Group).
                          Include(e=>e.CreaterExpense).
                          Include(e=>e.Paiduser).

                            ToList();
            return expense;
        }

        public UserInExpense GetExpenseID(int id)
        {
            var userExpense = context.UserExpenses.Where(x => x.ExpId == id).
                            Include(x => x.User).
                            Include(x => x.Expense).
                            ThenInclude(x => x.Group).
                            ThenInclude(x => x.Category).
                            ToList();
            UserInExpense userInExpense = new UserInExpense();
            userInExpense.Cost = userExpense[0].Expense.Cost;
            userInExpense.Description = userExpense[0].Expense.Description;
            userInExpense.Date = userExpense[0].Expense.Date;
            userInExpense.CreaterId = userExpense[0].Expense.CreaterId;
            userInExpense.GrpId = userExpense[0].Expense.Group.Id;
            userInExpense.PaidbyId = userExpense[0].Expense.Paiduser.Id;
            userInExpense.Split = userExpense[0].Expense.Split;
            userInExpense.Id = userExpense[0].Expense.Id;
            userInExpense.GroupUsersExpenses = new List<GroupUsersExpensesAC>();
            foreach (var i in userExpense)
            {
                GroupUsersExpensesAC groupUsersExpensesAC = new GroupUsersExpensesAC();
                groupUsersExpensesAC.UserId = i.User.Id;
                groupUsersExpensesAC.Amount = i.SplitAmount;
                userInExpense.GroupUsersExpenses.Add(groupUsersExpensesAC);
            }
            return userInExpense;
        }
       
        #endregion

    }
}
