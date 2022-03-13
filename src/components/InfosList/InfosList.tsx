import styles from 'InfosList.module.scss';
import { useInfos } from 'hooks';
import { IEvent } from 'types/interfaces';

const ErrorsList = () => {
  const { infos, addInfo, removeInfo } = useInfos();

  return (
    <section>
      {infos.map((e: IEvent, i: number) => (
        <p onClick={() => removeInfo(e.id)} key={i}>
          {e.text} {e.id}
        </p>
      ))}
      <button onClick={() => addInfo('new')}>add</button>
    </section>
  );
};

export default ErrorsList;
