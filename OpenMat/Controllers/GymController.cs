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
            //will check if there are any old openmats and then delete them
            _gymRepository.DeleteOpenMat();
            var user = _gymRepository.GetAll();

            return Ok(user);
        }


        [HttpPost]

        public ActionResult<int> AddGym(CreateGymRequest createRequest)
        {
            
            var newGym = _gymRepository.AddGym(createRequest);

            return Ok(newGym);
        }


        [HttpDelete("{ID}")]

        public ActionResult DeleteGym(int ID)
        {
            _gymRepository.DeleteGym(ID);

            return Ok();
        }

    }
}