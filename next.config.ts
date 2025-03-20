import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["upload.wikimedia.org"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
