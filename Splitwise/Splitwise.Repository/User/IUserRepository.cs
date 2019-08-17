using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.User
{
    public interface IUserRepository
    {
        void createuser(ApplicationUser user);
    }
}
