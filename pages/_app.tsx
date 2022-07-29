import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UIProvider, useUI } from "../store/Context";

function MyApp({ Component, pageProps }: AppProps) {
  // const ui = useUI();
  // console.log(ui);
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default MyApp;
