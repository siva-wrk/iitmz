import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// let nextProdConfig = {
//   basePath: "/zanzibar",
//   assetPrefix: "/zanzibar",
// };

let nextProdConfig = isProd && {
  assetPrefix: "/zanzibar",
  images: {
    path: "/zanzibar/_next/image",
  },
};

let config = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  ...nextProdConfig,
};

export default withPlaiceholder(config);
