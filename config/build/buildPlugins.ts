import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/webpackBuild';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = (
  options: BuildOptions
): webpack.WebpackPluginInstance[] => {
  const { isDev, paths } = options;
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
  ];
};
