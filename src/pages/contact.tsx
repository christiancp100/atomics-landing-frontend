import useGetPage from '@/api/hooks/useGetPage';
import Contact from '@/components/blocks/contact';
import BaseLayout from '@/components/layout/base-layout';

export default function ContactPage() {
  const { page, loading } = useGetPage(`homepage`);

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <BaseLayout page={page}>
      <main>
        <Contact />
      </main>
    </BaseLayout>
  );
}
