import { create } from 'apisauce';

const CARD_URL = 'https://api.flutterwave.com/v3/charges';
const MOBILE_URL =
  'https://api.flutterwave.com/v3/charges?type=mobile_money_zambia';
const public_key = 'FLWPUBK_TEST-ba55d43d5f3c5a83c97daa995fe2d1f4-X';

const cardClient = create({
  baseURL: CARD_URL,
  headers: {
    Authorization: 'FLWSECK_TEST-701c6e97947fa72009a19de521678c6f-X',
  },
});

export interface IChargeData {
  public_key: string;
  tx_ref: string;
  amount: string;
  currency: 'NGN' | 'ZKW';
  fullName: string;
  email: string;
  phone_number: string;
  type: 'card';
  card_number: string;
  cvv: string;
  expiry_month: string;
  expiry_year: string;
  pin: string;
}

const cardCharge = async ({
  public_key,
  tx_ref,
  amount,
  fullName,
  email,
  phone_number,
  card_number,
  cvv,
  expiry_month,
  expiry_year,
  pin,
}: IChargeData) => {
  const data = {
    public_key,
    tx_ref,
    amount,
    currency: 'ZKS',
    fullName,
    email,
    phone_number,
    type: 'card',
    card_number,
    cvv,
    expiry_month,
    expiry_year,
    authorization: {
      mode: 'pin',
      pin,
    },
  };

  const response = await cardClient.post('', data);
  return response;
};

export interface IMobilePayment {
  tx_ref: string;
  amount: string;
  currency: 'ZMW';
  email: string;
  phone_number: string;
  network: string;
  fullname: string;
  order_id: string;
}

const mobileClient = create({
  baseURL: MOBILE_URL,
  headers: {
    Authorization: 'FLWSECK_TEST-701c6e97947fa72009a19de521678c6f-X',
  },
});

const mobilePayment = async ({
  tx_ref,
  amount,
  currency,
  email,
  phone_number,
  network,
  fullname,
  order_id,
}: IMobilePayment) => {
  const data = {
    tx_ref,
    amount,
    currency,
    email,
    phone_number,
    network,
    fullname,
    order_id,
  };

  const response = await mobileClient.post('', data);
  return response;
};

export default { cardCharge, mobilePayment };
