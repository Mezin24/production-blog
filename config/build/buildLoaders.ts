import webpack from 'webpack';
import { BuildOptions } from './types/webpackBuild';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = (options: BuildOptions): webpack.ModuleOptions => {
  const { isDev } = options;
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes('.module')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return {
    rules: [tsLoader, scssLoader],
  };
};
