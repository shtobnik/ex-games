import { FC } from 'react';

// Styles
import styles from './Icon.module.scss';

interface IIcon {
  image: string;
  width?: string;
  height?: string;
  color?: string;
  fillRule?: 'nonzero' | 'evenodd' | 'inherit';
  clipRule?: 'nonzero' | 'evenodd' | 'inherit';
}

const Icon: FC<IIcon> = ({
  image,
  width,
  height,
  color,
  fillRule,
  clipRule,
}) => (
  <svg className={styles.icon} width={width} height={height} color={color}>
    <use
      href={`/images/sprite.svg?0.1#${image}`}
      fillRule={fillRule}
      clipRule={clipRule}
    />
  </svg>
);

export default Icon;
