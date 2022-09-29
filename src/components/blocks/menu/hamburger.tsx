import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';
import styles from './Menu.module.scss';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isOpened: boolean;
}

const Hamburger: React.FC<Props> = ({ isOpened, className, ...rest }) => (
  <button
    {...rest}
    className={cn(styles.hamburger, { [styles.freeze]: isOpened })}
  >
    <div>
      <span
        className={cn(styles.top, {
          [styles.top__opened]: isOpened,
        })}
      />
      <span
        className={`${styles.bottom} ${isOpened && styles.bottom__opened}`}
      />
    </div>
  </button>
);

export default Hamburger;
