using Splitwise.Repository.User;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository.UnitOfWork
{
    public interface IUnitofwork
    {
        IUserRepository UserRepository { get; }
        IExpenseRepository ExpenseRepository { get; }
        IGroupRepository GroupRepository { get; }
        ISettlementRepository SettlementRepository { get; }
        Task Save();
    }
}
