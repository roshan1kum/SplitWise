using System.ComponentModel.DataAnnotations.Schema;

namespace Splitwise.DomainModel.Model
{
    public class GroupUsersExpensesAC
    {
        public string UserId { get; set; }
        public int Price { get; set; }

        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
    }
        
}