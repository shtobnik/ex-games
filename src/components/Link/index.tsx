import { FC, ReactNode } from 'react';
import classNames from 'classnames';

// Styles
import styles from './Link.module.scss';

export type LinkType = {
  url?: string;
  icon?: string;
  color?: string;
  children?: ReactNode;
};

const Link: FC<LinkType> = ({ url, icon, color, children }) => {
  const linkClass = classNames(styles.link, {
    [styles[color as keyof typeof styles]]: color,
  });
  return (
    <a href={url} target="_blank" rel="noreferrer" className={linkClass}>
      {children}
    </a>
  );
};

export default Link;
