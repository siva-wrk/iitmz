import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */

let config = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default withPlaiceholder(config);
