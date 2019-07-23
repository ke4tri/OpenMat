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

// const createGym = gymObject => axios.post(`${apiUrl}/${gymId}`, (gymObject));
// May need to change the gymId names below
const deleteGym = gymId => axios.delete(`${apiUrl}/${gymId}`);

export default {
  getAllGyms,

  deleteGym,
  createGym
};