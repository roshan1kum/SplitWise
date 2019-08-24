using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository
{
    public interface IGroupRepository
    {
        Task<Group> CreateGroup(Group group);
        IEnumerable<Group> GetAllGroups();
        Task<GroupMembers> AddMembers(GroupMembers grp);
        Task<Group> Deletegroup(int id);
        Task<IEnumerable<UserExpense>> GetGroupsId(int id);
        
    }
}
