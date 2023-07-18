import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */

let config = {
  async rewrites() {
    return [
      {
        source: "/zanzibar/:path",
        destination: "/:path",
      },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default withPlaiceholder(config);
