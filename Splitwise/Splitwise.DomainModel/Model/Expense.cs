using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class Expense
    {
        public int Id { get; set; }
        public int CreaterId { get; set; }
        public string Description { get; set; }
        public int Cost { get; set; }
        public int GrpId { get; set; }
        public int? PaidbyId { get; set; }
        public DateTime Date { get; set; }
        public string Split { get; set; }

        [ForeignKey("CreaterId")]
        public virtual ApplicationUser CreaterExpense { get; set; }
        [ForeignKey("GrpId")]
        public virtual Group Group { get; set; }
        [ForeignKey("PaidbyId")]
        public virtual ApplicationUser Paiduser { get; set; }
    }
}
