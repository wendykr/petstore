import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/nextjs-vite';

const currentDir = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "..\\public"
  ],
  viteFinal: async (config) => {
    config.build ??= {};
    config.build.chunkSizeWarningLimit = 1500;

    config.css = {
      ...config.css,
      preprocessorOptions: {
        ...(config.css?.preprocessorOptions ?? {}),
        scss: {
          loadPaths: [path.resolve(currentDir, '../src/styles')],
          additionalData: `@use "${path
            .resolve(currentDir, '../src/styles/variables')
            .replace(/\\/g, '/')}" as *;`,
        },
      },
    };

    return config;
  },
};
export default config;
