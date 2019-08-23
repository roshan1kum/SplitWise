using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class GroupMembers
    {
        public int Id { get; set; }
        public int GrpId{ get ;set ;}
        public int? UserID { get; set; }

        [ForeignKey("GrpId")]
        public virtual Group Group { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
