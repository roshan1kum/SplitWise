using Microsoft.AspNetCore.Mvc;
using Splitwise.DomainModel.Model;
using Splitwise.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Core.Controllers
{
    public class GroupController:Controller
    {
        #region Private Variable
        private readonly SplitwiseContext context;
        private readonly IUnitofwork unitofwork;
        #endregion

        #region Constructor
        public GroupController(IUnitofwork unitofwork)
        {
            this.unitofwork = unitofwork;
        }
        #endregion

        [HttpPost]
        public async Task<IActionResult> CreateGroups([FromBody] Group group)
        {
            unitofwork.groupRepository.CreateGroup(group);
            await unitofwork.Save();
            return Ok(group);
        }

        [HttpGet]
        public IEnumerable<Group> GetAllGroup()
        {
            return unitofwork.groupRepository.getAllGroups();
        }

        [HttpPost]
        public async Task<IActionResult> AddMemebers([FromRoute]int id,[FromBody] ApplicationUser user)
        {
            unitofwork.groupRepository.AddMembers(id, user);
            await unitofwork.Save();
            return Ok(user);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteGroup([FromRoute] int id)
        {
            var groups = unitofwork.groupRepository.getGroupsId(id);
            unitofwork.groupRepository.deletegroup(id);
            await unitofwork.Save();
            return Ok(groups);
           
        }

    }
}
