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

        //public CreateGymRequest AddGym(string Name, string Phone, string Affiliation, string Address1, string Address2, string City, string State, string Zipcode, float lat, float lng)
        //{
        //    using (var db = new SqlConnection(ConnectionString))
        //    {
        //        var newUser = db.QueryFirstOrDefault<CreateGymRequest>(@"
        //            Insert into Gym (Name, Phone, Affiliation, Address1, Address2, City, State, Zipcode, lat, lng) 
        //            Output inserted.*
        //            Values(@Name,@Phone,@Affiliation,@Address1,@Address2,@City,@State,@Zipcode,@lat,@lng)",
        //            new { Name, Phone, Affiliation, Address1, Address2, City, State, Zipcode, lat, lng }); // setting up the parameters required - property needs to match the values above

        //        if (newUser != null)
        //        {
        //            return newUser;
        //        }
        //    }

        //    throw new Exception("No product created");
        //}


        public CreateGymRequest AddGym(CreateGymRequest newGymObject)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var insertQuery = @"
                    INSERT INTO Gym
                               ([Name],
                               [Phone],
                               [Affiliation],
                               [Address1],
                               [Address2],
                               [City],
                               [State],
                               [Zipcode],
                               [lat],
                               [lng])
                    OUTPUT inserted.*
                         VALUES
                               (@name,
                               @phone,
                               @affiliation,
                               @address1,
                               @address2,
                               @city,
                               @state,
                               @zipcode,
                               @lat,
                               @lng)";

                var parameters = new
                {
                    Name = newGymObject.Name,
                    Phone = newGymObject.Phone,
                    Affiliation = newGymObject.Affiliation,
                    Address1 = newGymObject.Address1,
                    Address2 = newGymObject.Address2,
                    City = newGymObject.City,
                    State = newGymObject.State,
                    Zipcode = newGymObject.Zipcode,
                    lat = newGymObject.lat,
                    lng = newGymObject.lng
                };

                var newGym = db.QueryFirstOrDefault<CreateGymRequest>(insertQuery, parameters);

                if (newGym != null)
                {
                    return newGym;
                }
            }
            throw new Exception("Gym was not created");
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
