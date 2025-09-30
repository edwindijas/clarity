import { defineConfig } from 'wxt';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  entrypointsDir: 'src/entrypoints',
  vite: () => ({
    plugins: [eslintPlugin({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  }),
  alias: {
    'src': path.resolve(__dirname, 'src'),
    'assets': path.resolve(__dirname, 'src/assets')
  },
});
