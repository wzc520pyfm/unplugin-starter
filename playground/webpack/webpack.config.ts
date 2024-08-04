import process from 'node:process'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { Configuration } from 'webpack'
import Unplugin from '../../src/webpack'

const config: Configuration = {
  mode: (process.env.MODE as any) ?? 'development',
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    Unplugin(),
  ],
}
export default config
