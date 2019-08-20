using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository
{
    public class GroupRepository : IGroupRepository
    {
        #region Private variables
        private readonly SplitwiseContext context;
        #endregion

        #region Constructor
        public GroupRepository(SplitwiseContext context)
        {
            this.context = context;
        }
        #endregion

        #region Public method
        public void AddMembers(int grpId, ApplicationUser user)
        {
            throw new NotImplementedException();
        }

        public void CreateGroup(Group group)
        {
            throw new NotImplementedException();
        }

        public void Deletegroup(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Group> GetAllGroups()
        {
            throw new NotImplementedException();
        }

        public Group GetGroupsId(int id)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
