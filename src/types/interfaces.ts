export interface ISelectValue {
  id: number;
  value: string;
}

export interface IUser {
  login: string;
  password: string;
}

export interface IProfile {
  id: number;
  isAdmin: boolean;
  login: string;
  name: string;
  fullName: string;
  type: ISelectValue;
  district: ISelectValue;
  educationLicense: boolean;
  medicineLicense: boolean;
  innovationGround: boolean;
  supervisor: string;
  responsible: string;
}

export interface IPreloader {
  shouldDisplay: boolean;
}

export interface IInternal {
  authFinished: boolean;
  isAuthed: boolean;
}

export interface IEvent {
  id: number;
  text: string;
}

export interface IErrorsList {
  list: IEvent[];
}