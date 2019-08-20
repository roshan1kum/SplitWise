using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class UserExpense
    {
        public int id { get; set; }
        public int ExpId { get; set; }
        public int UserId { get; set; }
        public int SplitAmount { get; set; }

        [ForeignKey("ExpId")]
        public virtual Expense expense { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser user { get; set; }
        
    }
}
