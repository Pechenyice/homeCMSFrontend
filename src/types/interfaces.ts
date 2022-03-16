import { EProposalStatus } from './enums';

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
  login: string;
  name: string;
  fullName: string;
  type: number;
  district: number;
  educationLicense: boolean;
  medicineLicense: boolean;
  innovationGround: boolean;
  supervisor: string;
  responsible: string;

  status: EProposalStatus;
  cause: string | null;
  isAdmin: boolean;
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

export interface IInputsState {
  [key: string]: IInput;
}

export interface IInput {
  value: string;
  validator: (value: string | number) => IValidationResult;
  error: IInputError;
}

export interface IInputError {
  exist: boolean;
  text: string;
}

export interface IValidationResult {
  success: boolean;
  text: string;
}

export interface IValidationObject {
  value: string | number;
  validator: (value: string | number) => IValidationResult;
}

export interface IBreadcrumbsPath {
  link: string;
  alias: string;
}
