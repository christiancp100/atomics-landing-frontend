import React from 'react';
import NextHead from 'next/head';

const Head = () => {
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
