import webpack from 'webpack';
import { BuildOptions } from './types/webpackBuild';

export const buildResolvers = ({
  paths,
}: BuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [paths.src, 'node_modules'],
    preferAbsolute: true,
    alias: {},
    mainFiles: ['index'],
  };
};
