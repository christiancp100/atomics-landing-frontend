import React, { Dispatch, SetStateAction, useState } from 'react';

interface IOption {
  value: string;
  title: string;
  selectedOptions: Array<string>;
  setSelectedOptions: Dispatch<SetStateAction<string[]>>;
}

interface ISelectMultiple {
  options: Array<{
    value: string;
    title: string;
  }>;
  selectedOptions: Array<string>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

const Option: React.FC<IOption> = ({
  title,
  value,
  setSelectedOptions,
  selectedOptions,
}) => {
  const handleClick = () => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option != value));
      return;
    }
    setSelectedOptions([...selectedOptions, value]);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`ring-2 ring-black rounded-sm p-2 ${
        selectedOptions.includes(value) ? 'bg-primary' : ''
      }`}
    >
      {title}
    </button>
  );
};

const SelectMultiple: React.FC<ISelectMultiple> = ({
  selectedOptions,
  setSelectedOptions,
  options,
}) => {
  return (
    <div className="flex gap-6 flex-wrap">
      {options &&
        options.map((option) => (
          <Option
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            {...option}
            key={option.value}
          />
        ))}
    </div>
  );
};

export default SelectMultiple;
