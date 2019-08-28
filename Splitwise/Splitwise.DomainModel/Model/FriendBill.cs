using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class FriendBill
    {
        public int Id { get; set; }
        public int FriendExpId { get; set; }
        public string FriendId { get; set; }
        public int Bill { get; set; }

        [ForeignKey("FriendExpId")]
        public virtual FriendExpense FriendExpense { get; set; }
        [ForeignKey("FriendId")]
        public virtual ApplicationUser FriendUser { get; set; }
    }
}
