using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository
{
    public interface ISettlementRepository
    {
        void CreateSettlement(int toId,int amount);
      
    }
}
