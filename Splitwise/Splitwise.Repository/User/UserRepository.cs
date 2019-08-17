using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.User
{
    class UserRepository : IUserRepository
    {
        private readonly SplitwiseContext context;

        public UserRepository(SplitwiseContext context)
        {
            this.context = context;
        }
        public void createuser(ApplicationUser user)
        {
            throw new NotImplementedException();
        }
    }
}
