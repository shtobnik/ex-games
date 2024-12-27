import React, { FC } from 'react';
import { useField } from 'formik';

// Styles
import styles from './Input.module.scss';

// Components
import Icon from '../Icon';

type InputProps = {
  label: string;
  type: string;
  name: string;
  icon: string;
  iconWidth?: string;
  iconHeight?: string;
  hint?: string;
};

const Input: FC<InputProps> = ({
  label,
  type,
  name,
  icon,
  iconWidth,
  iconHeight,
  hint,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className={styles.inputBlock}>
      <div
        className={`${styles.inputWrapper} ${
          meta.touched && meta.error ? styles.error : '' // Додаємо клас для обгортки
        }`}
      >
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        <input
          id={name}
          type={type}
          {...field}
          className={`${styles.input} ${
            meta.touched && meta.error ? styles.error : ''
          }`}
        />
        <Icon
          image={icon}
          width={iconWidth}
          height={iconHeight}
          color={meta.touched && meta.error ? '#e80004' : '#7e6969'}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </div>
      {hint && <div className={styles.hint}>{hint}</div>}
      {meta.touched && meta.error && (
        <div className={styles.errorMessage}>{meta.error}</div>
      )}
    </div>
  );
};

export default Input;
