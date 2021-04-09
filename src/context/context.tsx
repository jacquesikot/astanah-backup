import React, {
  ReactNode,
  useContext,
  createContext,
  useState,
  useEffect,
} from 'react';

import { AppContext, User, ACTIONS, ProductOrder, Product } from '../../types';
import storage from '../utils/cache';

interface ProviderProps {
  children: ReactNode;
}

export const SHIPPING_COST = 500;
export const IMPORT_CHARGES = 20;

const Context = createContext<AppContext>({
  isLoggedIn: false,
  setUserState: () => {},
  user: {
    id: Math.random(),
    first_name: '',
    last_name: '',
    email: '',
  },
  addUserDetails: () => {},
  cart: [],
  manageCart: () => {},
  isProductInCart: () => false,
  cartTotal: 0,
  address: {},
  setAddress: () => {},
});

const Provider = ({ children }: ProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [cart, setCart] = useState<ProductOrder[]>([]);
  const [address, setAddress] = useState<any[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [user, setUser] = useState<User>({
    id: Math.random(),
    first_name: '',
    last_name: '',
    email: '',
  });

  const calculateTotal = () => {
    let total = 0;
    cart.forEach(
      (item) =>
        (total +=
          item.count! *
          Number(item.sale_price > 0 ? item.sale_price : item.regular_price))
    );
    setCartTotal(Number(total.toFixed(2)));
  };

  const isProductInCart = (item: ProductOrder) => {
    if (cart.find((product) => product.id === item.id)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const manageCart = (
    action: ACTIONS,
    product?: ProductOrder,
    quantity?: number
  ) => {
    switch (action) {
      case 'ADD_TO_CART':
        if (isProductInCart(product!)) {
          return;
        }
        product!.count = quantity;
        setCart([...cart, product!]);
        break;
      case 'REMOVE_FROM_CART':
        setCart(cart.filter((cartItem) => cartItem.id !== product!.id));
        break;
      case 'EMPTY_CART':
        setCart([]);
        break;
      case 'INCREASE_COUNT':
        product!.count!++;
      case 'DECREASE_COUNT':
        product!.count!--;
      default:
        break;
    }
  };

  const setUserState = (state: boolean) => {
    setIsLoggedIn(state);
  };

  const addUserDetails = (userDetails: User) => {
    setUser(userDetails);
  };

  const state: AppContext = {
    isLoggedIn,
    setUserState,
    user,

    addUserDetails,
    isProductInCart,
    manageCart,
    cart,
    cartTotal,
    address,
    setAddress,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
