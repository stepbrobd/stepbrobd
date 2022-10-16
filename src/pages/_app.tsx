import "../styles/tailwind.css";

import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <NextNProgress
          color="#f81ce5"
          height={2}
          nonce=""
          startPosition={0.1}
          stopDelayMs={250}
          showOnShallow={true}
          options={{ showSpinner: false, easing: "ease", speed: 250 }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
