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
        ApplicationUser GetUserbyID(int id);
        IEnumerable<ApplicationUser> getAllUsers();
        IEnumerable<Friend> ShowFriend(int userId);
        //IEnumerable<Group> ShowGroup(int userId);
        void AddFriend(int id,ApplicationUser user);
       // void AddGroup(ApplicationUser user);
       

       
    }
}
