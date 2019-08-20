using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class Friend
    {
        public int id { get; set; }
        public int FriendId{ get; set; }
        public int YourId { get; set; }

        [ForeignKey("FreindId")]
        public virtual ApplicationUser user { get; set; }

        [ForeignKey("YourId")]
        public virtual ApplicationUser youruser { get; set; }
    }
}
