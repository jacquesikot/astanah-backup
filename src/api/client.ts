import { create } from 'apisauce';

import cache from '../utils/cache';
import authStorage from '../utils/authStorage';

const heroku = 'https://astanahserver.herokuapp.com/api';
const local = 'http://172.20.10.6:4500/api';
const local2 = 'http://192.168.43.60:4500/api';

const apiClient = create({
  baseURL: heroku,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;
});

const get: any = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
