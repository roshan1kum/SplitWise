using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Model;
using Splitwise.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Core.Controllers
{
    public class UserController : Controller
    {

        private readonly Unitofwork unitofwork;

        public UserController(Unitofwork unitofwork)
        {
            this.unitofwork = unitofwork;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([FromBody] ApplicationUser user)
        {
            if (ModelState.IsValid)
            {
                unitofwork.UserRepository.Createuser(user);
                await unitofwork.Save();
            }
            return Ok(user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit([FromRoute] int id, [FromBody] ApplicationUser user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            unitofwork.UserRepository.EditUSer(user);
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
        public IActionResult GetUserbyId([FromRoute] int id)
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
        public IEnumerable<ApplicationUser> GetAllUsers()
        {
            return unitofwork.UserRepository.GetAllUsers();
        }
        [HttpGet("{id}")]
        public IEnumerable<Friend> ShowFriend([FromRoute] int id)
        {
            return unitofwork.UserRepository.ShowFriend(id);
        }
        [HttpPost("{id}")]
        public async Task<IActionResult> AddFriend([FromRoute] int id,[FromBody] ApplicationUser user)
        {
            if (ModelState.IsValid)
            {
                unitofwork.UserRepository.AddFriend(id, user);
                await unitofwork.Save();
            }
            return Ok(user);
        }



    }
}
