import Head from "next/head";
import Link from "next/link";

import FlyingIllustration from "../components/FlyingIllustration";
import ContactForm from "../components/ContactForm";

import {
  Main,
  ContentWrapper,
  ContentHeader,
  BackLink,
} from "../styles/Contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>João Mendonça | Get in Touch</title>
        <meta name="description" content="João Mendonça Contact Form" />
      </Head>
      <Main>
        <ContentWrapper>
          <ContentHeader>
            <Link href="/">
              <BackLink>
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
            </Link>
            <span>GET IN TOUCH</span>
          </ContentHeader>
          <ContactForm />
        </ContentWrapper>
        <FlyingIllustration />
      </Main>
    </>
  );
}
