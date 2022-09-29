import React, { HTMLProps } from 'react';

const TextArea: React.FC<HTMLProps<HTMLTextAreaElement>> = ({
  className,
  ...rest
}) => {
  return (
    <textarea
      className={`pb-1 border-2 border-black border-separate border-spacing-8  focus:outline-none ${
        className ?? ''
      }`}
      {...rest}
    />
  );
};

export default TextArea;
