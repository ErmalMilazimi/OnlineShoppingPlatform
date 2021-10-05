using backend.JwtAuth;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly iUserServices _userServices;
        private readonly JwtService _jwtService;
        public UserController(iUserServices userService, JwtService jwtService)
        {
            _userServices = userService;
            _jwtService = jwtService;
        }
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_userServices.getUsers());
        }


        [HttpPost]
        public IActionResult CreateUser(User _user)
        {
            var user = new User
            {
                Name = _user.Name,
                Email = _user.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(_user.Password),
            };

            _userServices.CreateUser(user);
            return Ok("User added");
        }

        [HttpPost(template:"login")]
        public IActionResult Login(User _user)
        {
            var user = _userServices.getByEmail(_user.Email);

            if(user == null)
            {
                return BadRequest("Invalid Credentials");
            }

            if (!BCrypt.Net.BCrypt.Verify(_user.Password, user.Password))
            {
                return BadRequest("Invalid Password");
            }

            var jwt = _jwtService.Generate(user.Id);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });

            return Ok(user);
        }

        [HttpGet(template:"user")]
        public IActionResult User()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];
                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                var user = _userServices.getById(userId);

                return Ok(user);
            } catch (Exception e)
            {
                return Unauthorized();
            }
            
        }

        [HttpPost(template: "logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok("success");
        }
    }
}
