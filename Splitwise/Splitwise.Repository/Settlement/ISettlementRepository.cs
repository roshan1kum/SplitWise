using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository
{
    public interface ISettlementRepository
    {
        Task<Settlement> CreateSettlement(Settlement settlement);
        Task<Settlement> GetSettlementId(int id);
        Task<Expense> show(Settlement settlement);
    }
}
