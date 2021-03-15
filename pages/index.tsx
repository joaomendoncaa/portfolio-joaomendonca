import Head from "next/head";

import { Main } from "../styles/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>João Mendonça</title>
        <meta name="description" content="João Mendonça Portfolio" />
      </Head>
      <Main>
        <h1>Welcome!</h1>
        <span>I'm under construction, be patient! {`\u{1F604}`}</span>
      </Main>
    </>
  );
}
