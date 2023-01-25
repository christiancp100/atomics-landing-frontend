// @ts-nocheck
import React from 'react';
import NextHead from 'next/head';

interface Props {
  seo: any;
}

const Head: React.FC<Props> = ({ seo }) => {
  const description =
    'Atomics es tu solución para desarrollo software personalizado, tiendas en línea, estrategias de marketing y éxito digital. Soluciones y servicios de alta calidad para crecer tu negocio y destacarte entre tu competencia. ¡Conviértete en líder en tu industria con Atomics!';
  return (
    <NextHead>
      <title>Atomics</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://atomics.es/" />
      <meta
        name="keywords"
        content="Agencia de desarrollo de software, software a medida, tiendas en línea, gestión de redes sociales, campañas de marketing, soluciones personalizadas, servicios de alta calidad, desarrollo web, galicia, empresario tradicional, tienda online fácil"
      />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="Agencia de Desarrollo de Software a Medida | atomics.es"
      />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://atomics.es/" />
      <meta
        property="og:image"
        content="https://atomics.es/img/atomics_complete.svg"
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Agencia de Desarrollo de Software a Medida | atomics.es"
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content="https://atomics.es/" />
      <meta
        name="twitter:image"
        content="https://atomics.es/img/atomics_complete.svg"
      />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
