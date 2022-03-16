import { ButtonHTMLAttributes } from 'react';
import { combineClasses } from 'utils';
import styles from './Button.module.scss';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { disabled, className, children, onClick, ...rest } = props;

  return (
    <button
      className={combineClasses(
        styles.styled,
        disabled ? styles.styled_disabled : '',
        className ?? ''
      )}
      onClick={!disabled ? onClick : undefined}
      {...rest}
    >
      {children}
    </button>
  );
};
