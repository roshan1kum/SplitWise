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
    public class ExpenseController:Controller
    {
        #region Private variables
        private readonly IUnitofwork unitofwork;
        #endregion

        #region Constructor
        public ExpenseController(IUnitofwork unitofwork)
        {
            this.unitofwork = unitofwork;
        }
        #endregion

        #region Public method
        [HttpPost]
        public async Task<IActionResult> CreateExpense([FromBody] UserInExpense userInExpense)
        {
            if(ModelState.IsValid)
            {
                await unitofwork.ExpenseRepository.CreateExpense(userInExpense);
                await unitofwork.Save();

                await unitofwork.ExpenseRepository.AddUser(userInExpense);
                await unitofwork.Save();

            }
            return Ok(userInExpense);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditExpense([FromRoute] int id,[FromBody]Expense expense)
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
        public IActionResult GetExpenseId([FromRoute] int id)
        {
            var expense = unitofwork.ExpenseRepository.GetExpenseID(id);
            if(expense==null)
            {
                return NotFound();
            }
            return Ok(expense);
        }

        [HttpGet]
        public IEnumerable<Expense> GetAllExpense()
        {
            return unitofwork.ExpenseRepository.GetAllExpenses();
        }

        #endregion


    }

}
