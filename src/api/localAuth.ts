import client from './client';

const endpoint = '/auth/local';

const login = (email: string, password: string) =>
  client.post(endpoint, { email, password });

export default {
  login,
};
