import { FC, useState, useEffect } from 'react';

// Styles
import styles from './Resend.module.scss';

const Resend: FC = () => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          return 60;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className={styles.resend}>Resend ({timeLeft})</div>;
};

export default Resend;
