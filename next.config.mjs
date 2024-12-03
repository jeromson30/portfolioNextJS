/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: [
          "user.oc-static.com"
        ],
      },
};

export default nextConfig;
