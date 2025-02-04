import { FC } from 'react';

// Styles
import styles from './FormBackground.module.scss';

// Components
import Logo from '../logo';

const FormBackground: FC = () => (
  <div className={styles.formBackground}>
    <div className="">
      <Logo />
    </div>
    <div className="creator">Nick Mine Inc.</div>
  </div>
);

export default FormBackground;
