import type { AppProps } from "next/app";
import Title from "../components/Title";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Title />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
