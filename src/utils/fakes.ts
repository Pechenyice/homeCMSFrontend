import { API } from 'api';
import { IProfile, ISelectValue, IUser } from 'types/interfaces';

export const FakeUser: IProfile = {
  id: 1,
  login: 'test',
  isAdmin: false,
  company: {
    name: 'test',
    fullName: 'test',
    type: 1,
    district: 0,
    educationLicense: true,
    medicineLicense: false,
    innovationGround: true,
    supervisor: 'test',
    responsible: 'test',
    status: 2,
    cause: 'wow',
  },
};

export async function checkAuth(ms: number): Promise<IProfile | null> {
  return new Promise((resolve) => setTimeout(() => resolve(null), ms));
}

export async function checkUser(
  login: IUser['login'],
  password: IUser['password'],
  ms: number
): Promise<IProfile | null> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(login === 'test' && password === 'test' ? FakeUser : null), ms)
  );
}

export async function logoutUser(ms: number): Promise<IProfile | null> {
  return new Promise((resolve) => setTimeout(() => resolve(true ? null : FakeUser), ms));
}

export async function fetchDistricts(ms: number): Promise<ISelectValue[]> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { id: 0, value: 'test' },
          { id: 1, value: 'new test' },
        ]),
      ms
    )
  );
}

export async function fetchOrganizationTypes(ms: number): Promise<ISelectValue[]> {
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve([
          { id: 0, value: 'test' },
          { id: 1, value: 'new test' },
        ]),
      ms
    )
  );
}

export async function updateUser(ms: number): Promise<boolean> {
  return new Promise((resolve, reject) => setTimeout(() => resolve(true), ms));
}
