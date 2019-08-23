using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository.User
{
    public interface IUserRepository
    {
        void Createuser(ApplicationUser user);
        void EditUSer(ApplicationUser user);
        Task<ApplicationUser> GetUserbyID(int id);
        IEnumerable<ApplicationUser> GetAllUsers();
        IEnumerable<Friend> ShowFriend(int userId);
        void AddFriend(int id,ApplicationUser user);
       

    }
}
