import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import FlyingIllustration from "../components/FlyingIllustration";
import ContactForm from "../components/ContactForm";

import {
  Main,
  ContentWrapper,
  ContentHeader,
  BackLink,
} from "../styles/Contact";

export default function Contact() {
  const router = useRouter();
  const animationMilliseconds: number = 200;
  const [isLeavingContact, setIsLeavingContact] = useState(false);

  const handleLeavingContact = () => {
    setIsLeavingContact(true);
    setTimeout(() => {
      router.push("/");
    }, animationMilliseconds);
  };

  return (
    <>
      <Head>
        <title>João Mendonça | Get in Touch</title>
        <meta
          name="description"
          content="João Mendonça get in touch with me."
        />
      </Head>
      <Main>
        <ContentWrapper
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
        </ContentWrapper>
        <FlyingIllustration />
      </Main>
    </>
  );
}
