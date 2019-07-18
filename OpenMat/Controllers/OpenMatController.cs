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
    public class OpenMatController : ControllerBase
    {
        readonly OpenMatRepository _openMatRepository;

        public OpenMatController()
        {
            _openMatRepository = new OpenMatRepository();
        }

        [HttpGet]

        public ActionResult GetAllOpenMat()
        {
            var gyms = _openMatRepository.GetAll();

            return Ok(gyms);
        }
    }
}