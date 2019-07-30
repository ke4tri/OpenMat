using OpenMat.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace OpenMat.Data
{
    public class Users2Repository
    {
        const string ConnectionString = "Server=localhost; Database=OpenMat; Trusted_Connection=True;";


        public IEnumerable<Users2> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var Users2 = db.Query<Users2>("Select * from Users2").ToList();

                return Users2;
            }
        }

        public CreateUser2Request AddUser(CreateUser2Request newUserObject)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var insertQuery = @"
                    INSERT INTO Users2
                               ([FirstName],
                               [LastName],
                               [Rank],
                               [Affiliation],
                               [Competitor],
                               [GymId],
                               [OpenMatId])
                    OUTPUT inserted.*
                         VALUES
                               (@firstname,
                               @lastname,
                               @rank,
                               @affiliation,
                               @competitor,
                               @gymid,
                               @openmatid)";

                var parameters = new
                {
                    FirstName = newUserObject.FirstName,
                    LastName = newUserObject.LastName,
                    Rank = newUserObject.Rank,
                    Affiliation = newUserObject.Affiliation,
                    Competitor = newUserObject.Competitor,
                    GymId = newUserObject.GymId,
                    OpenMatId = newUserObject.OpenMatId
                };

                var newUser = db.QueryFirstOrDefault<CreateUser2Request>(insertQuery, parameters);

                if (newUser != null)
                {
                    return newUser;
                }
            }
            throw new Exception("User2 was not created");
        }

        public IEnumerable<Users2> GetAllUsers(int gymid)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var users = db.Query<Users2>("select Users2.FirstName, Users2.LastName, Users2.Rank, Users2.Affiliation, Users2.Competitor from Users2 where Users2.GymId = @gymid", new { gymid }).ToList();

                return users;
            }
        }

    }
}
