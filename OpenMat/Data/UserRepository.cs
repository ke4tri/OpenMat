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


        public CreateUserRequest AddUser(CreateUserRequest newUserObject)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var insertQuery = @"
                    INSERT INTO Users
                               ([FirstName],
                               [LastName],
                               [Rank],
                               [Affiliation],
                               [Competitor])
                    OUTPUT inserted.*
                         VALUES
                               (@firstname,
                               @lastname,
                               @rank,
                               @affiliation,
                               @competitor)";

                var parameters = new
                {
                    FirstName = newUserObject.FirstName,
                    LastName = newUserObject.LastName,
                    Rank = newUserObject.Rank,
                    Affiliation = newUserObject.Affiliation,
                    Competitor = newUserObject.Competitor
                };

                var newUser = db.QueryFirstOrDefault<CreateUserRequest>(insertQuery, parameters);

                if (newUser != null)
                {
                    return newUser;
                }
            }
            throw new Exception("User was not created");
        }


        public void DeleteUser(int ID)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var rowsAffected = db.Execute("Delete from Users where ID = @ID", new { ID });

                if (rowsAffected != 1)
                {
                    throw new Exception("Issue with Users ID");
                }
            }
        }
    }
}
