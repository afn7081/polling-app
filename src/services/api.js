import axios from 'axios';

const server="https://moogygapp.herokuapp.com/api"

export const setToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const call = async (method, path, data) => {
  console.log(path)
  const response = await axios[method](`${server}/${path}`, data);
  console.log(response.err)
  return response.data;
};

export default { setToken, call };