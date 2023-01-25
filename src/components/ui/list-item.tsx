import React from 'react';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const ListItem: React.FC<Props> = ({ title, children }) => {
  return (
    <li className="space-y-2">
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span className="text-left font-bold">{title}</span>
      </div>
      <slot>{children}</slot>
    </li>
  );
};

export default ListItem;
