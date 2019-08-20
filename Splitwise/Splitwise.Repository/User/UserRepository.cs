using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository.User
{
    class UserRepository : IUserRepository
    {

        #region Private Variables
        private readonly SplitwiseContext context;
        #endregion

        #region Constructors                
        public UserRepository(SplitwiseContext context)
        {
            this.context = context;
        }
        #endregion

        #region Public method
        public void AddFriend(int id,ApplicationUser user)
        {
            throw new NotImplementedException();
        }

        public void Createuser(ApplicationUser user)
        {
            throw new NotImplementedException();
        }
  
        public void EditUSer(ApplicationUser user)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ApplicationUser> getAllUsers()
        {
            throw new NotImplementedException();
        }
     
        public ApplicationUser GetUserbyID(int id)
        {
            throw new NotImplementedException();
        }
       
        public async Task Save()
        {
            await context.SaveChangesAsync();
        }

              
        public IEnumerable<Friend> ShowFriend(int userId)
        {
            throw new NotImplementedException();
        }
    
        public IEnumerable<GroupRepository> ShowGroup(int userId)
        {
            throw new NotImplementedException();
        }
        #endregion
    }
}
