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
            var user = _gymRepository.GetAll();

            return Ok(user);
        }

        [HttpPost]

        public ActionResult<int> AddGym(CreateGymRequest createRequest)
        {
            var newUser = _gymRepository.AddGym(createRequest.Name, createRequest.Phone, createRequest.Affiliation, createRequest.Address1, createRequest.Address2, createRequest.City, createRequest.State, createRequest.Zipcode, createRequest.lat, createRequest.lng);

            return Ok(newUser);
        }

        [HttpDelete("{ID}")]

        public ActionResult DeleteGym(int ID)
        {
            _gymRepository.DeleteGym(ID);

            return Ok();
        }

    }
}