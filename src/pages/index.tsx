import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import ContactForm from "../components/ContactForm";
import FlyingIllustration from "../components/FlyingIllustration";
import Socials from "../components/Socials";

import {
  Main,
  LandingContentWrapper,
  ContactPageLink,
  ContactContentWrapper,
  ContentHeader,
  BackLink,
} from "../styles/Home";

export default function Home() {
  const router = useRouter();
  const animationMilliseconds: number = 200;

  const [isLeavingLanding, setIsLeavingLanding] = useState(false);
  const [isLeavingContact, setIsLeavingContact] = useState(false);
  const [isInContactPage, setIsInContactPage] = useState(false);

  const handleLeaveLanding = () => {
    setIsLeavingLanding(true);
    setIsLeavingContact(false);
    setTimeout(() => {
      setIsInContactPage(true);
    }, animationMilliseconds);
  };

  const handleLeavingContact = () => {
    setIsLeavingLanding(false);
    setIsLeavingContact(true);
    setTimeout(() => {
      setIsInContactPage(false);
    }, animationMilliseconds);
  };

  return (
    <>
      <Head>
        <title>João Mendonça</title>
        <meta name="description" content="João Mendonça's personal website, portfolio and blog" />
      </Head>
      <Main>
        {isInContactPage ? (
          <ContactContentWrapper
            isLeavingContact={isLeavingContact}
            animationMilliseconds={animationMilliseconds}
          >
            <ContentHeader>
              <BackLink onClick={handleLeavingContact}>
                <svg
                  width={71}
                  height={14}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M70.5 6.168H3.2l5.016-4.991L7.034 0 0 7l7.034 7 1.182-1.177L3.2 7.832h67.3V6.168z"
                    fill="#0A2437"
                  />
                </svg>
              </BackLink>
              <span>GET IN TOUCH</span>
            </ContentHeader>
            <ContactForm handleLeavingContact={handleLeavingContact} />
          </ContactContentWrapper>
        ) : (
          <LandingContentWrapper
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
          </LandingContentWrapper>
        )}
        <FlyingIllustration />
      </Main>
    </>
  );
}
