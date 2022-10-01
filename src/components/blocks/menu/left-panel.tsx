import React from 'react';
import cn from 'classnames';
import styles from './Menu.module.scss';
import Image from 'next/image';

interface Props {
  isOpened: boolean;
}

const LeftPanel: React.FC<Props> = ({ isOpened }) => {
  return (
    <div
      className={cn(styles.panel, styles.leftPanel, {
        [styles.leftPanel__opened]: isOpened,
        [styles.leftPanel__closed]: !isOpened,
      })}
    >
      <div className={styles.logo}>
        <Image
          src="/img/atomics_complete.svg"
          layout="fill"
          objectFit="contain"
          alt="Atomics Logo"
        />
      </div>
    </div>
  );
};

export default LeftPanel;
