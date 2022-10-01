import React, { HTMLProps } from 'react';

const Input: React.FC<HTMLProps<HTMLInputElement>> = ({
  className,
  ...rest
}) => {
  return (
    <input
      className={`pb-1 border-0 border-b-2 border-b-black border-separate border-spacing-8 outline-none focus:outline-none focus:ring-0 focus:border-b-primary ${
        className ?? ''
      }`}
      {...rest}
    />
  );
};

export default Input;
