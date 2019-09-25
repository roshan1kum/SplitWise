using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class Friend
    {
        public int Id { get; set; }
        public string FriendId{ get; set; }
        public string YourId { get; set; }

        [ForeignKey("FriendId")]
        public ApplicationUser User { get; set; }

        [ForeignKey("YourId")]
        public ApplicationUser Youruser { get; set; }
    }
}
