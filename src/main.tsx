import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from '@/routes';
import FavoriteProvider from '@/context/FavoriteProvider';

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <FavoriteProvider>
      <RouterProvider router={router} />
    </FavoriteProvider>
  </QueryClientProvider>
);
