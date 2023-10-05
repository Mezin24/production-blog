import path from 'path';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/webpackBuild';
import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { isDev, mode, paths, port } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },

    module: buildLoaders(options),
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
