import client from './client';

const endpoint = '/cardPay';

export interface CardPayProps {
  amount: string;
  redirect_url: string;
  consumer_id: string;
  email: string;
  phonenumber: string;
  name: string;
}

const sendPay = async (cardPayDetails: CardPayProps) =>
  client.post(endpoint, { ...cardPayDetails });

export default {
  sendPay,
};
