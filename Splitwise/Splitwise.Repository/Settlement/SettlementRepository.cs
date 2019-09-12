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
            if (settlement.GroupId == 0)
            {
                settlement.GroupId = null;
                updateFriendExpense(settlement);

            }
            else
            {
                UpdateGroupExpenses(settlement);
            }
            await context.Settlements.AddAsync(settlement);
            return settlement;
            //int id = expense.Id;
            //var bill = context.FriendBills.FirstOrDefault(b => b.FriendExpId == id && b.FriendId == settlement.YourId);
            //bill.Bill = bill.Bill - settlement.Amount;
            //context.Update(bill);
            //

            //return settlement;
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

        private void UpdateGroupExpenses(Settlement settlement)
        {
            var expense = context.Expense.Where(e => e.GrpId == settlement.GroupId && e.PaidbyId==settlement.ToId);
            foreach(var i in expense)
            {
                int id = i.Id;
                var bill = context.UserExpenses.FirstOrDefault(b => b.ExpId == id && b.UsersId == settlement.YourId);
                if(bill!=null)
                {
                    bill.SplitAmount = bill.SplitAmount - settlement.Amount;
                    context.Update(bill);
                   // context.SaveChanges();
                    if (bill.SplitAmount == 0)
                    {
                        context.UserExpenses.Remove(bill);
                        //context.SaveChanges();
                    }
                    break;
                }
            }
        }

        private void updateFriendExpense(Settlement settlement)
        {
            var expense = context.FriendExpenses.Where(e => e.Paidby == settlement.ToId);
            foreach (var i in expense)
            {
                int id = i.Id;
                var bill = context.FriendBills.FirstOrDefault(b => b.FriendExpId == id && b.FriendId == settlement.YourId);
                if (bill != null)
                {
                    bill.Bill = bill.Bill - settlement.Amount;
                    context.Update(bill);
                    if (bill.Bill == 0)
                    {
                        context.FriendBills.Remove(bill);    
                    }
                    break;
                }
            }
        }

        #endregion
    }

        
    }
