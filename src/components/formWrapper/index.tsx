import { FC } from 'react';

// Styles
import styles from './FormWrapper.module.scss';

// Components
import FormBackground from '../formBackground';
import FormCreateAccount from '../formCreateAccount';

const FormWrapper: FC = () => (
  <div className={styles.formWrapper}>
    <FormBackground />
    <FormCreateAccount />
  </div>
);

export default FormWrapper;
