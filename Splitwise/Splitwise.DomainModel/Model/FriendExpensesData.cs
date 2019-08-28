using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class FriendExpensesData
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public int Amount { get; set; }
        public string Split { get; set; }
        public string Paidby { get; set; }

        [ForeignKey("Paidby")]
        public ApplicationUser PaidbyUser { get; set; }

        public List<FriendUserExpensesAC> FriendUserExpense { get; set; }
    }
}
