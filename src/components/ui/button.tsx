import React, { useMemo } from 'react';
import Loading from './animations/loading';

export type Variant = 'primary' | 'secondary' | 'default' | 'link';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    { variant = `primary`, children, className, loading = false, ...rest },
    ref,
  ) => {
    const variantClassNames = useMemo(() => {
      switch (variant) {
        case `primary`:
          return `disabled:bg-black transition-all duration-200 disabled:text-white  bg-primary rounded-md hover:shadow-lg`;
        case `secondary`:
          return `bg-secondary rounded-md ring-2 ring-primary hover:shadow-lg`;
        case `link`:
          return `hover:font-bold shadow-none hover:shadow-none`;
        default:
          return `bg-default text-white rounded-full hover:shadow-lg`;
      }
    }, [variant]);
    return (
      <button
        disabled={loading}
        ref={ref}
        className={`disabled:cursor-not-allowed inline-flex justify-center items-center px-4 py-2 font-medium ${variantClassNames} ${
          className ?? ``
        }`}
        {...rest}
      >
        {loading && <Loading />}
        {children}
      </button>
    );
  },
);

Button.displayName = `Button`;

export default Button;
