import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = process.env.NODE_ENV === 'production';

export default {
  input: 'src/App.svelte',
  output: {
    file: production ? './dist/main.js' : './dist/main.dev.js',
  },
  plugins: [
    svelte({ emitCss: false }),
    resolve(),
    production && terser(),
  ],
};

