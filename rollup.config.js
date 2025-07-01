// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd', // UMD is better for browser compatibility
    name: 'InteractiveMapWidgetSDK',
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      inject: true,  // 🔥 auto-inject CSS into <head>
    })
  ],
  external: [], // ❌ REMOVE 'mapbox-gl' to bundle it
};
