/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This setting is important for GitHub Pages with custom domain
  basePath: "",
  trailingSlash: true,
};

module.exports = nextConfig;
