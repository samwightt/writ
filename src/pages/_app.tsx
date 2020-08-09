import type { AppProps } from "next/app";
import AppWrapper from "utils/AppWrapper";

import "styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
