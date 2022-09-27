import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../../ui/button';

const HamburgerMenu = () => (
  <div>
    <button className="relative group">
      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-16 h-16 bg-primary shadow-md">
        <div className="flex flex-col justify-center">
          <div className="bg-black h-1 w-7 rounded-full mb-2 transition-all duration-200 group-hover:rotate-45 group-hover:translate-y-1 group-hover:opacity-100 origin-center"></div>
          <div className="self-end bg-black h-1 w-5 rounded-full transition-all duration-200 group-hover:-rotate-45 group-hover:-translate-y-1 group-hover:opacity-100 origin-center group-hover:w-7"></div>
        </div>
      </div>
    </button>
  </div>
);

const Menu = () => {
  return (
    <nav id="navbar" className="relative z-10 w-full text-neutral-800">
      <div className="flex flex-col max-w-screen-xl lg:items-center lg:justify-between lg:flex-row py-4">
        <div className="flex flex-row items-center space-x-4 xl:space-x-8">
          <div className="relative w-full flex flex-row items-center justify-between py-6">
            <div className="relative w-48 xl:w-56 h-24">
              <Image
                src="/img/atomics_complete.png"
                layout="fill"
                objectFit="contain"
                alt="Nefa Logo"
              />
            </div>
            <button className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline">
              x
            </button>
          </div>
        </div>
        <div className={`flex items-center justify-start space-x-8`}>
          <div className="hidden md:flex space-x-3">
            <Button variant="link">Academy</Button>
            <Button className="" variant="default">
              Contacto
            </Button>
          </div>
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
