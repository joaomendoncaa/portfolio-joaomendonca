import Head from "next/head";
import Link from "next/link";

import FlyingIllustration from "../components/FlyingIllustration";
import Socials from "../components/Socials";

import { Main, ContentWrapper, ContactPageLink } from "../styles/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>João Mendonça</title>
        <meta name="description" content="João Mendonça Portfolio" />
      </Head>
      <Main>
        <ContentWrapper>
          <span>Welcome, my name is</span>
          <h1>João Mendonça.</h1>
          <h2>I'm a web developer.</h2>
          <p>
            I’m based in Santarém, Portugal. Currently specializing in Web
            development and everything that comes with it (it’s a lot). Love
            frontend, UI/UX and always seeking for more and more knowledge.
          </p>
          <Link href="/contact">
            <ContactPageLink>Get In Touch</ContactPageLink>
          </Link>
          <Socials />
        </ContentWrapper>
        <FlyingIllustration />
      </Main>
    </>
  );
}
