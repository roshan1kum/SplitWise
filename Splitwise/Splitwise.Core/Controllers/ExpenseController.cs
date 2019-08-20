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
        public async Task<IActionResult> CreateExpense([FromBody] Expense expense)
        {
            if(ModelState.IsValid)
            {
                unitofwork.expenseRepository.CreateExpense();
                await unitofwork.Save();
            }
            return Ok(expense);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditExpense([FromRoute] int id,[FromBody]Expense expense)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            unitofwork.expenseRepository.EditExpense(id,expense);
            try
            {
                await unitofwork.Save();
            }
            catch (DbUpdateConcurrencyException)
            {

            }
            return NoContent();
        }

        [HttpGet]
        public IActionResult GetExpenseId([FromRoute] int id)
        {
            var expense = unitofwork.expenseRepository.getExpenseID(id);
            if(expense==null)
            {
                return NotFound();
            }
            return Ok(expense);
        }
        #endregion


    }

}
