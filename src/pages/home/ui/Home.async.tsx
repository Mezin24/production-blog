import { lazy } from 'react';

export const HomeAsync = lazy(
  () => new Promise((res) => setTimeout(() => {
    // @ts-ignore
    res(import('./Home'));
  }, 500)),
);
