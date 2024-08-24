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
import SearchPage from '@/pages/Search/SearchPage.tsx';
import ShowPangPage from '@/pages/ShowPang/ShowPangPage.tsx';
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
        path: PATH.SEARCH,
        element: <SearchPage />,
      },
      {
        path: PATH.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: PATH.SHOW_PANG,
        element: <ShowPangPage />,
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
