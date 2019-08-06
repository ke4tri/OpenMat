using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OpenMat.Data;
using OpenMat.Models;

namespace OpenMat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        readonly UserRepository _userRepository;

        public UsersController()
        {
            _userRepository = new UserRepository();
        }

        [HttpGet]

        public ActionResult GetAllProducts()
        {
            var user = _userRepository.GetAll();

            return Ok(user);
        }

        [HttpPost]

        public ActionResult<int> AddUser(CreateUserRequest createRequest)
        {
            var newUser = _userRepository.AddUser(createRequest);

            return Ok(newUser);
        }

      
    }
}