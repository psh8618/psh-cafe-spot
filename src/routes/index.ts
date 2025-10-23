import Layout from '@/components/Layout';
import CafeListPage from '@/pages/CafeListPage';
import { createBrowserRouter } from 'react-router';
import CafeDetailPage from '@/pages/CafeDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: CafeListPage,
      },
      {
        path: '/cafe/:id',
        Component: CafeDetailPage,
      },
    ],
  },
]);
