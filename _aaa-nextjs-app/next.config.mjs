/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/JamisonMercurioWebsite",
  assetPrefix: "/JamisonMercurioWebsite",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
