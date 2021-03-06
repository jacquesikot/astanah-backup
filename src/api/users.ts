import client from './client';

const endpoint = '/users';

interface UserInfo {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const register = (userInfo: UserInfo) => client.post(endpoint, userInfo);
const update = (id: number, first_name: string, last_name: string) =>
  client.post(endpoint + `/update`, { id, first_name, last_name });

export default {
  register,
  update,
};
