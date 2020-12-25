import { Category } from '../../types';

const categories: Category[] = new Array(14).fill({
  id: Math.random(),
  category_name: 'name',
  slug: 'name',
});

export default categories;
