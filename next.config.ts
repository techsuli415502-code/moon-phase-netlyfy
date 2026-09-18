import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "preview-chat-ebbfe344-453f-45a3-b26d-1f2f01ad2777.space-z.ai",
    "*.space-z.ai",
  ],
};

export default nextConfig;
