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

            return Ok(new { jwt });
        }
    }
}
