import axios from 'axios';

const apiUrl = "/api/gym";

const getAllGyms = () => new Promise((resolve, reject) => {
  axios.get(apiUrl)
    .then((result) => {
      const gymObject = result.data;
      resolve(gymObject);
    })
    .catch((error) => {
      reject(error);
    });
});

const createGym = gymObject => axios.post(`${apiUrl}`, (gymObject));

const deleteGym = gymId => axios.delete(`${apiUrl}/${gymId}`);

export default {
  getAllGyms,
  deleteGym,
  createGym
};