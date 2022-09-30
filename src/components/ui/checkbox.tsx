import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  text: React.ReactNode;
}

const Checkbox: React.FC<Props> = ({ text, name, className, ...rest }) => {
  return (
    <div className="inline-flex items-baseline gap-x-2">
      <input
        name={name}
        className={` cursor-pointer appearance-none pb-1 border-2 checked:bg-primary border-b-black border-separate border-spacing-8 focus:checked:bg-primary hover:checked:bg-primary outline-none focus:ring-0 focus:outline-none ${
          className ?? ''
        }`}
        {...rest}
        type="checkbox"
      />
      <label htmlFor={name}>{text}</label>
    </div>
  );
};

export default Checkbox;
