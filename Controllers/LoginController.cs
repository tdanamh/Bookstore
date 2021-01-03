using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bookstore.Models;
using Bookstore.Services;

namespace Bookstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly UserService _userService;

        public LoginController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public ActionResult<String> Login (User user)
        {
            User found = _userService.GetByEmail(user.Email);
            if (found != null && found.Password == user.Password)
            {
                String response = "{\"userId\" :" + "\"" + found.Id + "\"}";
                return response;
            }
            return "{\"message\" :" + "\"" + "Unauthorized!" + "\"}";
        }
    }
}
