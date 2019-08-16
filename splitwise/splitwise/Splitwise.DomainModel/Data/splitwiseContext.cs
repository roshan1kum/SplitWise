using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using splitwise.Splitwise.DomainModel.Models;

namespace splitwise.Models
{
    public class splitwiseContext : DbContext
    {
        public splitwiseContext (DbContextOptions<splitwiseContext> options)
            : base(options)
        {
        }

        public DbSet<splitwise.Splitwise.DomainModel.Models.User> User { get; set; }
    }
}
