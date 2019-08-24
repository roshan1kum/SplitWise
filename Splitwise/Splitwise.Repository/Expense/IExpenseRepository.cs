using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository
{
    public interface IExpenseRepository
    {
        Task<Expense> CreateExpense(UserInExpense userInExpense);
        IEnumerable<Expense> GetAllExpenses();
        void EditExpense(int id,Expense expense);
        Task<Expense> GetExpenseID(int id);
        Task<UserInExpense> AddUser(UserInExpense exp);
    }
}
