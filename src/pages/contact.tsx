import Head from "next/head";
import Link from "next/link";

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
          <Link href="/">
            <a>{`<--`} go back</a>
          </Link>
          <h1>Hello Contact Page</h1>
        </ContentWrapper>
        <FlyingIllustration />
      </Main>
    </>
  );
}
