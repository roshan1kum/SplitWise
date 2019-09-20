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
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

namespace Splitwise.Core.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    //[Authorize]
    public class UserController : Controller
    {
        private readonly IUnitofwork unitofwork;
        private readonly UserManager<ApplicationUser> userManager;

        public UserController(IUnitofwork unitofwork,UserManager<ApplicationUser> userManager)
        {
            this.unitofwork = unitofwork;
            this.userManager = userManager;
        }
        

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit([FromRoute] string id, [FromBody] ApplicationUserAc user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await unitofwork.UserRepository.EditUSer(id,user);
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
        [Route("AddFriend")]
        public async Task<IActionResult> AddFriend([FromBody] FriendAC Id)
        {
            if (ModelState.IsValid)
            {
                List<string> FriendId = Id.FriendId;
                string yourId = Id.yourId;
                unitofwork.UserRepository.AddFriend(FriendId,yourId);
                await unitofwork.Save();
            }
            return Ok();
        }
        [Route("CreateFriendExpense")]
        public async Task<IActionResult> CreateFriendExpenses([FromBody]FriendExpensesData data)
        {
            if(ModelState.IsValid)
            {
                unitofwork.UserRepository.CreateFriendExpense(data);
                await unitofwork.Save();

                unitofwork.UserRepository.AddFriendBill(data);
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

        [HttpGet]
        [Route("CurrentUser")]
        public async Task<IActionResult> GetCurrentUser()
        {
            var username = User.Identity.Name;
            ApplicationUser user = await userManager.FindByNameAsync(username);
           
            return Ok(unitofwork.UserRepository.GetCurentUser(user));
        }

        [HttpGet]
        [Route("GetFriend/{userId}")]
        public IEnumerable<ApplicationUserAc> GetFriend([FromRoute] string userId)
        {

            return unitofwork.UserRepository.GetFriend(userId);
        }
        [HttpGet]
        [Route("GetGroups/{userId}")]
        public IEnumerable<Group> GetGroups([FromRoute] string userId)
        {
            return unitofwork.UserRepository.GetGroups(userId);
        }
        [HttpGet]
        [Route("Category")]
        public IEnumerable<Category> GetCategory()
        {
            return unitofwork.UserRepository.GetCategory();
        }
        [HttpGet]
        [Route("Activity/{id}")]
        public IEnumerable<Activity> GetActivity([FromRoute]string id)
        {
            return unitofwork.UserRepository.GetActivity(id);
        }
        [HttpDelete]
        [Route("Unfriend/{id}/{FriendId}")]
        public IActionResult UnFriend([FromRoute]string id,[FromRoute]string FriendId)
        {
            unitofwork.UserRepository.UnFriend(id,FriendId);
            unitofwork.Save();
            return Ok();
        }
    }
}
