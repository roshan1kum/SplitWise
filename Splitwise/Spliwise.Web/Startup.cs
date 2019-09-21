using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using Splitwise.DomainModel;
using Splitwise.DomainModel.Model;
using Splitwise.Repository.UnitOfWork;

namespace Spliwise.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
                    //.AddJsonOptions(opt => opt.SerializerSettings.ContractResolver
                    // = new DefaultContractResolver()); 

            services.AddDbContext<SplitwiseContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("SplitwiseContext")));
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<SplitwiseContext>();
            services.AddScoped<IUnitofwork, Unitofwork>();
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "App/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }
            app.UseSpaStaticFiles();
            app.UseStaticFiles();
            app.UseAuthentication();
            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute("default", "{controller=Account}/{action=Login}/{id?}");
            //});

            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(name: "default",
            //    template: "{controller}/{action}",
            //    defaults: new { controller = "Account", action = "Login" });

            //});

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                     name: "default",
                     template: "{controller=Account}/{action=Index}/{id?}");
                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Account", action = "Index" });
            });
        }
    }
}
