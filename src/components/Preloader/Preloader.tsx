import styles from './Preloader.module.css';
import { useAuth } from 'hooks';

const Preloader = () => {
  const { initialCheckIsPending } = useAuth();
  return (
    <>
      {initialCheckIsPending && (
        <section className={styles.wrapper}>
          <div className={styles.content}>Preloader</div>
        </section>
      )}
    </>
  );
};

export default Preloader;
