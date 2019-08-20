using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository
{
    public interface ISettlement
    {
        void createSettlement(int toid,int amount);
      
    }
}
