import client from './client';

const endpoint = '/categories';

const getCategories = async (take: number) => client.get(endpoint, { take });

export default {
  getCategories,
};
