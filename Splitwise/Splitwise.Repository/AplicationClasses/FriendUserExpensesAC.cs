using Splitwise.DomainModel.Model;
using System.ComponentModel.DataAnnotations.Schema;

namespace Splitwise.Repository.ApplicationClasses
{
    public class FriendUserExpensesAC
    {
        public string UserId { get; set; }
        public int Amount { get; set; }

        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
    }
}