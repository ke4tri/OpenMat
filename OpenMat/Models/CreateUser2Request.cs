﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenMat.Models
{
    public class CreateUser2Request
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Rank { get; set; }
        public string Affiliation { get; set; }
        public bool Competitor { get; set; }
        public int GymId { get; set; }
        public int OpenMatId { get; set; }
    }
}
