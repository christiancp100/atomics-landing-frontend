import useGetPage from '@/api/hooks/useGetPage';
import Menu, { EntryProps } from '@/components/blocks/menu';
import Header from '@/components/blocks/header';
import Clients from '@/components/blocks/clients';
import ListSection from '@/components/blocks/sections/list-section';
import Steps from '@/components/blocks/sections/steps';
import BlockSection from '@/components/blocks/sections/block-section';
import { FAQ } from '@/components/blocks/faq';
import EnumerateSection from '@/components/blocks/sections/enumarete-section';
import Footer from '@/components/blocks/footer';

export default function Home() {
  const { page, loading } = useGetPage(`homepage`);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const entriesCte: Array<EntryProps> = [
    {
      title: 'Inicio',
      href: '/',
    },
    {
      title: 'Servicios',
      href: '/services',
    },
    {
      title: 'Proyectos',
      href: '/work',
    },
    {
      title: 'Academy',
      href: '/academy',
      featured: true,
      variant: 'link',
    },
    {
      title: 'Contacto',
      href: '/contact',
      featured: true,
      variant: 'default',
    },
  ];

  return (
    <div className="relative">
      <Menu entries={entriesCte} />
      <div className="sm:mx-16 mx-8">
        <Header />
        <main>
          <Clients />
          <ListSection
            image={{ src: '/img/grow.svg', alt: '' }}
            className="mb-20"
          />
          <BlockSection />
          <EnumerateSection />
          <Steps />
          <FAQ />
        </main>
      </div>
      <Footer entries={entriesCte} />
    </div>
  );
}
