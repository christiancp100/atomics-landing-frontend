import React from 'react';
import Animated, { animations } from '@/components/ui/animations';
import Image from 'next/image';
import ListItem from '@/components/ui/list-item';
import Card from '@/components/ui/card';

const servicesCte: Service[] = [
  {
    name: 'Desarrollamos tu web a medida',
    description:
      'Si tienes una idea o quieres automatizar algún proceso repetitivo de tu negocio, somos tu solución.',
    img: '/img/tailor.png',
  },
  {
    name: 'Creamos tu tienda online',
    description:
      'Si tienes una idea o quieres automatizar algún proceso repetitivo de tu negocio, somos tu solución.',
    img: '/img/shop.png',
  },
  {
    name: 'Gestionamos tus redes sociales',
    description:
      'Si tienes una idea o quieres automatizar algún proceso repetitivo de tu negocio, somos tu solución.',
    img: '/img/network.png',
  },
  {
    name: 'Diseñamos tu estrategia de marketing',
    description:
      'Si tienes una idea o quieres automatizar algún proceso repetitivo de tu negocio, somos tu solución.',
    img: '/img/marketing.png',
  },
  {
    name: 'Tramitamos subvenciones',
    description:
      'Podemos subir automáticamente tus anuncios de Idealista a tu web cuando los publiques.',
    img: '/img/savings.png',
  },
  {
    name: 'Creamos la web de tu inmobiliaria',
    description:
      'Podemos subir automáticamente tus anuncios de Idealista a tu web cuando los publiques.',
    img: '/img/real-estate.png',
  },
];

const technicalServices: string[] = [
  'Desarrollo Web Front-End',
  'Desarrollo Web Back-End',
  'Diseño UX/UI',
  'Marketing Digital',
  'Prototipado',
  'Desarrollo de MVPs',
  'Estrategia de SEO/SEM',
  'Campañas de Facebook/Google Ads',
  'Analítica de datos',
];

const phases: Phase[] = [
  {
    title: 'Nos tomamos un café',
    description:
      'No se puede hacer algo bien hasta que no se sabe para quién se hace. En esta etapa te haremos un montón de preguntas para conocerte a ti y a tu negocio. De esta forma sabremos exactamente que es lo que necesitas y cómo podemos ayudarte.',
    img: '/img/coffee.svg',
  },
  {
    title: 'Diseñamos un prototipo',
    description:
      'No se puede hacer algo bien hasta que no se sabe para quién se hace. En esta etapa te haremos un montón de preguntas para conocerte a ti y a tu negocio. De esta forma sabremos exactamente que es lo que necesitas y cómo podemos ayudarte.',
    img: '/img/prototype.svg',
  },
  {
    title: 'Comenzamos a desarrollar',
    description:
      'No se puede hacer algo bien hasta que no se sabe para quién se hace. En esta etapa te haremos un montón de preguntas para conocerte a ti y a tu negocio. De esta forma sabremos exactamente que es lo que necesitas y cómo podemos ayudarte.',
    img: '/img/coder.svg',
  },
];

interface Phase {
  title: string;
  description: string;
  img: string;
}

interface Service {
  name: string;
  description: string;
  img: string;
}

const ServiceBox: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="flex flex-col md:flex-row gap-x-6 shadow-lg rounded-xl p-6 items-center justify-center">
      <div className="relative h-36 w-20 sm:w-36">
        <Image src={service.img} layout="fill" objectFit="contain" />
      </div>
      <div>
        <h1 className="text-center sm:text-left font-bold text-lg">
          {service.name}
        </h1>
        <p className="sm:text-justify text-center">{service.description}</p>
      </div>
    </div>
  );
};

const CenterHeader = () => {
  return (
    <header className="relative mx-auto grid grid-cols-6 mb-12 gap-y-12">
      <div className="col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 text-center">
        <span className="text-2xl text-header-gradient font-semibold uppercase">
          Nuestros Servicios
        </span>
        <Animated animation={animations.fadeRight} replay={false}>
          <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-snug sm:pr-8 xl:pr-10">
            No hablamos técnico,{' '}
            <span className="text-header-gradient">hablamos claro.</span>
          </h1>
        </Animated>
      </div>
      <Animated
        className="col-start-2 col-span-4"
        animation={animations.fadeDown}
      >
        <p className="paragraph text-center">
          Nuestra visión se basa en ayudar a pequeñas empresas a escalar sus
          negocios digitalmente con el poder del desarrollo a medida y las redes
          sociales.
        </p>
      </Animated>
      <div className="col-span-6 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10">
        {servicesCte.map((service) => (
          <ServiceBox service={service} key={service.name} />
        ))}
      </div>
      <div className="col-span-6 mt-12">
        <span className="text-4xl font-black">
          Necesitas algo más especfífico?
        </span>
        <ul className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 mt-12">
          {technicalServices.map((service) => (
            <ListItem key={service} title={service} />
          ))}
        </ul>
      </div>

      <div className="col-span-6 mt-12">
        <h1 className="text-4xl font-black mb-2">
          De conocernos a crecer juntos
        </h1>
        <span className="tracking-wide opacity-70">
          Estas son las próximas etapas
        </span>
        <ul className="grid lg:grid-cols-3 grid-cols-1  my-12 gap-10">
          {phases.map((phase) => (
            <Card key={phase.title} {...phase} />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default CenterHeader;
