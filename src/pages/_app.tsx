// @ts-nocheck
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import client from '@/config/graphql';
import { ApolloProvider } from '@apollo/client';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
