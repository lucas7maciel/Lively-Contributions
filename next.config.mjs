/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowMiddlewareResponseBody: true,
  },
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
