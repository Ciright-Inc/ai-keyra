import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.us-east-1.amazonaws.com",
        pathname: "/hrm.keyra.ie/**",
      },
    ],
  },
};

export default nextConfig;
