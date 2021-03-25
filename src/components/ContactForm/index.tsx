import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

import {
  Container,
  SubmitWrapper,
  Introduction,
  InputBlock,
  CancelButton,
  SubmitButton,
  InputTitle,
  HorizontalBlock,
  SuccessWrapper,
  MessageSentTitle,
  GoBackButton,
  SuccessSvg,
  FailedWrapper,
  FailedSvg,
} from "./styles";

const contactFormValidationSchema = yup.object({
  email: yup
    .string()
    .email("You must enter a valid email so I can contact you later.")
    .required("An email is required"),
  subject: yup
    .string()
    .min(5, "Must be at least 5 characters.")
    .max(40, "Must be 40 characters or less.")
    .required("A subject is required"),
  message: yup
    .string()
    .min(2, "Must be at least 2 characters")
    .max(400, "Must be 400 characters or less")
    .required("A message is required"),
});

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0A2437",
    },
  },
});

interface ContactFormProps {
  handleLeavingContact: () => void;
}

export default function ContactForm<ContactFormProps>({
  handleLeavingContact,
}) {
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactFormValidationSchema,
    onSubmit: (values) => {
      handleFormSubmission(values);
    },
  });
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [hasSucceededSendingMessage, setHasSucceededSendingMessage] = useState(
    false
  );
  const [hasFailedSendingMessage, setHasFailedSendingMessage] = useState(false);

  async function handleFormSubmission(values) {
    const { email, subject, message } = values;

    var emailParams = {
      email,
      subject,
      message,
    };

    setIsSendingMessage(true);

    emailjs
      .send(
        "service_7m9n06l",
        "template_p6gebmr",
        emailParams,
        "user_YeAzJe877eIBfF9ufjz9D"
      )
      .then(
        (response) => {
          setIsSendingMessage(false);
          setHasSucceededSendingMessage(true);
        },
        (error) => {
          setIsSendingMessage(false);
          setHasFailedSendingMessage(true);
        }
      );
  }

  return (
    <Container>
      {!hasSucceededSendingMessage && !hasFailedSendingMessage && (
        <ThemeProvider theme={customTheme}>
          <Introduction>
            Whether you have a question or just want to say hi, my inbox is
            always open! Don't hesitate to contact me, I'll try my best to get
            back to you!
          </Introduction>

          <form onSubmit={formik.handleSubmit}>
            <HorizontalBlock>
              <InputBlock>
                <InputTitle>How can I reach you back?</InputTitle>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="email"
                  name="email"
                  label="Email"
                  color="primary"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </InputBlock>

              <InputBlock>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="subject"
                  name="subject"
                  label="Subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.subject && Boolean(formik.errors.subject)
                  }
                  helperText={formik.touched.subject && formik.errors.subject}
                />
              </InputBlock>
            </HorizontalBlock>

            <InputBlock>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                id="message"
                name="message"
                label="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </InputBlock>

            <SubmitWrapper>
              <CancelButton
                isSendingMessage={isSendingMessage}
                type="button"
                onClick={handleLeavingContact}
              >
                CANCEL
              </CancelButton>
              <SubmitButton type="submit">
                {isSendingMessage ? "Sending message..." : "SEND MESSAGE"}
              </SubmitButton>
            </SubmitWrapper>
          </form>
        </ThemeProvider>
      )}

      {hasSucceededSendingMessage && (
        <SuccessWrapper>
          <SuccessSvg
            width={82}
            height={82}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={41} cy={41} r={39} stroke="#0A2437" strokeWidth={4} />
            <path
              d="M53.18 27.004a1.084 1.084 0 00-.09.101L37.273 47.54l-9.53-9.67a3.389 3.389 0 00-2.389-.928A3.392 3.392 0 0023 37.953a3.488 3.488 0 00-1 2.388 3.49 3.49 0 00.917 2.422l12.049 12.224c.324.328.71.587 1.136.761a3.374 3.374 0 002.67-.05c.418-.19.795-.463 1.107-.803l18.178-23.044A3.49 3.49 0 0059 29.404a3.487 3.487 0 00-1.023-2.414 3.39 3.39 0 00-2.4-.99 3.391 3.391 0 00-2.396 1.004z"
              fill="#0A2437"
            />
          </SuccessSvg>
          <MessageSentTitle>Awesome!</MessageSentTitle>
          <span>
            If you gave me a valid email, a confirmation will be sent that I
            received your message!
          </span>
          <GoBackButton type="button" onClick={handleLeavingContact}>
            Got it!
          </GoBackButton>
        </SuccessWrapper>
      )}
      {hasFailedSendingMessage && (
        <FailedWrapper>
          <FailedSvg
            width={82}
            height={82}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M56.374 28.643A2.134 2.134 0 0054.87 25a2.132 2.132 0 00-1.509.624L40.5 38.485l-12.857-12.86a2.134 2.134 0 00-3.018 3.018L37.485 41.5l-12.86 12.857a2.134 2.134 0 103.018 3.018L40.5 44.515l12.86 12.86a2.133 2.133 0 003.014-3.018L43.514 41.5l12.86-12.857z"
              fill="#0A2437"
            />
            <circle cx={41} cy={41} r={39} stroke="#0A2437" strokeWidth={4} />
          </FailedSvg>
          <MessageSentTitle>Oops, something went wrong!</MessageSentTitle>
          <span>
            Something went wrong while trying to send your message to my
            servers! Please try again later!
          </span>

          <GoBackButton type="button" onClick={handleLeavingContact}>
            Got it!
          </GoBackButton>
        </FailedWrapper>
      )}
    </Container>
  );
}
