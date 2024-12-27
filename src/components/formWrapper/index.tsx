import React, { FC } from 'react';

// Styles
import styles from './FormWrapper.module.scss';

// Components
import FormBackground from '../FormBackground';
import FormCreateAccount from '../FormCreateAccount';

const FormWrapper: FC = () => (
  <div className={styles.formWrapper}>
    <FormBackground />
    <FormCreateAccount />
  </div>
);

export default FormWrapper;
