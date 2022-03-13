import { PasswordHiddenIcon, PasswordShownIcon } from 'assets/icons';
import { ChangeEvent, FocusEvent, InputHTMLAttributes, ReactNode, useState } from 'react';
import { IInputError } from 'types/interfaces';
import { combineClasses } from 'utils';
import { H3 } from '../H3/H3';
import { H5 } from '../H5/H5';
import styles from './Input.module.scss';

interface Props {
  heading?: string | ReactNode;
  error?: IInputError;
}

export const Input = (props: Props & InputHTMLAttributes<HTMLInputElement>) => {
  const {
    heading,
    error,
    type = 'text',
    name,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    className,
    ...rest
  } = props;

  const [isHidden, setIsHidden] = useState(true);

  const handleNewMode = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className={combineClasses(styles.wrapper, className ?? '')} {...rest}>
      {heading && <H3 className={styles.heading}>{heading}</H3>}
      <div className={styles.inner}>
        <input
          type={isHidden ? type : 'text'}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={combineClasses(styles.input, error?.exist ? styles.input_error : '')}
        />
        {error?.exist && <H5 className={styles.error}>{error.text}</H5>}
        {(type === 'password' || !isHidden) && (
          <div className={styles.icon}>
            {isHidden ? (
              <PasswordHiddenIcon onClick={() => handleNewMode()} />
            ) : (
              <PasswordShownIcon onClick={() => handleNewMode()} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
