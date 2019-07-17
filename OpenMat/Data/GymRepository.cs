using Dapper;
using OpenMat.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace OpenMat.Data
{
    public class GymRepository
    {
        const string ConnectionString = "Server=localhost; Database=OpenMat; Trusted_Connection=True;";

        public IEnumerable<Gym> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var Gym = db.Query<Gym>("Select * from Gym").ToList();

                return Gym;
            }
        }

        public CreateGymRequest AddGym(string Name, int Phone, string Affiliation)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newUser = db.QueryFirstOrDefault<CreateGymRequest>(@"
                    Insert into Gym (Name, Phone, Affiliation) 
                    Output inserted.*
                    Values(@Name,@Phone,@Affiliation)",
                    new { Name, Phone, Affiliation }); // setting up the parameters required - property needs to match the values above

                if (newUser != null)
                {
                    return newUser;
                }
            }

            throw new Exception("No product created");
        }

        public void DeleteGym(int ID)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var rowsAffected = db.Execute("Delete from Gym where ID = @ID", new { ID });

                if (rowsAffected != 1)
                {
                    throw new Exception("Issue with Gym ID");
                }
            }
        }
    }
}
