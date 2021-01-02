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
  Search: undefined;
};

export type ExploreNavParamList = {
  Explore: undefined;
  CategoryDetail: { category: Category };
  Favorites: undefined;
  Notifications: undefined;
};

export type AppNavParamList = {
  Home: undefined;
  Explore: undefined;
  Cart: undefined;
  Offer: undefined;
  Account: undefined;
};

export type CartNavParamList = {
  Cart: undefined;
  ShipTo: undefined;
  Payment: { address: BillingInfo };
  ChooseCard: undefined;
  AddAddress: undefined;
  EditAddress: { address: BillingInfo };
  Success: undefined;
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
  Meta_thumbnail_id: string;
  Title: string;
  Description: string;
  Short_Desc: string;
  Regular_price: string;
  Sale_price: string;
  Gallery: string;
  Categories: string;
}

export interface ProductOrder {
  id: number;
  Meta_thumbnail_id: string;
  Title: string;
  Description: string;
  Short_Desc: string;
  Regular_price: string;
  Sale_price: string;
  Gallery: string;
  Categories: string;
  count?: number;
}

// Address Content
export interface BillingInfo {
  id: number;
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
  cardNumber: string;
  cardHolder: string;
  date: string;
}

// Offer Card

export interface OfferCardProp {
  id: number;
  image: ImageRequireSource;
}

export interface PaymentOptions {
  id: number;
  title: string;
  icon: ReactNode;
}
