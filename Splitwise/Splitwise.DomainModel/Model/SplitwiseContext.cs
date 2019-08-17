using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class SplitwiseContext : DbContext
    {
        #region Properties
        public DbSet<ApplicationUser> user { get; set; }
        #endregion

        #region Constructors 
        public SplitwiseContext(DbContextOptions<SplitwiseContext> options):base (options)
        {

        }
        #endregion
    }
}
