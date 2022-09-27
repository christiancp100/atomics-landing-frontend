import BaseSection from '@/components/layout/base-section';
import Animated, { animations } from '@/components/ui/animations';
import Button from '@/components/ui/button';
import Image from 'next/image';
import React, { HTMLProps } from 'react';

const BlockSection: React.FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  return (
    <BaseSection className={`mb-20 ${className ?? ``}`} {...rest}>
      <Animated
        animation={animations.fadeRight}
        className="relative col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8 text-justify"
      >
        <h2 className="text-4xl font-semibold text-center sm:text-left">
          ¿Qué te{` `}
          <span className="text-header-gradient">ofrecemos</span>?
        </h2>
        <div className="space-y-2">
          <h4 className="text-lg font-medium">
            Desarrollo de software bajo demanda
          </h4>
          <p className="paragraph text-sm xl:text-base">
            Nos regimos por el principio de que no se puede hacer algo bien,
            hasta que no sabemos para quién lo hacemos. Queremos conocerte a ti
            y a tu empresa para poder ofrecerte el mejor asesoramiento.
            Recuerda, la tecnología es una herramienta, pero de por si no
            resuelve nada, son los procesos humanos los que hacen que una idea
            salga a la luz.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-medium">
            Ponemos en marcha tu tienda online
          </h4>
          <p className="paragraph text-sm xl:text-base">
            Las soluciones de comercio electrónico existentes a día de hoy son
            complejas y ofrecen demasiadas opciones. Nosotros desarrollamos un
            motor de e-commerce que puede usar hasta un niño, únicamente con lo
            que es imprescindible para poner tu tienda online en marcha. Te
            puedes despreocupar de todo, gestionamos los envíos y los pagos por
            ti.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-medium">
            Buscamos diferenciarte de tu competencia
          </h4>
          <p className="paragraph text-sm xl:text-base">
            Ya sea a nivel técnico, con cargas ultra rápidas de tu web para
            aumentar la retención del usuario, o a nivel estratégico, utilizando
            buenas prácticas de SEO y un marketing adaptado a tu cliente
            objetivo.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary">¡Empecemos!</Button>
          <Button variant="secondary">Ver proyectos</Button>
        </div>
      </Animated>
      <Animated
        animation={animations.fadeLeft}
        className="relative col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8"
      >
        <Image
          src="/img/hero.png"
          layout="fill"
          alt="offer image"
          objectFit="cover"
          objectPosition="35% 0%"
        />
      </Animated>
    </BaseSection>
  );
};

export default BlockSection;
