import { defineConfig } from 'wxt';
import path from 'path';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  entrypointsDir: 'src/entrypoints',
  alias: {
    'src': path.resolve(__dirname, 'src'),
    'assets': path.resolve(__dirname, 'src/assets')
  },
});
