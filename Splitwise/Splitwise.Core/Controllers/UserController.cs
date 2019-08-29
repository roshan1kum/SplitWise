using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Splitwise.DomainModel.Model;
using Splitwise.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Splitwise.Repository.ApplicationClasses;
using Splitwise.Repository.AplicationClasses;

namespace Splitwise.Core.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    public class UserController : Controller
    {
        private readonly IUnitofwork unitofwork;

        public UserController(IUnitofwork unitofwork)
        {
            this.unitofwork = unitofwork;
        }

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Create([FromBody] ApplicationUser user)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        unitofwork.UserRepository.Createuser(user);
        //        await unitofwork.Save();
        //    }
        //    return Ok(user);
        //}

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit([FromRoute] string id, [FromBody] ApplicationUserAc user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
           unitofwork.UserRepository.EditUSer(id,user);
            try
            {
                await unitofwork.Save();
            }
            catch (DbUpdateConcurrencyException)
            {

            }
            return NoContent();
        }
        [HttpGet("{id}")]
       // [Route("Getuser/{id}")]
        public IActionResult GetUserbyId([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = unitofwork.UserRepository.GetUserbyID(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
        [HttpGet]
        public IEnumerable<ApplicationUserAc> GetAllUsers()
        {
            return unitofwork.UserRepository.GetAllUsers();
        }
      
       // [HttpPost("{id}")]
        [Route("AddFriend/{yourId}/{FriendId}")]
        public async Task<IActionResult> AddFriend([FromRoute] string yourId,[FromRoute] string FriendId)
        {
            if (ModelState.IsValid)
            {
                await unitofwork.UserRepository.AddFriend(FriendId,yourId);
                await unitofwork.Save();
            }
            return Ok();
        }
        [Route("CreateFriendExpense")]
        public async Task<IActionResult> CreateFriendExpenses([FromBody]FriendExpensesData data)
        {
            if(ModelState.IsValid)
            {
                await unitofwork.UserRepository.CreateFriendExpense(data);
                await unitofwork.Save();

                await unitofwork.UserRepository.AddFriendBill(data);
                await unitofwork.Save();
            }
            return Ok(data);
        }
        // [HttpGet("{id}")]
        [Route("ShowFriendExpense/{id}")]
        public IEnumerable<FriendBillAC> ShowFriendExpense([FromRoute] string id)
        {
            return unitofwork.UserRepository.ShowFriend(id);
        }
    }
}
