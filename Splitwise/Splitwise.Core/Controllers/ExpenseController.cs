﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Model;
using Splitwise.Repository.ApplicationClasses;
using Splitwise.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Core.Controllers
{
    [Produces("application/json")]
    [Route("api/Expense")]
    //[Authorize]
    public class ExpenseController:Controller
    {
        #region Private variables
        private readonly IUnitofwork unitofwork;
        private readonly UserManager<ApplicationUser> userManager;
        #endregion

        #region Constructor
        public ExpenseController(IUnitofwork unitofwork, UserManager<ApplicationUser> userManager)
        {
            this.unitofwork = unitofwork;
            this.userManager = userManager;
        }
        #endregion

        #region Public method
        [HttpPost]
        public async Task<IActionResult> CreateExpense([FromBody] UserInExpense userInExpense)
        {
            if(ModelState.IsValid)
            {
                var username = User.Identity.Name;
                ApplicationUser user = await userManager.FindByNameAsync(username);
                var exp=await unitofwork.ExpenseRepository.CreateExpense(userInExpense,user.Id);
                await unitofwork.Save();

                await unitofwork.ExpenseRepository.AddUser(userInExpense,exp.Id);
                await unitofwork.Save();
            }
            return Ok(userInExpense);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditExpense([FromRoute] int id,[FromBody]UserInExpense expense)
            {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            unitofwork.ExpenseRepository.EditExpense(id,expense);
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
        public UserInExpense GetExpenseId([FromRoute] int id)
        {
            var expense =  unitofwork.ExpenseRepository.GetExpenseID(id);
            
            return expense;
        }

        [HttpGet]
        public IEnumerable<Expense> GetAllExpense()
        {
            return unitofwork.ExpenseRepository.GetAllExpenses();
        }
        [HttpDelete("{expId}")]
        public async Task<IActionResult> DeleteExpense(int expId)
        {
            await unitofwork.ExpenseRepository.Delete(expId);
            await unitofwork.Save();
            return Ok(); 
        }

        #endregion


    }

}
