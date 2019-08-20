using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository
{
    public interface IGroupRepository
    {
        void CreateGroup(Group group);
        IEnumerable<Group> getAllGroups();
        void AddMembers(int grpId,ApplicationUser user);
        void deletegroup(int id);
        Group getGroupsId(int id)
        
    }
}
