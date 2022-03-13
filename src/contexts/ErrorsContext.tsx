import { FC, useState } from 'react';
import { IEvent } from 'types/interfaces';
import { createContext } from 'react';

export interface IErrorsContextValues {
  addError: (text: string) => void;
  removeError: (id: number) => void;
  errors: IEvent[];
}

export const ErrorsContext = createContext({} as IErrorsContextValues);

export const ErrorsProvider: FC = ({ children }) => {
  const [errors, setErrors] = useState<IErrorsContextValues['errors']>([]);

  const addError = (text: IEvent['text']) => {
    const id = errors.length ? errors[errors.length - 1].id + 1 : 0;
    setErrors([...errors, { id, text }]);
  };

  const removeError = (id: IEvent['id']) => {
    setErrors(errors.filter((e) => e.id !== id));
  };

  return (
    <ErrorsContext.Provider
      value={{
        errors,
        addError,
        removeError,
      }}
    >
      {children}
    </ErrorsContext.Provider>
  );
};
