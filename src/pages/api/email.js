const emailjs = require("emailjs-com")

export default async (req, res) => {
  // const emailParams = req.body

  // await emailjs
  //   .send(
  //     process.env.EMAIL_JS_SERVICE,
  //     process.env.EMAIL_JS_TEMPLATE,
  //     emailParams,
  //     process.env.EMAILJS_CLIENT_ID
  //   )
  //   .then(
  //     (response) => {
  //       res.status(200).json({ SuccessMessage: response.text })
  //     },
  //     (error) => {
  //       res.status(error.status).json({ SuccessMessage: error.text })
  //     }
  //   );
}
