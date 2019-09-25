using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Splitwise.DomainModel.Model;
using Splitwise.Repository.AplicationClasses;
using Splitwise.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Core.Controllers
{
    [Produces("application/json")]
    [Route("api/Groups")]

    public class GroupController : Controller
    {
        #region Private Variable
        private readonly IUnitofwork unitofwork;
        private readonly UserManager<ApplicationUser> userManager;
        #endregion

        #region Constructor
        public GroupController(IUnitofwork unitofwork,UserManager<ApplicationUser> userManager)
        {
            this.unitofwork = unitofwork;
            this.userManager = userManager;
        }
        #endregion

        #region Public method
        [HttpPost]
        public async Task<IActionResult> CreateGroups([FromBody] Group group)
        {
            await unitofwork.GroupRepository.CreateGroup(group);
            await unitofwork.Save();
            GroupMembers g = new GroupMembers();
            g.GrpId = group.Id;
            g.UserID = group.CreatorId;
            await unitofwork.GroupRepository.AddMembers(g);
            await unitofwork.Save();
            return CreatedAtAction("GetAllGroup", new { id = group.Id }, group);
        }

        [Route("GetAllGroupsId/{id}")]
        public IEnumerable<Group> GetAllGroupId([FromRoute] string id)
        {
            return unitofwork.GroupRepository.GetAllGroupsId(id);
        }
        [Route("GetAllGroupsMembersId/{id}")]
        public IEnumerable<Group> GetAllGroupsMembersId([FromRoute] string id)
        {
            return unitofwork.GroupRepository.GetAllGroupsMembersId(id);
        }

        [Route("AddMembers")]
        public async Task<IActionResult> AddMemebers([FromBody] GroupMembers grp)
        {
            await unitofwork.GroupRepository.AddMembers(grp);
            await unitofwork.Save();
            return Ok(grp);
        }
        [Route("AddMembersList")]
        public async Task<IActionResult> AddMembersList([FromBody] GroupMembersAC groupMembersAC)
        {
            var username = User.Identity.Name;
            ApplicationUser user = await userManager.FindByNameAsync(username);
            if (ModelState.IsValid)
            {
                List<string> MemberId = groupMembersAC.UserId;
                int grpId = groupMembersAC.GrpId;
                await unitofwork.GroupRepository.AddMembersList(grpId, MemberId,user.Id);
                await unitofwork.Save();
            }
            return Ok(groupMembersAC);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGroup([FromRoute] int id)
        {
            var username=User.Identity.Name;
            ApplicationUser user = await userManager.FindByNameAsync(username);

            var groups = await unitofwork.GroupRepository.GetGroupsId(id);
            await unitofwork.GroupRepository.Deletegroup(id,user.Id);
            await unitofwork.Save();
            return Ok();
        }

        [HttpGet("{id}")]
        public IDictionary<int, List<GroupExpenseAC>> GetGroupExpenseId([FromRoute]  int id)
        {
            var grp = unitofwork.GroupRepository.GetGroupsExpenseId(id);
            return grp;
        }

        [Route("GetMembers/{id}")]
        public IEnumerable<GroupMemberDetailAC> GetMembers([FromRoute] int id)
        {
            return unitofwork.GroupRepository.GetAllMembers(id);
        }
        [Route("GetGroups/{id}")]
        public async Task<Group> GetGroupsId([FromRoute] int id)
        {
            return await unitofwork.GroupRepository.GetGroupsId(id);
        }
               
        #endregion

    }
}
