import styles from 'ErrorsList.module.css';
import { useErrors } from 'hooks';
import { IEvent } from 'types/interfaces';

const ErrorsList = () => {
  const { errors, addError, removeError } = useErrors();

  return (
    <section>
      {errors.map((e: IEvent, i: number) => (
        <p onClick={() => removeError(e.id)} key={i}>
          {e.text} {e.id}
        </p>
      ))}
      <button onClick={() => addError('new')}>add</button>
    </section>
  );
};

export default ErrorsList;
