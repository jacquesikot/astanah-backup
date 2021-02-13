import client from './client';

const endpoint = '/auth/google';

const login = () => client.get(endpoint);

export default {
  login,
};
