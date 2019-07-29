using Dapper;
using OpenMat.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace OpenMat.Data
{
    public class OpenMatRepository
    {

        const string ConnectionString = "Server=localhost; Database=OpenMat; Trusted_Connection=True;";

        public IEnumerable<GetOpenMatRequest> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var Gym = db.Query<GetOpenMatRequest>

                    ("select Gym.*, OpenMatt.Date from Gym, OpenMatt Where Gym.ID = OpenMatt.GymID");

                return Gym;
            }
        }

        public IEnumerable<GetOpenMatRequest> GetSingleOpenMats(int gymId)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getQuery = "select * from OpenMatt where GymID = @gymId";
                var parameter = new { GymID = gymId };

                var singleOpenMat = db.Query<GetOpenMatRequest>(getQuery, parameter).ToList();

                //var Gym = db.Query<GetOpenMatRequest>
                //    ("select * from OpenMatt where GymID = @gymId");
                //return Gym;
                return singleOpenMat;
            }
        }
    }
}
