import client from './client';

const endpoint = '/products';

const getProducts = (param: string) =>
  client.get(endpoint, { searchBy: param });

const getProductsByCategory = (param: any) =>
  client.get(endpoint, { category: param });

const getSaleProducts = () => client.get(endpoint + '/sale');

export default {
  getProducts,
  getProductsByCategory,
  getSaleProducts,
};
