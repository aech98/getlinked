import { Outlet } from 'react-router-dom';
import { Header } from './header';

export default function RootLayout() {
  return (
    <div className="min-h-screen text-13 md:text-14 text-white font-montserrat font-400">
      <Header />
      <Outlet />
    </div>
  );
}
