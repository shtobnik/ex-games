import { FC } from 'react';

// Styles
import styles from './Button.module.scss';

const Button: FC = () => (
  <button className={styles.button} type="submit">
    Create Account
  </button>
);

export default Button;
