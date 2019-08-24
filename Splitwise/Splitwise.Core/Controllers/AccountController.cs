using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Splitwise.DomainModel.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Core.Controllers
{
    [Route("api/Account")]
    public class AccountController:Controller
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;

        public AccountController(UserManager<IdentityUser> userManager,SignInManager<IdentityUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpPost]
        public async Task<RegisterUser> Register(RegisterUser registerUser)
        {
            if(ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName=registerUser.Email,Name=registerUser.Name,Email=registerUser.Email };
                var result = await userManager.CreateAsync(user,registerUser.Password);
            }
            return registerUser;
        }
    }
}
