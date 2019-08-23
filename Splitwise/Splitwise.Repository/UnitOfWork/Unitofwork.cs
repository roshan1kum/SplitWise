using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Splitwise.DomainModel.Model;
using Splitwise.Repository.User;

namespace Splitwise.Repository.UnitOfWork
{
    public class Unitofwork : IUnitofwork
    {
        #region Private Variables
        private SplitwiseContext Context;
        private IUserRepository userRepository;
        private IExpenseRepository expenseRepository;
        private IGroupRepository groupRepository;
        private ISettlementRepository settlementRepository;
        #endregion

        #region Constructors
        public Unitofwork(SplitwiseContext context)
        {
            this.Context = context; 
        }
        #endregion

        #region Properties
        public IUserRepository UserRepository
        {
            get
            {
                return userRepository = new UserRepository(Context);
            }
        }

        public IExpenseRepository ExpenseRepository
        {
            get
            {
                return expenseRepository = new ExpenseRepository(Context);
            }
        }

        public IGroupRepository GroupRepository
        {
            get
            {
                return groupRepository = new GroupRepository(Context);
            }
        }

        public ISettlementRepository SettlementRepository
        {
            get
            {
                return settlementRepository = new SettlementRepository(Context);
            }
        }
        #endregion

        #region Public method
        public async Task Save()
        {
            await Context.SaveChangesAsync();
        }
        #endregion
    }
}
