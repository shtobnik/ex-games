import React, { FC } from 'react';

// Styles
import styles from './FormWrapper.module.scss';

// Components
import FormBackground from '../formBackground';

const FormWrapper: FC = () => (
  <div className={styles.formWrapper}>
    <FormBackground />
  </div>
);

export default FormWrapper;
