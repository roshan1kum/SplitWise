using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class Settlement
    {
        public int Id { get; set; }
        public int YourId { get; set; }
        public int ToId { get; set; }
        public int Amount { get; set; }

        [ForeignKey("YourId")]
        public virtual ApplicationUser User { get; set; }

        [ForeignKey("ToId")]
        public virtual ApplicationUser ToUser { get; set; }
    }
}
