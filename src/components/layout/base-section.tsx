import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
}

const BaseSection: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`relative px-4 sm:px-8  grid grid-cols-12 sm:gap-x-6 text-center md:text-left overflow-hidden py-4 ${
        className ?? ``
      }`}
      {...rest}
    >
      <slot>{children}</slot>
    </div>
  );
};

export default BaseSection;
