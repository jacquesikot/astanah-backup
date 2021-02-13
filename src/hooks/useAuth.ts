import jwtDecode from 'jwt-decode';

import { useAppContext } from '../context/context';
import authStorage from '../utils/authStorage';
import { User } from '../../types';

const useAuth = () => {
  const { user, addUserDetails, setUserState } = useAppContext();

  const logIn = (authToken: string) => {
    const user = jwtDecode(authToken);
    addUserDetails(user as User);
    setUserState(true);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUserState(false);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};

export default useAuth;
