using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository
{
    public class SettlementRepository : ISettlementRepository
    {
        #region Private variables
        private readonly SplitwiseContext context;
        #endregion

        #region Constructor
        public SettlementRepository(SplitwiseContext context)
        {
            this.context = context;
        }
        #endregion

        #region Public method
        public async Task<Settlement> CreateSettlement(Settlement settlement)
        {
            await context.Settlements.AddAsync(settlement);
            //int expId = context.Expense.FirstOrDefaultAsync(e => e.GrpId == settlement.GroupId).Id;
            
            return settlement;
        }

        public async Task<Settlement> GetSettlementId(int id)
        {
            Settlement settlements = await context.Settlements.
                Include(s => s.FromUsers).
                Include(s => s.ToUser).
                Include(s => s.GroupsId).
                FirstOrDefaultAsync(s => s.Id == id);
            //int expId = context.Expense.FirstOrDefaultAsync(e => e.GrpId == settlements.GroupId).Id;

            return settlements;
        }

        public async Task<Expense> show(Settlement settlement)
        {
            var expense = await context.Expense.FirstOrDefaultAsync(e => e.GrpId == 3);
            
            return expense;
        }


        #endregion
    }
}
