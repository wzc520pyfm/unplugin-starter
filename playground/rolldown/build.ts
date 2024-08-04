import process from 'node:process'
import { rolldown } from 'rolldown'
import Unplugin from '../../src/rollup'

const bundle = await rolldown({
  input: ['./main.ts'],
  plugins: [Unplugin()],
})
await bundle.write({
  dir: 'dist',
  format: 'esm',
})
process.exit(0)
