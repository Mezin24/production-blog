import { About } from 'pages/about';
import { Home } from 'pages/home';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePaths.main,
    element: <Home />,
  },
  [AppRoutes.ABOUT]: {
    path: routePaths.about,
    element: <About />,
  },
};