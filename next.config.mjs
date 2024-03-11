/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        pathname: "**",
        protocol: "https",
      },
      {
        hostname: "plus.unsplash.com",
        pathname: "**",
        protocol: "https",
      },
      {
        hostname: "source.unsplash.com",
        pathname: "**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
