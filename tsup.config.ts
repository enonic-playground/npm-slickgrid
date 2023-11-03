import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    bundle: true,
    dts: false,
    entry: {
      'index': 'index.ts',
    },
    esbuildOptions(options, context) {
      options.external = [
        // 'jquery',
        'jquery-ui*'
      ];
    },
    format: ['cjs'],
    minify: process.env.NODE_ENV === 'development' ? false : true,
    outDir: '.',
    platform: 'browser',
    splitting: false,
    sourcemap: process.env.NODE_ENV === 'development' ? false : true,
    target: 'ES5',
    tsconfig: 'tsconfig.tsup.json',
  };
});
