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
    public class Users2Controller : ControllerBase
    {
        readonly Users2Repository _user2Repository;

        public Users2Controller()
        {
            _user2Repository = new Users2Repository();
        }

        [HttpGet]

        public ActionResult GetAllUsers()
        {
            var user = _user2Repository.GetAll();

            return Ok(user);
        }



        [HttpGet("{gymId}")]
        public ActionResult GetCustomerPayments(int gymId)
        {
            var usersOM = _user2Repository.GetAllUsers(gymId);

            return Ok(usersOM);
        }

        [HttpPost]

        public ActionResult<int> AddUser(CreateUser2Request createRequest)
        {
            var newUser = _user2Repository.AddUser(createRequest);

            return Ok(newUser);
        }

    }
}