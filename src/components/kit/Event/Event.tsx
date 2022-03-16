import { CloseIcon } from 'assets/icons';
import { HTMLAttributes, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { combineClasses } from 'utils';
import styles from './Event.module.scss';

interface Props {
  isError?: boolean;
}

export const Event = (props: HTMLAttributes<HTMLDivElement> & Props) => {
  const { className, children, onClick, isError, ...rest } = props;

  const [showCloser, setShowCloser] = useState(false);

  return (
    <div
      className={combineClasses(
        styles.styled,
        isError ? styles.styled_error : styles.styled_info,
        className ?? ''
      )}
      onClick={onClick}
      onMouseEnter={() => setShowCloser(true)}
      onMouseLeave={() => setShowCloser(false)}
      {...rest}
    >
      <CSSTransition in={showCloser} timeout={200} classNames="closer" unmountOnExit>
        <CloseIcon className={styles.closer} width={12} height={12} />
      </CSSTransition>
      {children}
    </div>
  );
};
