import React, { HTMLProps, useEffect } from 'react';
import Footer from '../blocks/footer';
import Menu, { EntryProps } from '../blocks/menu';
import Head from '../seo/head';

interface Props extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  page: API.Page;
}

const entriesCte: Array<EntryProps> = [
  {
    title: 'Inicio',
    href: '/',
    featured: true,
    variant: 'link',
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

const BaseLayout: React.FC<Props> = ({ children, page, ...rest }) => {
  useEffect(() => {
    window.onscroll = () => {};
  }, []);
  return (
    <div className="w-full flex justify-center flex-col">
      <Head title={page?.title} seo={page?.seo} />
      <Menu className="lg:w-9/12 w-full self-center" entries={entriesCte} />
      <div
        className="sm:mx-16 mx-4 flex justify-center flex-col items-center"
        {...rest}
      >
        <div className="w-full lg:w-9/12">{children}</div>
      </div>
      <Footer entries={entriesCte} />
    </div>
  );
};

export default BaseLayout;
