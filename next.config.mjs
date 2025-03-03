/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // For GitHub Pages, we need to specify the base path if deploying to a repo-name path
  // If deployed to a custom domain, remove the basePath or set it to ''
  // basePath: '/your-repo-name',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
