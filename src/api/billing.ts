import client from './client';
import { BillingInfo } from '../../types';

const endpoint = '/billing';

const addBilling = (billingInfo: BillingInfo) =>
  client.post(endpoint, billingInfo);

const getBilling = (user_id: number) => client.get(endpoint, { user_id });

const deleteBilling = (billing_id: number) =>
  client.delete(endpoint, { billing_id });

const updateBilling = (billingInfo: BillingInfo) =>
  client.post(endpoint + `/update`, billingInfo);

export default {
  addBilling,
  getBilling,
  deleteBilling,
  updateBilling,
};
