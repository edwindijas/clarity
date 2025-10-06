/* eslint-disable */
import eslintPlugin from 'vite-plugin-eslint';
import { defineConfig } from 'wxt';
import svgr from 'vite-plugin-svgr';

import path from 'path';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  entrypointsDir: 'src/entrypoints',
  vite: () => ({
    plugins: [eslintPlugin({
      cache: false,
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      exclude: ['node_modules'],
    },
    ), svgr()
    ],
  }),
  alias: {
    'src': path.resolve(__dirname, 'src'),
    'assets': path.resolve(__dirname, 'src/assets'),
    'icons': path.resolve(__dirname, 'node_modules/@material-design-icons/svg')
  },
});
