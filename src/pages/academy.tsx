import useGetPage from '@/api/hooks/useGetPage';
import BaseLayout from '@/components/layout/base-layout';
import Button from '@/components/ui/button';
import { academyContactUrl } from '@/config/environment';
import useSubmitContact, { STATUS } from '@/hooks/useSubmitContact';
import Image from 'next/image';

export default function Work() {
  const { status, submit } = useSubmitContact(academyContactUrl!);

  const page: API.Page = {
    blocks: [],
    title: 'Academy',
    seo: {
      metaDescription:
        'Aprende a programar desde cero con Atomics Academy. Nuestro curso te prepara para ser un desarrollador exitoso y destacar en el mercado laboral.',
      keywords:
        'academia, aprender desarrollo software, galicia, coruña, javascript, html, css, crear paginas web, curso de programacion, mercado laboral, trabajo remoto',
    },
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    const data = {
      email: fd.get('email'),
    };
    submit(e, data);
  };

  return (
    <BaseLayout page={page}>
      <main className="flex flex-col justify-center items-center mb-24 space-y-6">
        <div className="relative h-72 w-96">
          <Image src="/img/academy.svg" layout="fill" />
        </div>
        <span className="font-bold text-3xl text-center w-full">
          Estamos diseñando un programa de formación increíble
        </span>
        <span>Quieres enterarte antes que nadie?</span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-y-4 w-full justify-center"
        >
          <input
            required
            placeholder="Escribe aquí tu email"
            name="email"
            type="email"
            className="border-2 border-primary md:rounded-none w-full rounded-md md:rounded-l-md pl-2 py-2 md:w-96 focus:ring-0 outline-none"
          />
          <Button
            loading={status == STATUS.loading}
            type="submit"
            className="md:rounded-l-none border-primary border-2"
          >
            Notificadme!
          </Button>
        </form>
      </main>
    </BaseLayout>
  );
}
