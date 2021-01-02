import { BillingInfo } from '../../types';

const addresses: BillingInfo[] = new Array(2).fill({
  user_id: Math.random(),
  first_name: 'string',
  last_name: 'string',
  address: 'string',
  city: 'string',
  state: 'string',
});

export default addresses;
