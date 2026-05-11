/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.entrenadorpersonalsalou.es' }],
        destination: 'https://www.movementbydesign.es/es/entrenador-personal-salou/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'entrenadorpersonalsalou.es' }],
        destination: 'https://www.movementbydesign.es/es/entrenador-personal-salou/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
