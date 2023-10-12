import axios from 'axios';

const BASE_URL = 'https://64af9c33c60b8f941af44796.mockapi.io';

export const fetchUsers = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/users?page=${page}&limit=3`);
    return response.data;
  } catch (error) {
    throw new Error(error.response || 'Ошибка сети');
  }
};
