import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';

import { PATH } from '@/constants/routes.ts';
// import LandingPage from '@/pages/Landing';
// import LoginPage from '@/pages/Login';
import VerticalSlider from '@/pages/Slide';
import { QueryClientProvider } from '@/QueryClientProvider.tsx';

const slides = [
  <div key="1">슬라이드 1</div>,
  <div key="2">슬라이드 2</div>,
  <div key="3">슬라이드 3</div>,
];

const publicRoutes = [
  {
    element: (
      <>
        <ScrollRestoration />
        <Outlet />
      </>
    ),
    children: [
      {
        path: PATH.INDEX,
        element: <VerticalSlider slides={slides} />,
      },
      {
        path: '*',
        element: <Navigate to={PATH.INDEX} replace />,
      },
    ],
  },
];

const router = createBrowserRouter([...publicRoutes]);

const App = () => {
  return (
    <QueryClientProvider>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
