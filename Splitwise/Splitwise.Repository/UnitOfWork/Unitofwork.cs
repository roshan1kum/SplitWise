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
        private IUserRepository Userrepository;
        private SplitwiseContext context;
        private IExpenseRepository ExpenseRepository;
        private IGroupRepository GroupRepository;
        private ISettlement SettlementRepository;
        #endregion

        #region Constructors
        public Unitofwork(SplitwiseContext context)
        {
            this.context = context; 
        }
        #endregion

        #region Properties
        public IUserRepository userRepository
        {
            get
            {
                return Userrepository = new UserRepository(context);
            }
        }

        public IExpenseRepository expenseRepository
        {
            get
            {
                return ExpenseRepository = new ExpenseRepository(context);
            }
        }

        public IGroupRepository groupRepository
        {
            get
            {
                return GroupRepository = new GroupRepository(context);
            }
        }

        public ISettlement settlementRepository
        {
            get
            {
                return SettlementRepository = new Settlement(context);
            }
        }
        #endregion

        #region Public method
        public Task Save()
        {
            throw new NotImplementedException();
        }
        #endregion
    }
}
