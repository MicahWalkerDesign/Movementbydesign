/**
 * Deployed to GitHub Pages at https://micahwalkerdesign.github.io/Movementbydesign/
 * The CI workflow sets BASE_PATH='/Movementbydesign'. When a custom domain is
 * configured later (CNAME in /public), unset BASE_PATH and the site will serve
 * from the domain root.
 *
 * @type {import('next').NextConfig}
 */
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
