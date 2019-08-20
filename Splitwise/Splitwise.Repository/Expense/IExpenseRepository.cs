using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository
{
    public interface IExpenseRepository
    {
        void CreateExpense();
        IEnumerable<ExpenseRepository> GetAllExpenses();
        void EditExpense(int id,Expense expense);
        ExpenseRepository GetExpenseID(int id);
     
    }
}
