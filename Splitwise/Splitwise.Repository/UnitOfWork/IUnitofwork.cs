using Splitwise.Repository.User;
using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.UnitOfWork
{
    public interface IUnitofwork
    {
        IUserRepository userRepository { get; }
    }
}
