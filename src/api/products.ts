import client from './client';

const endpoint = '/products';

const getProducts = (param: any) => client.get(endpoint, { searchBy: param });
const getProductsByCategory = (param: any) =>
  client.get(endpoint, { category: param });

export default {
  getProducts,
  getProductsByCategory,
};
