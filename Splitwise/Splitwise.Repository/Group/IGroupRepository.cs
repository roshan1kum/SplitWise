using Splitwise.DomainModel.Model;
using Splitwise.Repository.AplicationClasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository
{
    public interface IGroupRepository
    {
        Task<Group> CreateGroup(Group group);
        Task<GroupMembers> AddMembers(GroupMembers grp);
        Task<Group> Deletegroup(int id);
        IEnumerable<GroupExpenseAC> GetGroupsId(int id);
        Task AddMembersList(int grpId,List<string> MemberId);
        IEnumerable<GroupMemberDetailAC> GetAllMembers(int id);
        IEnumerable<Group> GetAllGroupsId(string id);
        IEnumerable<Group> GetAllGroupsMembersId(string id);
    }
}
