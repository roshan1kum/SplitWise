using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.AplicationClasses
{
    public class GroupExpenseAC
    {
        public int ExpId { get; set; }
        public int SplitAmount { get; set; }
        public string description { get; set; }
        public string CreaterExpense { get; set; }
        public int TotalAmount { get; set; }
        public DateTime Date { get; set; }
        public string GroupName { get; set; }
        public string CategoryName { get; set; }
        public string CreaterGroupName { get; set; }
        public string ExpensePaidBy { get; set; }
        public string ExpenseUserName { get; set; }
    }
}
