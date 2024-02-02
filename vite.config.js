import { defineConfig } from 'vite';
// @ts-ignore
import * as VitePluginCopy from 'vite-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/movies/",
  plugins: [
    // @ts-ignore
    VitePluginCopy.copy({
      patterns: [
        { src: 'src/media/*', dest: 'dist/media' },
      ],
    }),
  ],
});
