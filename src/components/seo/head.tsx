import React from 'react';
import NextHead from 'next/head';

interface Props {
  seo: any;
}

const Head: React.FC<Props> = ({ seo }) => {
  return (
    <NextHead>
      <title>Atomics</title>
      <meta
        name="description"
        content="Atomics is a new digital agency based on digital marketing"
      />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
