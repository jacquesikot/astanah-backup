import client from './client';

const endpoint = '/paymentcard';

interface CardInfo {
  user_id: number;
  card_number: string;
  card_holder_name: string;
  card_exp_date: string;
}

const addCard = (cardInfo: CardInfo) => client.post(endpoint, cardInfo);
const getCards = (user_id: number) => client.get(endpoint, { user_id });
const deleteCard = (id: number) => client.delete(endpoint, { id });

export default {
  addCard,
  getCards,
  deleteCard,
};
