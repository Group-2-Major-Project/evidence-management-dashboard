import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Title />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
