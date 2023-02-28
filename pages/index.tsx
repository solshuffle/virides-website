import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "../Components/App";
import theme from "../theme/theme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Virides</title>
        <meta name="description" content="Smart gardens made easy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <main>
          <App />
        </main>
      </ThemeProvider>
    </>
  );
}
