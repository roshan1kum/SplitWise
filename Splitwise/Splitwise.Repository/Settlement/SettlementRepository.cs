using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository
{
    public class Settlement : ISettlementRepository
    {
        #region Private variables
        private readonly SplitwiseContext context;
        #endregion

        #region Constructor
        public Settlement(SplitwiseContext context)
        {
            this.context = context;
        }
        #endregion

        #region Public method
        public void CreateSettlement(int toid,int amount)
        {
            throw new NotImplementedException();
        }
        #endregion
    }
}
