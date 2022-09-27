import useGetPage from '@/api/hooks/useGetPage';
import Menu from '@/components/blocks/menu';
import Header from '@/components/blocks/header';
import Clients from '@/components/blocks/clients';
import ListSection from '@/components/blocks/sections/list-section';
import Steps from '@/components/blocks/sections/steps';
import BlockSection from '@/components/blocks/sections/block-section';
import { FAQ } from '@/components/blocks/faq';
import EnumerateSection from '@/components/blocks/sections/enumarete-section';

export default function Home() {
  const { page, loading } = useGetPage(`homepage`);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="sm:mx-16 mx-8">
      <Menu />
      <Header />
      <main>
        <Clients />
        <ListSection
          image={{ src: `/img/grow.svg`, alt: `` }}
          className="mb-20"
        />
        <BlockSection />
        <EnumerateSection />
        <Steps />

        <FAQ />
      </main>
    </div>
  );
}
