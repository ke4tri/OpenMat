using OpenMat.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace OpenMat.Data
{
    public class UserRepository
    {

        const string ConnectionString = "Server=localhost; Database=OpenMat; Trusted_Connection=True;";


        public IEnumerable<Users> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var Users = db.Query<Users>("Select * from Users").ToList();

                return Users;
            }
        }

        public CreateUserRequest AddUser(string FirstName,string LastName, string Rank, string Affiliation, bool Competitor)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newUser = db.QueryFirstOrDefault<CreateUserRequest>(@"
                    Insert into Users (FirstName, LastName, Rank, Affiliation, Competitor) 
                    Output inserted.*
                    Values(@FirstName,@LastName,@Rank,@Affiliation,@Competitor)",
                    new { FirstName, LastName, Rank, Affiliation, Competitor }); // setting up the parameters required - property needs to match the values above

                if (newUser != null)
                {
                    return newUser;
                }
            }

            throw new Exception("No product created");
        }
    }
}
