import webpack from 'webpack';
import { BuildOptions } from './types/webpackBuild';
import { buildScssLoader } from './loaders/buildScssLoader';

export const buildLoaders = (options: BuildOptions): webpack.ModuleOptions => {
  const { isDev } = options;

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = buildScssLoader(isDev);

  return {
    rules: [svgrLoader, fileLoader, babelLoader, tsLoader, scssLoader],
  };
};
