import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.steelcobuildings.com",
      },
      {
        protocol: "https",
        hostname: "d32bczqlkgra6r.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
