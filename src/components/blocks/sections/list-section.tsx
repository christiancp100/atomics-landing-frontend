import BaseSection from '@/components/layout/base-section';
import Animated from '@/components/ui/animations';
import Button from '@/components/ui/button';
import ListItem from '@/components/ui/list-item';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props extends React.HTMLProps<HTMLDivElement> {
  image: {
    src: string;
    alt: string;
  };
}

const ListSection: React.FC<Props> = ({ image, ...rest }) => {
  const customFadeDown = {
    initial: { opacity: 0, y: -100 },
    final: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <BaseSection {...rest}>
      <Animated
        animation={customFadeDown}
        className="col-span-12 lg:col-span-6 relative hidden md:block"
      >
        <Image
          alt={image.alt}
          src={image.src}
          layout="fill"
          objectFit="contain"
          className=" w-[95%]"
        />
      </Animated>

      <Animated
        animation={customFadeDown}
        className="col-span-12 lg:col-span-5 space-y-6 md:px-4 px-0 sm:px-6 mt-20"
      >
        <h2 className="text-4xl font-semibold">
          Aumenta tu <span className="text-header-gradient">Alcance</span>
        </h2>
        <p className="paragraph sm:text-justify">
          Buscaremos juntos cómo diferenciarte de tu competencia, te
          proporcionaremos una web única adaptada a tu producto o servicio y
          estableceremos unos objetivos a medio y largo plazo.
        </p>
        <ul className="space-y-4 sm:space-y-2 text-left">
          <ListItem title="Página web con las últimas tecnologías." />
          <ListItem title="Plan de marketing personalizado." />
          <ListItem title="Gestión íntegra de redes sociales." />
          <ListItem title="Tramitación de subvenciones estatales." />
        </ul>
        <Link href="#contact">
          <Button
            variant="secondary"
            className="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border text-base"
          >
            ¡Tomemos un café!
          </Button>
        </Link>
      </Animated>
    </BaseSection>
  );
};

export default ListSection;
