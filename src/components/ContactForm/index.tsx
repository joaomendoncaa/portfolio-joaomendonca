import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

import {
  Container,
  SubmitWrapper,
  Introduction,
  InputBlock,
  CancelButton,
  SubmitButton,
  InputTitle,
  HorizontalBlock,
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

export default function ContactForm() {
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

  async function handleFormSubmission(values) {
    alert(JSON.stringify(values, null, 2));
  }

  function handleCancel() {}

  return (
    <Container>
      <Introduction>
        Whether you have a question or just want to say hi, my inbox is always
        open! Don't hesitate to contact me, I'll try my best to get back to you!
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
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </InputBlock>

          <InputBlock>
            {/* <InputTitle>What is the subject?</InputTitle> */}
            <TextField
              fullWidth
              variant="outlined"
              id="subject"
              name="subject"
              label="Subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />
          </InputBlock>
        </HorizontalBlock>

        <InputBlock>
          {/* <InputTitle>Let's talk!</InputTitle> */}
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
          <CancelButton type="button" onClick={handleCancel}>
            CANCEL
          </CancelButton>
          <SubmitButton type="submit">SEND MESSAGE</SubmitButton>
        </SubmitWrapper>
      </form>
    </Container>
  );
}
