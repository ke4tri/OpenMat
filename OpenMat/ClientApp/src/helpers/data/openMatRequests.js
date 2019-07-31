import axios from 'axios';

const apiUrl = "/api/openmat";

const getSingleOpenMat = gymId => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/${gymId}`).then((result) => {
      resolve(result.data);
    })
    .catch((error) => {
      reject(error)
    });
});

const createOpenMat = customerObject => axios.post(`${apiUrl}`, (customerObject));

export default {
  getSingleOpenMat,
  createOpenMat
};