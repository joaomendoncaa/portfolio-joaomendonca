import Head from "next/head";

import FlyingIllustration from "../components/FlyingIllustration";

import { Main, ContentWrapper } from "../styles/Contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>João Mendonça | Get in Touch</title>
        <meta name="description" content="João Mendonça Contact Form" />
      </Head>
      <Main>
        <ContentWrapper>
          <h1>Hello Contact Page</h1>
        </ContentWrapper>
        <FlyingIllustration />
      </Main>
    </>
  );
}
