using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class Group
    {
        public int GrpId { get; set; }
        public string GroupName { get; set; }
        public bool Debt { get; set; }
        public DateTime CreatedDate { get; set; }

        public int CategoryId { get; set; }
        public int CreaterId { get; set; }
        [ForeignKey("createrId")]
        public virtual ApplicationUser User { get; set; } 
        [ForeignKey("categoryId")]
        public virtual Category Category { get; set; }

    }
}
