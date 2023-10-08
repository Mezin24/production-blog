import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
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
