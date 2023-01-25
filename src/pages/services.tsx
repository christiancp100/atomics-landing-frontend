import Contact from '@/components/blocks/contact';
import CenterHeader from '@/components/blocks/header/center-header';
import BaseLayout from '@/components/layout/base-layout';

export default function Services() {
  const page: API.Page = {
    blocks: [],
    title: 'Servicios',
    seo: {
      metaDescription:
        'Destaca en un mundo cada vez más digitalizado. Desarrollo de tiendas online, software personalizado y estrategias de marketing para liderar tu industria.',
      keywords:
        'agencia desarrollo software, servicios, galicia, coruña, tienda en linea, comercio electronico, tienda online facil',
    },
  };

  return (
    <BaseLayout page={page}>
      <CenterHeader />
      <main>
        <Contact />
      </main>
    </BaseLayout>
  );
}
