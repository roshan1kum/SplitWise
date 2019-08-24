using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Splitwise.DomainModel.Model
{
    public class ApplicationUser:IdentityUser
    {
        
        public string Name { get; set; }
    }
}
