import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api'
});

export const getUsers = async (page = 1) => {
  const response = await api.get(`/users?page=${page}`);
  return response.data;
};

export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};