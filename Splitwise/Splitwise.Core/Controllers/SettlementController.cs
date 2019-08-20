using Microsoft.AspNetCore.Mvc;
using Splitwise.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Core.Controllers
{
   public class SettlementController:Controller
    {
        #region Private variable
        private readonly IUnitofwork unitofwork;
        #endregion

        #region Constructor
        public SettlementController(IUnitofwork unitofwork)
        {
            this.unitofwork = unitofwork;
        }
        #endregion

        public async Task<IActionResult> Create([FromRoute] int id,[FromBody]int amount)
        {
            unitofwork.SettlementRepository.CreateSettlement(id,amount);
            await unitofwork.Save();
            return Ok(amount);
        }
    }
}
