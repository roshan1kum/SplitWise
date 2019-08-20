using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository
{
    public class Settlement : ISettlement
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
        public void createSettlement(int toid,int amount)
        {
            throw new NotImplementedException();
        }
        #endregion
    }
}
