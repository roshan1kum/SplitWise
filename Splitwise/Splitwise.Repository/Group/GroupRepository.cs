using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Model;
using Splitwise.Repository.AplicationClasses;
using System;
using System.Collections.Generic;
using System.Collections;
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

        public async Task AddMembersList(int grpId, List<string> MemberId,string userId)
        {
            List<GroupMembers> list = new List<GroupMembers>();
            List<Activity> activity = new List<Activity>();
            foreach(var i in MemberId)
            {
                GroupMembers g = new GroupMembers();
                Activity acc = new Activity();
                g.GrpId = grpId;
                g.UserID = i;
                var user = context.Users.Find(i);
                acc.UserId = userId;
                acc.Description = "Added Members:" + user.Name;
                activity.Add(acc);
                list.Add(g);
            }
            //Activity activity = new Activity();
            //activity.UserId=
            await context.Activity.AddRangeAsync(activity);

            await context.GroupMembers.AddRangeAsync(list);
        }

        public async Task<Group> CreateGroup(Group group)
        {
            await context.Group.AddAsync(group);
            Activity activity = new Activity();
            activity.Description = "Added Group :" + group.GroupName;
            activity.UserId = group.CreatorId;
            await context.Activity.AddAsync(activity);
            return group;
        }

        public async Task<Group> Deletegroup(int id,string userId)
        {
            var groups = await context.Group.FindAsync(id);
            List<Expense> expense = context.Expense.Where(x => x.GrpId == groups.Id).ToList();
            var groupmembers = context.GroupMembers.Where(x => x.GrpId == groups.Id);           
            //IEnumerable<UserExpense> bills = context.UserExpenses.Where(x => x.ExpId == expense.Id);            
            if (groups != null)
            {
                foreach (var i in expense)
                {
                    List<UserExpense> bill = context.UserExpenses.Where(x => x.ExpId == i.Id).ToList();
                    foreach (var j in bill)
                    {
                        context.UserExpenses.Remove(j);
                    }
                    context.Expense.Remove(i);
                }
                foreach (var i in groupmembers)
                {
                    context.GroupMembers.Remove(i);
                }
                context.Remove(groups);
            }
            Activity activity = new Activity();
            activity.Description = "Deleted Groups:" + groups.GroupName;
            activity.UserId = userId;
            await context.Activity.AddAsync(activity);
            return groups;
        }

        public IEnumerable<Group> GetAllGroupsId(string id)
        {

            var grp = context.Group.Where(x => x.CreatorId == id);
            return grp.AsEnumerable();

        }
        public IEnumerable<Group> GetAllGroupsMembersId(string id)
        {
            var grp = context.GroupMembers.Where(x => x.UserID == id).Include(x => x.Group).Include(x=>x.User);
            List<Group> List = new List<Group>();
            foreach(var i in grp)
            {
                Group grps = new Group();
                grps.Id = i.GrpId;
                grps.GroupName = i.Group.GroupName;
                grps.CreatedDate = i.Group.CreatedDate;                
                List.Add(grps);
            }            
            return List.AsEnumerable();
        }

            public IEnumerable<GroupMemberDetailAC> GetAllMembers(int id)
            {
            List<GroupMembers> mem = context.GroupMembers.Where(x => x.GrpId == id).
                                                            Include(x=>x.Group).
                                                            Include(x=>x.User).ToList();
            List<GroupMemberDetailAC> List = new List<GroupMemberDetailAC>();
            foreach(var i in mem)
            {
                GroupMemberDetailAC groupMemberDetail = new GroupMemberDetailAC();
                groupMemberDetail.CreatedDate = i.Group.CreatedDate;
                groupMemberDetail.CreaterName = i.Group.CreaterGroup.Name;
                groupMemberDetail.grpId = i.Group.Id;
                groupMemberDetail.MemberName = i.User.Name;
                groupMemberDetail.UserId = i.User.Id;
                List.Add(groupMemberDetail);
            }
            return List;
        }

        public IDictionary<int, List<GroupExpenseAC>> GetGroupsExpenseId(int id)
        {
            var exp = context.Expense.Where(e=>e.GrpId==id);
            List<GroupExpenseAC> list = new List<GroupExpenseAC>();
            IDictionary<int, List<GroupExpenseAC>> dictionary = new Dictionary<int, List<GroupExpenseAC>>();
            foreach (var i in exp)
            {
                var userExpense = context.UserExpenses.Where(x => x.ExpId == i.Id).
                               Include(x => x.User).
                               Include(x => x.Expense).
                               ThenInclude(x=>x.Paiduser)
                               .Include(x => x.Expense).ThenInclude(x=>x.Group).                            
                               ThenInclude(x => x.Category).
                             
                               ToList();
                foreach(var j in userExpense)
                {
                    GroupExpenseAC groupExpenseAC = new GroupExpenseAC();
                    groupExpenseAC.SplitAmount = j.SplitAmount;
                    groupExpenseAC.description = j.Expense.Description;
                    groupExpenseAC.CreaterExpense = j.Expense.CreaterExpense.Name;
                    groupExpenseAC.TotalAmount = j.Expense.Cost;
                    groupExpenseAC.Date = j.Expense.Date;
                    groupExpenseAC.GroupName = j.Expense.Group.GroupName;
                    groupExpenseAC.CategoryName = j.Expense.Group.Category.Name;
                    groupExpenseAC.CreaterGroupName= j.Expense.Group.CreaterGroup.Name;
                    groupExpenseAC.ExpensePaidBy = j.Expense.Paiduser.Name;
                    groupExpenseAC.ExpenseUserName = j.User.Name;
                    groupExpenseAC.ExpId = j.Expense.Id;
                    list.Add(groupExpenseAC);
                }            
            }
            
            //Hashtable hashtable = new Hashtable();
            foreach (var i in list)
            {
                if (dictionary.ContainsKey(i.ExpId))
                {
                    List<GroupExpenseAC> a = new List<GroupExpenseAC>();
                    a = dictionary[i.ExpId];
                    a.Add(i);
                    dictionary[i.ExpId] = a;
                }
                else
                {
                    List<GroupExpenseAC> a = new List<GroupExpenseAC>();
                    a.Add(i);
                    dictionary.Add(i.ExpId,a);
                }

            }
            return dictionary;
        }

        public async Task<Group> GetGroupsId(int id)
        {
            //var exp=context.Expense.First(x=>x.GrpId==id)
            var group = await  context.Group.FirstAsync(x => x.Id == id);
            return group;
        }


        #endregion
    }
}
