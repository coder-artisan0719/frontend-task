import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div className="min-h-dvh w-full flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
