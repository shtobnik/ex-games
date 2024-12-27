import React, { FC } from 'react';

// Styles
import styles from './Title.module.scss';

const Title: FC = () => (
  <div className={styles.titleWrapper}>
    <h2 className={styles.title}>
      Create an account<span className={styles.accent}>.</span>
    </h2>
    <div className={styles.isExist}>
      <span className={styles.text}>Already have an account?</span>
    </div>
  </div>
);

export default Title;
