using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Model;
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

        public async Task<UserInExpense> AddUser(UserInExpense userInExpense)
        {

            int expId = GetExpenseId(userInExpense.Date);
            List<UserExpense> list = new List<UserExpense>();
            foreach (var i in userInExpense.GroupUsersExpenses)
            {
                UserExpense userExpense = new UserExpense();
                userExpense.ExpId = expId;
                userExpense.UsersId = i.UserId;
                userExpense.SplitAmount = i.Price;
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
        public async Task<Expense> CreateExpense(UserInExpense userInExpense)
        {
            Expense exp = new Expense();
            exp.CreaterId = userInExpense.CreaterId;
            exp.Cost = userInExpense.Cost;
            exp.Date = userInExpense.Date;
            exp.Description = userInExpense.Description;
            exp.Split = userInExpense.Split;
            exp.PaidbyId = userInExpense.PaidbyId;
            exp.GrpId = userInExpense.GrpId;
            await context.Expense.AddAsync(exp);
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

        public async Task<Expense> GetExpenseID(int id)
        {
            Expense expense=await context.Expense.
                            Include(e=>e.Paiduser).
                            Include(e=>e.CreaterExpense).
                            Include(e=>e.Group).
                            FirstOrDefaultAsync(e => e.Id == id);
            return expense;
        }
       
        #endregion

    }
}
