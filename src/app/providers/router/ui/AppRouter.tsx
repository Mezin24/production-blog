import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<div className="page-content">{route.element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);
