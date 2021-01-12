import { ReactNode } from 'react';
import { ImageRequireSource } from 'react-native';

// SVG Params
export type SvgParams = {
  color?: string;
  width?: number;
  height?: number;
  stroke?: number;
};

// Navigators
export type RootParamList = {
  AppNav: undefined;
  AuthNav: undefined;
};

export type AuthParamList = {
  Welcome: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type HomeNavParamList = {
  Home: undefined;
  Favorites: undefined;
  Notifications: undefined;
  ProductDetail: { product: Product };
  CategoryDetail: { category: Category };
  Categories: { categories: Category[] };
  Sale: undefined;
  LoadMore: { offset: number };
};

export type ExploreNavParamList = {
  Explore: undefined;
  ProductDetails: { product: ProductOrder };
};

export type AppNavParamList = {
  Home: undefined;
  Search: undefined;
  Cart: undefined;
  Offer: undefined;
  Account: undefined;
};

export type CartNavParamList = {
  Cart: undefined;
  ShipTo: undefined;
  Payment: undefined;
  ChooseCard: undefined;
  AddAddress: undefined;
  EditAddress: undefined;
  Success: undefined;
  AddCard: undefined;
};

export type AccountNavParamList = {
  Profile: undefined;
  BasicInfo: undefined;
  AddressInfo: undefined;
  PaymentInfo: undefined;
  Password: undefined;
  AddCard: undefined;
  AddAddress: undefined;
};

export type OfferNavParamList = {
  Offer: undefined;
  OfferDetail: undefined;
};

// Context
export interface User {
  id: number;
  first_name: string;
  last_name?: string;
  email: string;
  iat?: number;
}

export interface AppContext {
  isLoggedIn: boolean;
  setUserState: (state: boolean) => void;
  user: User;
  addUserDetails: (userDetails: User) => void;
  cart: ProductOrder[];
  isProductInCart: (product: ProductOrder) => boolean;
  manageCart: (
    actions: ACTIONS,
    product?: ProductOrder,
    quantity?: number
  ) => void;
  cartTotal: number;
  address: any;
  setAddress: any;
}

export type ACTIONS =
  | 'ADD_TO_CART'
  | 'REMOVE_FROM_CART'
  | 'INCREASE_COUNT'
  | 'DECREASE_COUNT'
  | 'EMPTY_CART';

// Image

interface ImageProps {
  id: number;
  src: string;
  name?: string;
  alt?: string;
}

// Product
export interface Product {
  id: number;
  meta_thumbnail_id: string;
  title: string;
  description: string;
  short_description: string;
  regular_price: string;
  sale_price: string;
  gallery: string;
  categories?: string;
  stock_quantity: string;
  slug?: string;
}

export interface ProductOrder extends Product {
  count?: number;
}

// Address Content
export interface BillingInfo {
  id?: number;
  user_id: number;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  phone: string;
}

// banner
export interface BannerProps {
  image: string;
  id: number;
}

// variant
export interface Variant {
  value: number | string;
}

// category
export interface Category {
  id: number;
  category_name: string;
  slug: string;
}

// notifications

export interface NotificationProp {
  id: number;
  title: string;
  body: string;
  date: string;
}

// Customer Card Details

export interface CustomerCardDetailsProp {
  id: number;
  user_id: number;
  card_number: string;
  card_holder_name: string;
  card_exp_date: string;
}

// Offer Card

export interface OfferCardProp {
  id: number;
  image: ImageRequireSource;
}

export interface PaymentOptions {
  id: number;
  title: string;
  method: string;
  icon: ReactNode;
}
