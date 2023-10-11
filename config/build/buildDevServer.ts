import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/webpackBuild';

export const buildDevServer = (
  options: BuildOptions,
): DevServerConfiguration => ({
  port: options.port,
  // open: true,
  historyApiFallback: true,
  hot: true,
});
