import { IProfile, ISelectValue, IUser } from 'types/interfaces';

export const FakeUser: IProfile = {
  id: 1,
  login: 'test',
  name: 'test',
  fullName: 'test',
  type: 0,
  district: 0,
  educationLicense: true,
  medicineLicense: false,
  innovationGround: true,
  supervisor: 'test',
  responsible: 'test',

  isAdmin: false,
  status: 2,
  cause: 'wow',
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
