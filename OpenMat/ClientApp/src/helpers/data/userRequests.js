import axios from 'axios';

const apiUrl = 'api/users';

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}`).then((result) => {
    const user = result.data;
    resolve(user);
  }).catch((error) => {
    reject(error);
  });
});

const getSingleUser = firebaseId => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/${firebaseId}`).then((result) => {
    const customerObject = result.data;
    resolve(customerObject[0]);
  })
    .catch((error) => {
      reject(error);
    });
});

const createUser = customerObject => axios.post(`${apiUrl}`, (customerObject));

const deleteUser = firebaseId => new Promise((resolve, reject) => {
  axios.delete(`${apiUrl}/${firebaseId}`).then((result) => {
      resolve(result.data);
    })
    .catch((error) => {
      reject(error)
    });
});

const updatedUser = customerToUpdate => new Promise((resolve, reject) => {
  axios.put(`${apiUrl}/${customerToUpdate.firebaseId}/update`, customerToUpdate).then((result) => {
    resolve(result.data);
  })
  .catch((error) => {
    reject(error);
  })
})

export default {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updatedUser
}
