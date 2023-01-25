import Header from '@/components/blocks/header/header';
import Clients from '@/components/blocks/clients';
import ListSection from '@/components/blocks/sections/list-section';
import Steps from '@/components/blocks/sections/steps';
import BlockSection from '@/components/blocks/sections/block-section';
import { FAQ } from '@/components/blocks/faq';
import EnumerateSection from '@/components/blocks/sections/enumarete-section';
import Contact from '@/components/blocks/contact';
import BaseLayout from '@/components/layout/base-layout';

export default function Home() {
  const page: API.Page = {
    blocks: [],
    title: 'Inicio',
    seo: {},
  };
  return (
    <BaseLayout page={page}>
      <Header />
      <main>
        <Clients />
        <ListSection
          image={{ src: '/img/grow.svg', alt: '' }}
          className="mb-20"
        />
        <EnumerateSection />
        <BlockSection />
        <Steps />
        <FAQ />
        <Contact />
      </main>
    </BaseLayout>
  );
}
