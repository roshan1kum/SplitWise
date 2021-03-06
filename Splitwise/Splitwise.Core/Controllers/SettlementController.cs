﻿using Microsoft.AspNetCore.Authorization;
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
    [Route("api/Settlement")]
    //[Authorize]
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

        #region Public method
        [HttpPost]
        public async Task<Settlement> Create([FromBody] Settlement settlement)
        {
            //await unitofwork.SettlementRepository.CreateSettlement(settlement);
            //await unitofwork.Save();

            var settlements= await unitofwork.SettlementRepository.CreateSettlement(settlement);
            await unitofwork.Save();
            return settlements;
        }

        [HttpGet("{id}")]
        public async Task<Settlement> GetSettlementId([FromRoute] int id)
        {
            return await unitofwork.SettlementRepository.GetSettlementId(id);
            
        }
        #endregion
    }
}
