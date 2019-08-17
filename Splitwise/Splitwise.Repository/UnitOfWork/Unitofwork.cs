using System;
using System.Collections.Generic;
using System.Text;
using Splitwise.DomainModel.Model;
using Splitwise.Repository.User;

namespace Splitwise.Repository.UnitOfWork
{
    public class Unitofwork : IUnitofwork
    {
        private IUserRepository Userrepository;
        private SplitwiseContext context;
        public Unitofwork(SplitwiseContext context)
        {
            this.context = context; 
        }

        IUserRepository IUnitofwork.userRepository => throw new NotImplementedException();

        public IUserRepository userRepository
        {
            get
            {
                return Userrepository = new UserRepository(context);
            }
        }
    }
}
