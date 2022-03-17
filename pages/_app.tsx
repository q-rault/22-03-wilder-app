import dynamic from 'next/dynamic';
import '../styles/globals.css';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

// Disabling SSR
export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
