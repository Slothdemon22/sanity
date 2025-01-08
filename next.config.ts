import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com','cdn.sanity.io'], // Add the allowed domain here
  },
};

export default nextConfig;
