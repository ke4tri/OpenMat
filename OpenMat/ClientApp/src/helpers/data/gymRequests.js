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

//Factor to get openMats?
const getPackageProducts = (pkg) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/${pkg}`)
    .then((result) => {
      const productObject = result.data;
      resolve(productObject);
    })
    .catch((error) => {
      reject(error);
    });
});

// May need to change the gymId names below
const deleteGym = gymId => axios.delete(`${apiUrl}/${gymId}`);

export default {
  getAllGyms,
  getPackageProducts,
  deleteGym
};