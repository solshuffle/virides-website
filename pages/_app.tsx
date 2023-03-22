import type { AppProps } from "next/app";
import { Montserrat, Libre_Baskerville } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily} ${libre.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
