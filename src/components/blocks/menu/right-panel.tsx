import React from 'react';
import cn from 'classnames';
import styles from './Menu.module.scss';
import Animated from '@/components/ui/animations';
import Link from 'next/link';

interface MenuEntry {
  title: string;
  href: string;
}

interface Props {
  isOpened: boolean;
  entries: Array<MenuEntry>;
}

const animation = {
  initial: { opacity: 0 },
  final: { opacity: 1, transition: { duration: 0.75, delay: 0.3 } },
};

const RightPanel: React.FC<Props> = ({ isOpened, entries }) => {
  return (
    <div
      className={cn(styles.panel, styles.rightPanel, {
        [styles.rightPanel__opened]: isOpened,
        [styles.rightPanel__closed]: !isOpened,
      })}
    >
      <Animated
        className={`${isOpened ? 'block' : 'hidden'}`}
        animation={animation}
      >
        <ul>
          {entries &&
            entries.map((entry) => (
              <Link href={entry.href} key={entry.href}>
                <li className={styles.navLink}>{entry.title}</li>
              </Link>
            ))}
        </ul>
      </Animated>
    </div>
  );
};

export default RightPanel;
