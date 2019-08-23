using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class Settlement
    {
        [Key]
        public int Id { get; set; }
        public int? YourId { get; set; }
        public int? ToId { get; set; }
        public int Amount { get; set; }
        public DateTime Date { get; set; }
        public int GroupId { get; set; }

        [ForeignKey("YourId")]
        public virtual ApplicationUser FromUsers { get; set; }

        [ForeignKey("ToId")]
        public virtual ApplicationUser ToUser { get; set; }

        [ForeignKey("GroupId")]
        public Group GroupsId { get; set; }
    }
}
