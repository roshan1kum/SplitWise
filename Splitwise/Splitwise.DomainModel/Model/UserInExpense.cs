using System;
using System.Collections.Generic;
using System.Text;


namespace Splitwise.DomainModel.Model
{
    public class UserInExpense
    {
        public int ExpId { get; set; }
        public ICollection<ApplicationUser> UserList { get; set; }
    }
}
