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

        public Task<UserExpense> AddUser(UserInExpense user)
        {
            throw new NotImplementedException();
        }
        #endregion

        #region Public method
        public async Task<Expense> CreateExpense(Expense expense)
        {
            await context.Expense.AddAsync(expense);
            return expense;
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
            Expense expense=await context.Expense.FirstOrDefaultAsync(e => e.Id == id);
            return expense;
        }
        #endregion

    }
}
