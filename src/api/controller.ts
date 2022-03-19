import { IProfileState, IProfile, ISelectValue, IUser } from 'types/interfaces';
import * as fakes from 'utils';
import { safeFetch } from './wrapper';

export const API = {
  profile: {
    checkAuth(): Promise<IProfile | null> {
      return fakes.checkAuth(1000);
      //   return safeFetch(
      //     constructUrl("/check_auth"),
      //     "POST",
      //     aborts.CHECK_AUTH_CONTROLLER
      //   );
    },
    login({ login, password }: IUser): Promise<IProfile | null> {
      return fakes.checkUser(login, password, 1000);
    },
    logout(): Promise<IProfile | null> {
      return fakes.logoutUser(1000);
    },
    update(data: IProfileState): Promise<boolean | null> {
      return fakes.updateUser(1000);
    },
  },
  queries: {
    fetchDistricts(): Promise<ISelectValue[]> {
      return fakes.fetchDistricts(5000);
    },
    fetchOrganizationTypes(): Promise<ISelectValue[]> {
      return fakes.fetchOrganizationTypes(3000);
    },
  },
};
