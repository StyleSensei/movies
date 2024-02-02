import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'
// @ts-ignore


// https://vitejs.dev/config/
export default defineConfig({
  base: "/movies/",
  plugins: [
    // @ts-ignore
    viteStaticCopy({
      targets: [
        { src: 'src/media/*', 
        dest: 'assets/media' },
      ],
    }),
  ],
});
