using Microsoft.AspNetCore.Mvc;
using Splitwise.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Core.Controllers
{
   public class Settlement:Controller
    {
        #region Private variable
        private readonly IUnitofwork unitofwork;
        #endregion

        #region Constructor
        public Settlement(IUnitofwork unitofwork)
        {
            this.unitofwork = unitofwork;
        }
        #endregion

        public async Task<IActionResult> Create([FromRoute] int id,[FromBody]int amount)
        {
            unitofwork.settlementRepository.createSettlement(id,amount);
            await unitofwork.Save();
            return Ok(amount);
        }
    }
}
