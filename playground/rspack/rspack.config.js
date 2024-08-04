import process from 'node:process'
import rspack from '@rspack/core'
import Unplugin from '../../dist/rspack.js'

/** @type {import('@rspack/core').Configuration} */
const config = {
  mode: 'development',
  entry: {
    app: './main.ts',
  },
  module: {
    rules: [
      {
        enforce: 'post',
        test: /\.m?ts$/,
        exclude: /(node_modules)/,
        use: { loader: 'swc-loader' },
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    Unplugin(),
  ],
}

export default config
