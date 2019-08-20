using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
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
        #endregion

        #region Public method
        public void CreateExpense()
        {
            throw new NotImplementedException();
        }
     
      
        public void EditExpense(int id,ExpenseRepository expense)
        {
            throw new NotImplementedException();
        }
       
        public IEnumerable<ExpenseRepository> GetAllExpenses()
        {
            throw new NotImplementedException();
        }
        
        public ExpenseRepository getExpenseID(int id)
        {
            throw new NotImplementedException();
        }
        #endregion

    }
}
