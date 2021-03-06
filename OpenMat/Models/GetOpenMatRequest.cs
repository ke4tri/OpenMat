﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenMat.Models
{
    public class GetOpenMatRequest
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Affiliation { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }       
        public string Zipcode { get; set; }
        public float lat { get; set; }
        public float lng { get; set; }
        public DateTime Date { get; set; }
    }
}
