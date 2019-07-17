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
    }
}
