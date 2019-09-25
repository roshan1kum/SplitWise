using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.AplicationClasses
{
   public class GroupMemberDetailAC
    {
        public int grpId { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreaterName { get; set; }
        public string MemberName { get; set; }
        public string UserId { get; set; }
    }
}
