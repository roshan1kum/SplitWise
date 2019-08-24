using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public async Task<GroupMembers> AddMembers(GroupMembers grp)
        {
            await context.GroupMembers.AddAsync(grp);
            return grp;
        }

        public async Task<Group> CreateGroup(Group group)
        {
            await context.Group.AddAsync(group);
            return group;
        }

        public async Task<Group> Deletegroup(int id)
        {
            var groups = await context.Group.FindAsync(id);
            if (groups != null)
            {
                context.Remove(groups);
            }
            return groups;
        }

        public IEnumerable<Group> GetAllGroups()
        {
            //var aa = context.Group.Include(c => c.Category).ToList();

            //var B = context.Group.FirstOrDefault(); 
            var grp = context.Group.Include(c => c.Category).
                                   Include(c => c.CreaterGroup).
                                   ToList();
            return grp;
        }

        public async Task<IEnumerable<UserExpense>> GetGroupsId(int id)
        {
            //var groups = await context.group.
            //             include(c=>c.category).
            //             include(c=>c.creatergroup).
            //             firstordefaultasync(x => x.id == id);
            //var groups = await context.Group.FirstOrDefaultAsync(x => x.Id == id);
            //int grpId = groups.Id;
            var exp = await context.Expense.FirstOrDefaultAsync(e=>e.GrpId==id);
            //var expense = await context.Expense.
            //              Include(x=>x.Paiduser).
            //              Include(x => x.CreaterExpense).
            //              FirstOrDefaultAsync(x => x.GrpId == grpId);

            var userExpense = context.UserExpenses.Where(x => x.ExpId == exp.Id).
                                Include(x=>x.User).
                                Include(x => x.Expense).
                                ThenInclude(x=>x.Group).
                                ThenInclude(x=>x.Category);
                                
            return userExpense;
        }

        #endregion
    }
}
