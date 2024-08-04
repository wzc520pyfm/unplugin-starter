import { build } from 'esbuild'
import Unplugin from '../../src/esbuild'

await build({
  entryPoints: ['main.ts'],
  bundle: true,
  outdir: 'dist',
  format: 'esm',
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  assetNames: '[name]-[hash]',
  chunkNames: '[name]-[hash]',
  plugins: [
    Unplugin(),
  ],
})
