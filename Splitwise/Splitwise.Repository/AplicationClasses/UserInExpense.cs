using System;
using System.Collections.Generic;
using System.Text;


namespace Splitwise.Repository.ApplicationClasses
{
    public class UserInExpense
    {
        public int Id { get; set; }
        public string CreaterId { get; set; }
        public string Description { get; set; }
        public int Cost { get; set; }
        public int GrpId { get; set; }
        public string PaidbyId { get; set; }
        public DateTime Date { get; set; }
        public string Split { get; set; }

        public List<GroupUsersExpensesAC> GroupUsersExpenses { get; set; }

    }
}
