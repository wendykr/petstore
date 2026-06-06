import path from "node:path";
import type { NextConfig } from "next";

const sassIncludePaths = [path.join(process.cwd(), "src/styles")];

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: sassIncludePaths,
    prependData: `@use "variables" as *;`,
  },
};

export default nextConfig;
