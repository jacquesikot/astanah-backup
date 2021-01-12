import { ProductOrder } from '../../types';
import client from './client';

const endpoint = '/orders';

interface NewOrderProps {
  user_id: number;
  billing_id: number;
  payment_method: string;
  set_paid: boolean;
  products: ProductOrder[];
  status: string;
  total: string;
}

const newOrder = (newOrder: NewOrderProps) => client.post(endpoint, newOrder);
const getOrders = (user_id: number) => client.get(endpoint, { user_id });

export default {
  newOrder,
  getOrders,
};
