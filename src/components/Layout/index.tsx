import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <Header />
      <main className='flex-1 pb-16'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
