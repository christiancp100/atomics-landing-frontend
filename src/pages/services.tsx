import useGetPage from '@/api/hooks/useGetPage';
import Contact from '@/components/blocks/contact';
import CenterHeader from '@/components/blocks/header/center-header';
import BaseLayout from '@/components/layout/base-layout';

export default function Services() {
  const { page, loading } = useGetPage(`homepage`);

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <BaseLayout page={page}>
      <CenterHeader />
      <main>
        <Contact />
      </main>
    </BaseLayout>
  );
}
