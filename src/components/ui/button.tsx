import React, { useMemo } from 'react';

export type Variant = 'primary' | 'secondary' | 'default' | 'link';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ variant = `primary`, children, className, ...rest }, ref) => {
  const variantClassNames = useMemo(() => {
    switch (variant) {
      case `primary`:
        return `bg-primary rounded-md hover:shadow-lg`;
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
      ref={ref}
      className={`px-4 py-2 font-medium ${variantClassNames} ${
        className ?? ``
      }`}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = `Button`;

export default Button;
