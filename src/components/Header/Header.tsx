import { LogoIcon } from 'assets/icons';
import styles from './Header.module.scss';

interface Props {
  isUnauthorized: boolean;
}

export const Header = (props: Props) => {
  const { isUnauthorized } = props;

  if (isUnauthorized) {
    return (
      <div className={styles.wrapper}>
        <LogoIcon />
      </div>
    );
  }

  return <div className={styles.wrapper}></div>;
};
