/** @type {import('next').NextConfig} */

const withInterceptStdout = require("next-intercept-stdout");
const path = require("path");

module.exports = withInterceptStdout(
  {
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "src/styles")],
      prependData: `
      @use "config.scss" as *;
      @use "mixin.scss" as *;
      `,
    },
  },
  (text) => {
    if (text.includes("Duplicate atom key")) {
      return "";
    }
    return text;
  }
);
