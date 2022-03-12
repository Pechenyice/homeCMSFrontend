import { IUser } from 'types/interfaces';

interface Props {
  onLogin: (data: IUser) => void;
}

export const Auth = ({ onLogin }: Props) => {
  return <div onClick={() => onLogin({ login: 'test', password: 'test' })}>auth</div>;
};
