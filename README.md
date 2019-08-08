## OPEN MAT
**OPEN MAT** is an app designed to aid in the structure and effectiveness of a Brazilian Jiu-Jitsu (BJJ) gyms open mat session.  Open mats are predetermined times when a gym is open and all practitioners of BJJ can come in and train with other students. 

## Motivation
Given the context of the function of the app above, this app is derived from fundamental flaws in all gyms nationwide when it comes to their open mat times.  There is no structure. As a practitioner myself I would like to know who is showing up and if they are going to be within my training level and if there is something particular they will help me train on. 


## Build status
This build is functional locally with both front and backend.  I am exploring more deployable options and may transition the backend to mongoDB and expressJS
 
## Screenshots

![](https://github.com/ke4tri/Images/blob/master/Open_Home.JPG?raw=true)

![](https://github.com/ke4tri/Images/blob/master/Open_Map.JPG?raw=true)

![](https://github.com/ke4tri/Images/blob/master/Open_Gym.JPG?raw=true)

![](https://github.com/ke4tri/Images/blob/master/Open_join.JPG?raw=true)

![](https://github.com/ke4tri/Images/blob/master/Open_About.JPG?raw=true)

## Tech/framework used

<b>Frontend built with</b>
- [Create-React_App](https://github.com/facebook/create-react-app)

<b>Backend built with</b>
- [C#.NET](https://docs.microsoft.com/en-us/dotnet/csharp/getting-started/introduction-to-the-csharp-language-and-the-net-framework)
- [MySQL](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017)

## Features
At this time, there is a degree of the honor code when it comes to using this app.  Once authentication is emplamented we can start giving validation for deleting users and gyms respectivly.  Currently a cool feature is used to delete any open mat date that is in the past of the current days date. This is run via the backend GymRepository.cs as the api is grabbing all the current gyms in the database. 
```
 public void DeleteOpenMat()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var rowsAffected = db.Execute("DELETE FROM OpenMatt WHERE Date < GETDATE()");

            }
        }
```

## Installation
Dependincies 
 - npm install
    ```
    "axios": "^0.19.0",
    "bootstrap": "^3.4.1",
    "eslint-config-airbnb-base": "^13.2.0",
    "node-sass": "^4.12.0",
    "prop-types": "^15.7.2",
    "react": "^16.8.6",
    "react-bootstrap": "^0.31.5",
    "react-dom": "^16.8.6",
    "react-google-maps": "^9.4.5",
    "react-router-bootstrap": "^0.24.4",
    "react-router-dom": "^4.3.1",
    "react-youtube": "^7.9.0",
    "reactstrap": "^8.0.1"
    ```

MIT © [Wayne Collier](https://website-7ccff.firebaseapp.com/)
