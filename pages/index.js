import Head from "next/head";
import App from "./App";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mayank Meena</title>
        <meta name="description" content="Portfolio Mayank Meena" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>
    </>
  );
}
