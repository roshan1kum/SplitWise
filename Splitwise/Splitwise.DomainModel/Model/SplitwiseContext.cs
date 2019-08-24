using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class SplitwiseContext : IdentityDbContext
    {
        #region Properties
        public DbSet<ApplicationUser> ApplicationUser { get; set; }
        public DbSet<Group> Group { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Expense> Expense { get; set; }
        public DbSet<Friend> Friend { get; set; }

        public DbSet<GroupMembers> GroupMembers { get; set; }
        public DbSet<Settlement> Settlements { get; set; }
        public DbSet<UserExpense> UserExpenses { get; set; }
        #endregion

        #region Constructors 
        public SplitwiseContext(DbContextOptions<SplitwiseContext> options):base (options)
        {

        }
        #endregion
    }
}
