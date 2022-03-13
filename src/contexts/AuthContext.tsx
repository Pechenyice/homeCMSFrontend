import { API } from 'api';
import UnauthorizedApp from 'apps/UnauthorizedApp/UnauthorizedApp';
import { Auth, ErrorsList, InfosList, Preloader } from 'components';
import { useErrors } from 'hooks';
import { createContext, FC, useEffect, useState } from 'react';
import { EAuthStatus } from 'types/enums';
import { IProfile, IUser } from 'types/interfaces';
import { ErrorsProvider } from './ErrorsContext';
import { InfosProvider } from './InfosContext';

export interface IAuthContextValues {
  handleLogin: (data: IUser) => void;
  handleLogout: () => void;
  handleCheckAuth: () => void;
  status: EAuthStatus;
  profile?: IProfile | null;
  initialCheckIsPending: boolean;
}

export const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider: FC = ({ children }) => {
  const [state, setState] = useState<
    Pick<IAuthContextValues, 'status' | 'profile' | 'initialCheckIsPending'>
  >({
    status: EAuthStatus.PENDING,
    profile: null,
    initialCheckIsPending: true,
  });

  const { addError } = useErrors();

  const internalAuthCheck = async () => {
    try {
      setState({
        ...state,
        status: EAuthStatus.PENDING,
      });

      const profile = await API.checkAuth();

      if (profile) {
        setState((prevState) => ({
          ...state,
          status: EAuthStatus.SUCCESS,
          profile,
          initialCheckIsPending: false,
        }));
      } else {
        setState((prevState) => ({
          ...state,
          status: EAuthStatus.ERROR,
          profile: null,
          initialCheckIsPending: false,
        }));
      }
    } catch (e) {
      addError('Произошла ошибка при проверке подлинности пользователя. Попробуйте позже.');
    }
  };

  const internalLogin = async (data: IUser) => {
    try {
      setState({
        ...state,
        status: EAuthStatus.PENDING,
      });

      const profile = await API.login(data);

      if (profile) {
        setState({ ...state, status: EAuthStatus.SUCCESS, profile });
      } else {
        setState({ ...state, status: EAuthStatus.ERROR, profile: null });
        addError('Такого пользователя не существует!');
      }
    } catch (e) {
      addError('Произошла ошибка при входе в аккаунт. Попробуйте позже.');
    }
  };

  useEffect(() => {
    internalAuthCheck();
  }, []);

  const handleLogin = (data: IUser) => {
    internalLogin(data);
  };

  const handleLogout = () => {};

  const handleCheckAuth = () => {
    internalAuthCheck();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        handleLogin,
        handleLogout,
        handleCheckAuth,
      }}
    >
      {state.status === EAuthStatus.PENDING ? (
        <Preloader />
      ) : state.status === EAuthStatus.ERROR ? (
        <>
          <ErrorsList />
          <InfosList />

          <UnauthorizedApp />
        </>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
