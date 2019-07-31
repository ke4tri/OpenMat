import axios from 'axios';

const apiUrl = 'api/users2';

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}`).then((result) => {
    const user = result.data;
    resolve(user);
  }).catch((error) => {
    reject(error);
  });
});

const createUser = customerObject => axios.post(`${apiUrl}`, (customerObject));

export default {
  getAllUsers, 
  createUser
}