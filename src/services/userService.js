import axios from 'axios';

export const getUser = async() => {
  const { data } = await axios.get('api/users/getUser');
  return data;
}

export const login = async (email, password) => {
  const { data } = await axios.post('api/users/login', { email, password });
  return data;
};

export const register = async registerData => {
  const { data } = await axios.post('api/users/register', registerData);
  return data;
};

export const logout = async() => {
  const res = await axios.post('api/users/logout');
  return res;
};

export const updateProfile = async user => {
  const { data } = await axios.put('/api/users/updateProfile', user);
  return data;
};

export const changePassword = async passwords => {
  await axios.put('/api/users/changePassword', passwords);
};

export const getAll = async searchTerm => {
  const { data } = await axios.get('/api/users/getAll/' + (searchTerm ?? ''));
  return data;
};

export const toggleBlock = async userId => {
  const { data } = await axios.put('/api/users/toggleBlock/' + userId);
  return data;
};

export const getById = async userId => {
  const { data } = await axios.get('/api/users/getById/' + userId);
  return data;
};

export const updateUser = async userData => {
  const { data } = await axios.put('/api/users/update', userData);
  return data;
};
