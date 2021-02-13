import client from './client';

const endpoint = '/products';

const getProducts = (take?: number) => client.get(endpoint, { take });

const searchProducts = (searchParam?: string) =>
  client.get(endpoint, { searchBy: searchParam });

const getProductsByCategory = (param: any) =>
  client.get(endpoint + '/category', { category: param });

const getSaleProducts = (take: number) =>
  client.get(endpoint + '/sale', { take });

export default {
  getProducts,
  searchProducts,
  getProductsByCategory,
  getSaleProducts,
};
