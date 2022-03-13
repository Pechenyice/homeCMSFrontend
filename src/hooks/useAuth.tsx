import { AuthContext } from 'contexts/AuthContext';
import { useContext } from 'react';
import { EAuthStatus } from 'types/enums';

export const useAuth = () => {
  const { status, profile, handleLogin, handleLogout, handleCheckAuth, initialCheckIsPending } =
    useContext(AuthContext);
  const isPending = status === EAuthStatus.PENDING;
  const isError = status === EAuthStatus.ERROR;
  const isSuccess = status === EAuthStatus.SUCCESS;
  const isAuthenticated = profile && isSuccess;
  const isAdmin = profile && profile.isAdmin;
  return {
    status,
    profile,
    handleLogin,
    handleLogout,
    handleCheckAuth,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
    isAdmin,
    initialCheckIsPending,
  };
};
