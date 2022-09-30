import React, { HTMLProps } from 'react';
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
  return (
    <>
      <Head seo={page.seo} />
      <Menu entries={entriesCte} />
      <div className="sm:mx-16 mx-8" {...rest}>
        {children}
      </div>
      <Footer entries={entriesCte} />
    </>
  );
};

export default BaseLayout;
