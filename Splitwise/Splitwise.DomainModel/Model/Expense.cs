using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class Expense
    {
        public int id { get; set; }
        public int CreaterId { get; set; }
        public string Description { get; set; }
        public int cost { get; set; }
        public int grpId { get; set; }
        public int paidbyId { get; set; }
        public DateTime Date { get; set; }

        [ForeignKey("CreaterId")]
        public virtual ApplicationUser user { get; set; }
        [ForeignKey("grpId")]
        public virtual Group group { get; set; }
        [ForeignKey("paidbyId")]
        public virtual ApplicationUser paiduser { get; set; }
    }
}
