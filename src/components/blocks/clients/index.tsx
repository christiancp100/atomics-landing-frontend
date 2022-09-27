import Animated, { animations } from '@/components/ui/animations';
import ClientLogo from '@/components/ui/client-logo';
import React from 'react';

const clients = [
  {
    src: `/img/clients/strapi.svg`,
    alt: `Strapi logo`,
  },
  {
    src: `/img/clients/vipkel.svg`,
    alt: `vipkel logo`,
  },
  {
    src: `/img/clients/fincacapeans.svg`,
    alt: `fincacapeans logo`,
  },
  {
    src: `/img/clients/glub.svg`,
    alt: `Glub logo`,
  },
];

const Clients = () => {
  return (
    <section className="relative my-12 sm:rounded-2xl overflow-hidden">
      <div className="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-8 text-center">
        <Animated animation={animations.fadeUp}>
          <h3 className="text-2xl text-neutral-800 font-semibold">
            Estas PYMES y Start-ups ya confían en nosotros
          </h3>
          <p className="paragraph">
            Únete a la familia de empresas que ya depositaron toda su confianza
            en nosotros.
          </p>
        </Animated>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients &&
            clients.map((client) => (
              <ClientLogo key={client.src} src={client.src} alt={client.alt} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
