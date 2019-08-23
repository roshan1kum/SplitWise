using Microsoft.EntityFrameworkCore;
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
        private readonly SplitwiseContext Context;
        #endregion

        #region Constructors                
        public UserRepository(SplitwiseContext Context)
        {
            this.Context = Context;
        }
        #endregion

        #region Public method
        public void AddFriend(int id,ApplicationUser user)
        {
            throw new NotImplementedException();

        }

        public void Createuser(ApplicationUser user)
        {
            Context.Add(user);
        }
  
        public void EditUSer(ApplicationUser user)
        {
            Context.Entry(user).State = EntityState.Modified;
        }

        public IEnumerable<ApplicationUser> GetAllUsers()
        {
            throw new NotImplementedException();
        }
     
        public async Task<ApplicationUser> GetUserbyID(int id)
        {
            return await Context.ApplicationUser.FindAsync(id);
        }
       
        public async Task Save()
        {
            await Context.SaveChangesAsync();
        }

              
        public IEnumerable<Friend> ShowFriend(int userId)
        {
            throw new NotImplementedException();
        }
    
       
        #endregion
    }
}
