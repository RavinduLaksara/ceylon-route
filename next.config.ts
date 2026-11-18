import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // NOTE: Cache Components ("use cache") hangs on the Cloudflare Workers runtime
  // (its setTimeout implementation), so it is intentionally disabled. Public
  // pages render dynamically instead — see `export const dynamic` in the pages.
  images: {
    // Cloudflare Workers has no built-in image optimizer; serve originals so
    // external Unsplash & Supabase Storage images load without a paid binding.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
