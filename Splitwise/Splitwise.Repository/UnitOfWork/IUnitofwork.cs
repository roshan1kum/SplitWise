using Splitwise.Repository.User;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository.UnitOfWork
{
    public interface IUnitofwork
    {
        IUserRepository userRepository { get; }
        IExpenseRepository expenseRepository { get; }
        IGroupRepository groupRepository { get; }
        ISettlement settlementRepository { get; }
        Task Save();
    }
}
