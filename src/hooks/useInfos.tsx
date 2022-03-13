import { InfosContext } from 'contexts/InfosContext';
import { useContext } from 'react';

export const useInfos = () => {
  const { infos, addInfo, removeInfo } = useContext(InfosContext);

  return {
    infos,
    addInfo,
    removeInfo,
  };
};
