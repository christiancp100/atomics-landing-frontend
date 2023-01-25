import useGetPage from '@/api/hooks/useGetPage';
import Header from '@/components/blocks/header/header';
import BaseLayout from '@/components/layout/base-layout';
import Button from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
  const page: API.Page = {
    blocks: [],
    title: 'Proyectos',
    seo: {
      metaDescription:
        'Echa un vistazo a nuestros proyectos: desarrollo de software, tiendas en línea y estrategias de marketing innovadoras de alta calidad.',
      keywords:
        'contacto, agencia desarrollo software, galicia, coruña, tienda en linea, comercio electronico, tienda online facil, proyectos',
    },
  };

  return (
    <BaseLayout page={page}>
      <main className="flex flex-col justify-center items-center mb-24 space-y-6">
        <div className="relative h-72 w-96">
          <Image src="/img/work.svg" layout="fill" />
        </div>
        <span className="font-bold text-3xl w-2/3 text-center">
          Lo sentimos! Estamos trabajando a tope para terminar esta sección lo
          antes posible
        </span>
        <span>
          Pero puedes echar un ojo a nuestros servicios mientras tanto!
        </span>
        <Link href="/services">
          <Button variant="primary">Nuestros servicios</Button>
        </Link>
      </main>
    </BaseLayout>
  );
}
