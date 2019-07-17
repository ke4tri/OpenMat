using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenMat.Models
{
    public class CreateGymRequest
    {
        public string Name { get; set; }
        public int Phone { get; set; }
        public string Affiliation { get; set; }
    }
}
