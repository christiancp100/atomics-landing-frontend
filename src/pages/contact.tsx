import useGetPage from '@/api/hooks/useGetPage';
import Contact from '@/components/blocks/contact';
import BaseLayout from '@/components/layout/base-layout';

export default function ContactPage() {
  const page: API.Page = {
    blocks: [],
    title: 'Contacto',
    seo: {
      metaDescription:
        'Somos tu mejor aliado en el mundo digital. Contáctanos para crecer tu negocio y destacar entre tu competencia.',
      keywords:
        'contacto, agencia desarrollo software, galicia, coruña, tienda en linea, comercio electronico, tienda online facil',
    },
  };

  return (
    <BaseLayout page={page}>
      <main>
        <Contact />
      </main>
    </BaseLayout>
  );
}
