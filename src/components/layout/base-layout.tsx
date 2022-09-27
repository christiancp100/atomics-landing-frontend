import React from 'react';
import Head from '../seo/head';

type Props = {
  children: JSX.Element;
  page: API.Page;
};

const BaseLayout: React.FC<Props> = ({ children, page, ...rest }) => {
  return (
    <>
      <Head seo={page.seo} />
      <div {...rest}>{children}</div>
    </>
  );
};

export default BaseLayout;
