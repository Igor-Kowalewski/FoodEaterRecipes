using FoodEaterRecipes.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using FoodEaterRecipes.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FoodEaterRecipes.Data.Entities;
using Microsoft.AspNetCore.Identity;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.Extensions.FileProviders;

namespace FoodEaterRecipes
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
;
            _config = config;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<User, IdentityRole>( cfg =>
            {
                cfg.User.RequireUniqueEmail = true;
                cfg.Password.RequireDigit = false;
                cfg.SignIn.RequireConfirmedEmail = false;
            }).AddEntityFrameworkStores<FoodEaterContext>();

            services.AddAuthentication()
                .AddCookie()
                .AddJwtBearer(cfg => {
                    cfg.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = _config["Tokens:Issuer"],
                        ValidAudience = _config["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]))
                    };
                });
            
            services.AddDbContext<FoodEaterContext>();

            services.AddTransient<FoodEaterSeeder>();

            services.AddTransient<IMailService, EmptyMailService>();

            services.AddScoped<IFoodEaterRepository, FoodEaterRepository>();

            services.AddControllersWithViews()
               .AddRazorRuntimeCompilation();
            services.AddRazorPages();
        }
        
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();


            // for the wwwroot/src folder
            string uploadsDir = Path.Combine(env.WebRootPath, "src");
            if (!Directory.Exists(uploadsDir))
                Directory.CreateDirectory(uploadsDir);

            app.UseStaticFiles(new StaticFileOptions()
            {
                RequestPath = "/src",
                FileProvider = new PhysicalFileProvider(uploadsDir)
            });


            app.UseRouting();

            app.UseStatusCodePages(async (StatusCodeContext context) =>
            {
                HttpRequest request = context.HttpContext.Request;
                HttpResponse response = context.HttpContext.Response;

                if (response.StatusCode == (int)HttpStatusCode.Unauthorized)
                {
                    response.Redirect("/account/login");
                }
            });


            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();

                endpoints.MapControllerRoute("Default",
                    "/{controller}/{action}/{id?}",
                    new { controller = "App", action = "Index" });
            });
        }
    }
}
