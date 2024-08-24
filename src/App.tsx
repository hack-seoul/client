import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';

import { PATH } from '@/constants/routes.ts';
import HomePage from '@/pages/Home/HomePage.tsx';
import ProfilePage from '@/pages/Profile/ProfilePage.tsx';
import { ShortPangPage } from '@/pages/ShortPang/ShortPangPage.tsx';
import { QueryClientProvider } from '@/QueryClientProvider.tsx';

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
        element: <HomePage />,
      },
      {
        path: PATH.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: PATH.SHORT_PANG,
        element: <ShortPangPage />,
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
