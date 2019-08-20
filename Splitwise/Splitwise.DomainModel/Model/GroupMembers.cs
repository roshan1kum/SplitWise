using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class GroupMembers
    {
        public int id { get; set; }
        public int grpId{ get ;set ;}
        public int userID { get; set; }

        [ForeignKey("grpId")]
        public virtual Group group { get; set; }

        [ForeignKey("userId")]
        public virtual ApplicationUser user { get; set; }
    }
}
