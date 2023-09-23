import { FC } from 'react';
import { Routes } from '@/lib/routes';
import { Link } from 'react-router-dom';
import { useMedia } from '@/hooks/use-media';
import { SwitchComponents } from './switch-components';
import { Icons } from '@/lib/icons';
import { navLinksData } from '@/configs/navlinks-data';
import { Button } from './ui/button';
import MobileNavbar from './mobile-navbar';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { isDesktop } = useMedia();

  return (
    <header className="h-16 sticky top-0 bg-blue z-50 md:h-20 lg:h-32 xl:h-36 px-4 sm:px-5 md:px-7 lg:px-8 xl:px-10 flex items-center border-b border-white/20">
      <div className="h-4 w-full md:h-8 lg:h-14 flex items-center justify-between">
        <Link
          to={Routes.HOME}
          className="inline-block text-white text-16 md:text-20 lg:text-36 font-clash font-700"
        >
          get<span className="text-purpleLight">Linked</span>
        </Link>
        <SwitchComponents
          condition={isDesktop}
          currentNode={
            <MobileNavbar
              trigger={
                <span>
                  <Icons.Menu className="w-5 h-3.5" />
                </span>
              }
            />
          }
          pendingNode={
            <div className="flex items-center gap-x-28">
              <ul className="flex items-center space-x-12">
                {navLinksData.map(({ name, path }, index) => (
                  <li key={index}>
                    <Link
                      to={path}
                      className="text-white text-16 font-montserrat font-400"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button asChild>{<Link to={Routes.REGISTER}>Register</Link>}</Button>
            </div>
          }
        />
      </div>
    </header>
  );
};

export { Header };
