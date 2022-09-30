import BaseSection from '@/components/layout/base-section';
import Animated, { animations } from '@/components/ui/animations';
import Button from '@/components/ui/button';
import ListItem from '@/components/ui/list-item';
import Image from 'next/image';
import React from 'react';

const EnumerateSection = () => {
  return (
    <BaseSection className="my-24 shadow-none">
      <Animated
        animation={animations.fadeRight}
        className="relative col-span-12 lg:col-span-6"
      >
        <Image
          src="/img/shopping.svg"
          objectFit="contain"
          alt=""
          layout="fill"
        />
      </Animated>

      <Animated
        animation={animations.fadeLeft}
        className="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 mt-8 xl:px-8"
      >
        <h2 className="text-4xl font-semibold">
          Nuestra plataforma e-commerce a tu disposición
        </h2>
        <ul className="space-y-8 sm:space-y-4">
          <ListItem title="Pagos seguros con bajas comisiones">
            <p className="text-justify text-sm text-gray-700 leading-relaxed">
              Lo sabemos, hay que pagar comisiones por todo, en este caso los
              pagos por internet son complejos y los gestionan grandes entidades
              que cobran por ello. De todas formas, nosotros hacemos lo posible
              para que generando el suficiente volumen de ventas, las comisiones
              sean lo más bajas posibles.
            </p>
          </ListItem>
          <ListItem title="No necesitas buscar un proveedor de envíos">
            <p className="text-justify text-sm text-gray-700 leading-relaxed">
              Nosotros trabajamos con las agencias de transportes más grandes,
              negociando directamente con los dirigentes de cada comunidad para
              obtener descuentos por volumen y así reducir los portes.
            </p>
          </ListItem>
          <ListItem title="La plataforma más fácil de usar">
            <p className="text-justify text-sm text-gray-700 leading-relaxed">
              Nosotros creamos una web única para que destaques en tu sector,
              intuitiva y orientada a vender de la manera más sencilla posible.
              Pero además, te formamos para que aprendas a usar nuestra
              herramienta y puedas subir tus productos, tus clientes, tus
              pedidos y tus envíos. ¡En 10 minutos seguro que pillas como va
              todo!
            </p>
          </ListItem>
        </ul>
        <Button>¡Esto me interesa!</Button>
      </Animated>
    </BaseSection>
  );
};

export default EnumerateSection;
