import { About } from 'pages/about';
import { Home } from 'pages/home';
import { NotFound } from 'pages/notFound';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
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
  [AppRoutes.NOT_FOUND]: {
    path: routePaths.notFound,
    element: <NotFound />,
  },
};
