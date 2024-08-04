import { rollup } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import Unplugin from '../../src/rollup'

const bundle = await rollup({
  input: ['./main.ts'],
  plugins: [esbuild({ format: 'esm' }), Unplugin()],
})
await bundle.write({
  dir: 'dist',
  format: 'esm',
})
