import client from './client';

const endpoint = '/users';

interface UserInfo {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const register = (userInfo: UserInfo) => client.post(endpoint, userInfo);

export default {
  register,
};
