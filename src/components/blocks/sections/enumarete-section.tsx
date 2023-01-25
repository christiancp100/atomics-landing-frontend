import BaseSection from '@/components/layout/base-section';
import Animated, { animations } from '@/components/ui/animations';
import Button from '@/components/ui/button';
import ListItem from '@/components/ui/list-item';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EnumerateSection = () => {
  return (
    <BaseSection className="my-24 shadow-none items-center">
      <Animated
        animation={animations.fadeRight}
        className="relative col-span-12 lg:col-span-6"
      >
        <Image
          src="/img/shopping.svg"
          objectFit="contain"
          alt="ecommerce page"
          layout="responsive"
          width={500}
          height={500}
        />
      </Animated>

      <Animated
        animation={animations.fadeLeft}
        className="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 mt-8 xl:px-8"
      >
        <h2 className="text-4xl font-semibold">
          Simplifica la venta en línea con{' '}
          <strong className="text-primary">Vendr</strong>, nuestra plataforma de
          e-commerce
        </h2>
        <ul className="space-y-8 sm:space-y-4">
          <ListItem title="¿La tecnología te abruma y no sabes por dónde empezar?">
            <p className="text-justify text-md text-gray-700 leading-relaxed">
              Vendr está diseñado específicamente para ti. Te ayudaremos a crear
              y gestionar tu tienda en línea de manera sencilla y eficiente, sin
              necesidad de conocimientos técnicos avanzados. Ofrecemos una
              amplia variedad de herramientas y funciones para ayudarte a
              aumentar tus ventas y llegar a un público más amplio. ¡Deja que
              nos ocupemos de la tecnología, para que puedas centrarte en tu
              negocio!
            </p>
          </ListItem>
          <ListItem title="Pagos seguros con bajas comisiones">
            <p className="text-justify text-md text-gray-700 leading-relaxed">
              Lo sabemos, hay que pagar comisiones por todo, en este caso los
              pagos por internet son complejos y los gestionan grandes entidades
              que cobran por ello. De todas formas, en Vendr hacemos lo posible
              para que generando el suficiente volumen de ventas, las comisiones
              sean lo más bajas posibles.
            </p>
          </ListItem>
          <ListItem title="No necesitas buscar un proveedor de envíos">
            <p className="text-justify text-md text-gray-700 leading-relaxed">
              Nosotros trabajamos con las agencias de transportes más grandes,
              negociando directamente con los dirigentes de cada comunidad para
              obtener descuentos por volumen y así reducir los portes.
            </p>
          </ListItem>
          <ListItem title="Diferénciate de tu competencia">
            <p className="text-justify text-md text-gray-700 leading-relaxed">
              En Vendr, ayudamos a nuestros clientes a destacar entre su
              competencia mediante la personalización y herramientas avanzadas.
              Con nuestras opciones de diseño y funcionalidad únicas, tu tienda
              en línea reflejará tu marca y se destacará entre la multitud.
              Además, nuestras herramientas de marketing y análisis ayudarán a
              maximizar tu alcance y aumentar las ventas. Con Vendr, no solo
              tendrás una tienda en línea sólida, sino también un equipo de
              apoyo dedicado a ayudarte a tener éxito en línea. ¡Haz que tu
              negocio se destaque con Vendr!
            </p>
          </ListItem>
        </ul>
        <Link href={'#contact'}>
          <Button>¡Esto me interesa!</Button>
        </Link>
      </Animated>
    </BaseSection>
  );
};

export default EnumerateSection;
