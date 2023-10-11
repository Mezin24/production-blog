import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildMode, BuildPaths } from './config/build/types/webpackBuild';

interface EnvProps {
  port: string;
  mode: BuildMode;
}

export default (env: EnvProps) => {
  const mode: BuildMode = env.mode || 'development';
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const isDev = mode === 'development';
  const PORT = +env.port || 3000;

  return buildWebpackConfig({
    paths, isDev, mode, port: PORT,
  });
};
