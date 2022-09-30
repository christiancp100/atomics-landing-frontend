import Image from 'next/image';
import React, { useState } from 'react';

interface ICard {
  img: string;
  title: string;
  description: string;
}

const Card: React.FC<ICard> = ({ img, title, description }) => {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  return (
    <div
      onClick={() => setMobileExpanded(!mobileExpanded)}
      className="flex flex-col relative px-6 md:p-12 h-auto shadow-md rounded-lg"
    >
      <div className=" flex md:flex-col items-center flex-row justify-between md:h-96 gap-x-4 group overflow-hidden">
        <div className="relative h-48 w-48 mx-auto group-hover:md:opacity-0 transition-all duration-500 group-hover:md:-translate-y-96">
          <Image src={img} layout="fill" objectFit="contain" />
        </div>
        <span className="font-bold text-lg group-hover:md:-translate-y-56 transition-all duration-500 block md:text-center mx-auto">
          {title}
        </span>
        <span className="hidden group-hover:hidden md:block text-center md:translate-y-40 h-0 opacity-1 group-hover:md:block group-hover:-translate-y-56 group-hover:opacity-100 transition-all duration-500">
          {description}
        </span>
      </div>
      <button className="md:hidden font-bold select-none text-white text-3xl absolute bottom-0 right-0 bg-primary h-12 w-12 flex justify-center items-center rounded-tl-lg rounded-br-lg">
        {mobileExpanded ? '-' : '+'}
      </button>
      {mobileExpanded && <p className="text-justify mb-12">{description}</p>}
    </div>
  );
};

export default Card;
