// @ts-nocheck
import { withBotId } from "botid/next/config";
import { withContentCollections } from "@content-collections/next";

const nextConfig = {
output: 'export',          //
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  compiler: { removeConsole: process.env.NODE_ENV === "production" },
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default withContentCollections(withBotId(nextConfig));
