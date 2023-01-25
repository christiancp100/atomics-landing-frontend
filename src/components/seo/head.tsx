// @ts-nocheck
import React from 'react';
import NextHead from 'next/head';

interface Props {
  seo: API.SEOComponent;
  title: string;
}

const Head: React.FC<Props> = ({ title, seo = {} }) => {
  const {
    metaTitle = 'Agencia de Desarrollo de Software a Medida | atomics.es',
    metaDescription = 'Desarrollo software, e-commerce y marketing. Servicios de alta calidad para destacar entre tu competencia. ¡Conviértete en líder en tu industria con Atomics!',
    metaImage = 'https://atomics.es/img/atomics_complete.svg',
    keywords = 'Agencia de desarrollo de software, software a medida, tiendas en línea, gestión de redes sociales, campañas de marketing, soluciones personalizadas, servicios de alta calidad, desarrollo web, galicia, empresario tradicional, tienda online fácil',
  } = seo;

  return (
    <NextHead>
      <title>Atomics {title ? `| ${title}` : ''}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href="https://atomics.es/" />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content="https://atomics.es/" />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:url" content="https://atomics.es/" />
      <meta name="twitter:image" content={metaImage} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
