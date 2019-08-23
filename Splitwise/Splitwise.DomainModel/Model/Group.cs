using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class Group
    {
     
        public int Id { get; set; }
        public string GroupName { get; set; }
        public bool Debt { get; set; }
        public DateTime CreatedDate { get; set; }

        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public Category Category { get; set; }

        public int CreatorId { get; set; }
        [ForeignKey("CreatorId")]
        public ApplicationUser CreaterGroup { get; set; }

    }
}
