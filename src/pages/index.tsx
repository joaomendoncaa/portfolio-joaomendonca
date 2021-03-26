import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import FlyingIllustration from "../components/FlyingIllustration";
import Socials from "../components/Socials";

import { Main, ContentWrapper, ContactPageLink } from "../styles/Home";

export default function Home() {
  const router = useRouter();
  const animationMilliseconds: number = 200;
  const [isLeavingLanding, setIsLeavingLanding] = useState(false);

  const handleLeaveLanding = () => {
    setIsLeavingLanding(true);
    setTimeout(() => {
      router.push("/contact");
    }, animationMilliseconds);
  };

  return (
    <>
      <Head>
        <title>João Mendonça | Portfolio</title>
        <meta name="description" content="João Mendonça portfolio" />
      </Head>
      <Main>
        <ContentWrapper
          isLeavingLanding={isLeavingLanding}
          animationMilliseconds={animationMilliseconds}
        >
          <span>Welcome, my name is</span>
          <h1>João Mendonça.</h1>
          <h2>I'm a web developer.</h2>
          <p>
            I’m based in Santarém, Portugal. Currently specializing in Web
            development and everything that comes with it (it’s a lot). Love
            frontend, UI/UX and always seeking for more and more knowledge.
          </p>
          <ContactPageLink onClick={handleLeaveLanding}>
            Get In Touch
          </ContactPageLink>
          <Socials />
        </ContentWrapper>
        <FlyingIllustration />
      </Main>
    </>
  );
}
