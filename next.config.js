const withInterceptStdout = require("next-intercept-stdout");

module.exports = withInterceptStdout(
  {
    reactStrictMode: true,
  },
  (text) => {
    if (text.includes("Duplicate atom key")) {
      return "";
    }
    return text;
  }
);
