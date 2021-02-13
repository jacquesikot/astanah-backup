import client from './client';
import { FavoriteProps } from '../../types';

const endpoint = '/favorites';

const addFavorite = (favorite: FavoriteProps) =>
  client.post(endpoint, favorite);

const getFavorites = (user_id: number) => client.get(endpoint, { user_id });

const deleteFavorite = (favorite_id: number) =>
  client.delete(endpoint, { favorite_id });

export default {
  addFavorite,
  getFavorites,
  deleteFavorite,
};
