using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.AplicationClasses
{
    public class FriendBillAC
    {
        public int Amount { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime Date { get; set; }
        public int PaidbyAmount { get; set; }
        public string PaidbyUserName { get; set; }
        public string PaidbyEmail { get; set; }
    }
}
