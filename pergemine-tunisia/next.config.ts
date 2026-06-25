import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/:locale(fr|en)", destination: "/" },
      { source: "/:locale(fr|en)/:path*", destination: "/:path*" },
    ];
  },
};

export default nextConfig;
