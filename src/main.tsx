import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Routes } from './lib/routes';
import RootLayout from './components/layout';
import * as Pages from './configs/dynamic-pages';

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Suspense>{<Pages.Home />}</Suspense>,
      },
      {
        path: Routes.CONTACT,
        element: <Suspense>{<Pages.Contact />}</Suspense>,
      },
      {
        path: Routes.REGISTER,
        element: <Suspense fallback={<></>}>{<Pages.Register />}</Suspense>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
