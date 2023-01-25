import Animated, { animations } from '@/components/ui/animations';
import Button from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="relative mx-auto grid grid-cols-12 mb-12">
      <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 text-center sm:text-left">
        <span className="text-2xl text-header-gradient font-semibold uppercase">
          ¡Hola!
        </span>
        <Animated animation={animations.fadeRight} replay={false}>
          <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-snug sm:pr-8 xl:pr-10">
            Desarrollo de software a medida para{` `}
            <span className="text-header-gradient">PYMES y Start-ups</span>
          </h1>
        </Animated>
        <Animated animation={animations.fadeDown}>
          <p className="paragraph hidden sm:block">
            Trabajaremos en estrecha colaboración contigo para asegurarnos de
            que tu proyecto sea un éxito. Si estás buscando un equipo confiable
            y dedicado para ayudarte a llevar tu negocio al siguiente nivel, no
            dudes en contactarnos. Estamos aquí para ayudarte a crecer y
            prosperar.
          </p>
        </Animated>
        <Animated
          animation={animations.fadeUp}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link href="#contact">
            <Button className="px-8 py-4 text-lg">¡Charlemos!</Button>
          </Link>
          <Link href="/services">
            <Button className="px-8 py-4 text-lg" variant="secondary">
              Nuestros servicios
            </Button>
          </Link>
        </Animated>
      </div>
      <Animated
        animation={animations.fadeUp}
        className="hidden relative sm:block col-span-12 lg:col-span-6"
      >
        <Image
          priority
          src="/img/hero.svg"
          alt="hero"
          layout="fill"
          objectFit="contain"
        />
      </Animated>
    </header>
  );
};

export default Header;
