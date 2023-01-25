import Image from 'next/image';
import React from 'react';
import BaseSection from '../layout/base-section';
import Accordion from '../ui/accordion';
import Animated, { animations } from '../ui/animations';

const questions = [
  {
    question:
      '¿Qué tipo de plataforma de e-commerce utilizáis para poner en marcha tiendas en línea?',
    answer:
      'Utilizamos una plataforma de e-commerce propia, enfocada a un usuario con dificultades para adaptarse a los rápidos cambios de la industria tecnológica actuales, fácil de usar  y con una interfaz sencilla e intuitiva, que permite al usuario crear y gestionar su tienda en línea sin necesidad de conocimientos técnicos avanzados. A esta plataforma la llamamos Vendr.',
  },
  {
    question: '¿Cómo me ayudáis a aumentar mis ventas en línea?',
    answer:
      'Ayudamos a aumentar las ventas en línea a través de estrategias de marketing personalizadas y la creación de una tienda en línea atractiva y fácil de usar orientada a la venta, con técnicas de neuromarketing probadas científicamente. Ten en cuenta que nada está garantizado en el mundo de la venta online, pero haremos todo lo posible para unirte a nuestros casos de éxito.',
  },
  {
    question:
      '¿Qué tipo de tarifas tienen vuestros servicios de desarrollo de software a medida, poner en marcha tiendas en línea y estrategias de marketing?',
    answer:
      'Nuestras tarifas varían dependiendo del proyecto específico y de tus necesidades, por eso no damos precios cerrados. Estaremos encantados de proporcionarte un presupuesto detallado una vez nos hayamos reunido y entendido mejor las necesidades de tu negocio. Si que te podemos proporcionar el coste de mantenimiento mensual de nuestra plataforma de comercio electrónico Vendr: 19.99 euros.',
  },
  {
    question:
      '¿Cómo puedo asegurarme de que el software desarrollado a medida cumplirá con mis necesidades?',
    answer:
      'Trabajamos en estrecha colaboración con cada uno de nuestros clientes durante todo el proceso de desarrollo de software para asegurarnos de que la solución cumpla con todas sus necesidades.',
  },
  {
    question: '¿Qué tipo de software podéis desarrollar a medida?',
    answer:
      'Podemos desarrollar prácticamente cualquier variedad de software a medida, como plataformas web, ecommerce, aplicaciones móviles y en definitiva, cualquier software personalizado.',
  },
  {
    question:
      '¿Qué tipo de estrategias de marketing ofrecéis para ayudar a diferenciar a mi negocio de la competencia?',
    answer:
      'Ofrecemos servicios de gestión de redes sociales, publicidad en línea y marketing de contenidos para ayudar a diferenciar al negocio de la competencia.',
  },
  {
    question:
      '¿Qué tipo de apoyo ofrecéis después de poner en marcha mi tienda en línea?',
    answer:
      'Ofrecemos apoyo continuo después de poner en marcha la tienda en línea para ayudarte a mantener y mejorar tu presencia en línea. Tenemos planes de mantenimiento y soporte que se adaptarán a tus necesidades.',
  },
  {
    question: '¿Qué tipo de servicios de gestión de redes sociales ofrecéis?',
    answer:
      'Ofrecemos servicios de gestión de redes sociales para ayudarte a aumentar tu presencia en redes sociales y conectarte con tu público objetivo. Una vez nos reunamos contigo te recomendaremos la mejor frecuencia de publicación, junto con las mejores plataformas para aumentar el alcance de tu negocio.',
  },
  {
    question:
      '¿Qué tipo de garantías ofrecéis sobre el software desarrollado a medida?',
    answer:
      'Ofrecemos garantías sobre el software desarrollado a medida, incluyendo correcciones de errores y mejoras en caso de ser necesario, para garantizar la satisfacción del cliente. No somos una empresa inaccesible que te vaya a poner pegas o hacerte pasar por 30 operarios, nos mandas un WhatsApp y miramos el problema.',
  },
  {
    question: '¿Cómo funciona el proceso de desarrollo de software a medida?',
    answer:
      'El proceso de desarrollo de software a medida es un enfoque colaborativo e iterativo en el que trabajaremos contigo para entender tus objetivos y necesidades, y luego desarrollamos una solución que se ajuste a dichas necesidades.',
  },
];

export const FAQ = () => {
  return (
    <BaseSection className="w-full my-24">
      <Animated
        animation={animations.fadeRight}
        className="col-span-12 lg:col-span-6"
      >
        <div className="relative w-full h-96">
          <Image
            layout="fill"
            objectFit="contain"
            src="/img/question.svg"
            alt=""
          />
        </div>
      </Animated>
      <Animated
        animation={animations.fadeLeft}
        className="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8"
      >
        <span className="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">
          FAQ
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
          Preguntas Frecuentes
        </h2>

        <ul>
          <Accordion questions={questions} />
        </ul>
      </Animated>
    </BaseSection>
  );
};
