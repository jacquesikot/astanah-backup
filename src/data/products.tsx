import { Product } from '../../types';

const products: Product[] = new Array(20).fill({
  id: Math.random(),
  Meta_thumbnail_id: 'string',
  Title: 'string',
  Description: 'string',
  Short_Desc: 'string',
  Regular_price: 'string',
  Sale_price: 'string',
  Gallery: 'string',
  Categories: 'string',
});

export default products;
