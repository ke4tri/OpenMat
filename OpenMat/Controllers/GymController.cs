using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OpenMat.Data;

namespace OpenMat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GymController : ControllerBase
    {
        readonly GymRepository _gymRepository;

        public GymController()
        {
            _gymRepository = new GymRepository();
        }

        [HttpGet]

        public ActionResult GetAllProducts()
        {
            var user = _gymRepository.GetAll();

            return Ok(user);
        }

    }
}