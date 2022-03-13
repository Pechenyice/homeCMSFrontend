import { FC, useState } from 'react';
import { IEvent } from 'types/interfaces';
import { createContext } from 'react';

export interface IInfosContextValues {
  addInfo: (text: string) => void;
  removeInfo: (id: number) => void;
  infos: IEvent[];
}

export const InfosContext = createContext({} as IInfosContextValues);

export const InfosProvider: FC = ({ children }) => {
  const [infos, setInfos] = useState<IInfosContextValues['infos']>([]);

  const addInfo = (text: IEvent['text']) => {
    const id = infos.length ? infos[infos.length - 1].id + 1 : 0;
    setInfos([...infos, { id, text }]);
  };

  const removeInfo = (id: IEvent['id']) => {
    setInfos(infos.filter((e) => e.id !== id));
  };

  return (
    <InfosContext.Provider
      value={{
        infos,
        addInfo,
        removeInfo,
      }}
    >
      {children}
    </InfosContext.Provider>
  );
};
