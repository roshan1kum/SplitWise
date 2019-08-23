using Microsoft.AspNetCore.Mvc;
using Splitwise.DomainModel.Model;
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
        #endregion

        #region Constructor
        public GroupController(IUnitofwork unitofwork)
        {
            this.unitofwork = unitofwork;
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

        [HttpGet]
        public IEnumerable<Group> GetAllGroup()
        {
            return unitofwork.GroupRepository.GetAllGroups();
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> AddMemebers([FromRoute]int id, [FromBody] GroupMembers grp)
        {
            await unitofwork.GroupRepository.AddMembers(grp);
            await unitofwork.Save();
            return Ok(grp);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGroup([FromRoute] int id)
        {
            var groups = await unitofwork.GroupRepository.GetGroupsId(id);
            await unitofwork.GroupRepository.Deletegroup(id);
            await unitofwork.Save();
            return Ok(groups);
           
        }

        [HttpGet("{id}")]
        public async Task<Group> GetGroupId([FromRoute]  int id)
        {
            var grp = await unitofwork.GroupRepository.GetGroupsId(id);
            return grp;
        }
        #endregion

    }
}
