import { addError, removeError } from './error';
import { SET_CURRENT_USER } from '../actionTypes';
import API from '../../services/api';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const setToken = token => {
  API.setToken(token);
};

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    API.setToken(null);
    dispatch(setCurrentUser({}));
    dispatch(removeError());
  };
};

export const authUser = (path, data) => {
  return async dispatch => {
    try {
      console.log(data)
      const { token, ...user } = await API.call('post',`auth/${path}`, data);
      localStorage.setItem('jwtToken', token);
      API.setToken(token);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (err) {
      
        console.log(err.response.data)

      dispatch(addError(err.response.data.err));
    }
  };
};