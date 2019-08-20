using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class Group
    {
        public int grpId { get; set; }
        public string GroupName { get; set; }
        public bool debt { get; set; }
        public DateTime createdDate { get; set; }

        public int categoryId { get; set; }
        public int createrId { get; set; }
        [ForeignKey("createrId")]
        public virtual ApplicationUser user { get; set; } 
        [ForeignKey("categoryId")]
        public virtual Category category { get; set; }

    }
}
