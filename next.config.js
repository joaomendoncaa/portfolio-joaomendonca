module.exports = {
  env: {
    EMAIL_JS_SERVICE: "service_7m9n06l",
    EMAIL_JS_TEMPLATE: "template_p6gebmr",
    EMAILJS_CLIENT_ID: "user_YeAzJe877eIBfF9ufjz9D",
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value: 'default-src *; style-src \'self\' \'unsafe-inline\' http://fonts.googleapis.com; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' http://fonts.googleapis.com',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}