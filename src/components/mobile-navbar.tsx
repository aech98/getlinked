import { FC, ReactNode, useState } from 'react';
import * as Sheet from '@/components/ui/sheet';
import { navLinksData } from '@/configs/navlinks-data';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Routes } from '@/lib/routes';

interface MobileNavbarProps {
  trigger: ReactNode;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ trigger }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet.Sheet open={open} onOpenChange={setOpen}>
      <Sheet.SheetTrigger>
        <>{trigger}</>
      </Sheet.SheetTrigger>
      <Sheet.SheetContent side="top">
        <nav className="flex flex-col space-y-10">
          <ul className="flex flex-col space-y-5">
            {navLinksData.map(({ name, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={handleClose}
                  className="text-18 text-white font-400 font-montserrat"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="w-max" asChild>
            <Link to={Routes.REGISTER} onClick={handleClose}>
              Register
            </Link>
          </Button>
        </nav>
      </Sheet.SheetContent>
    </Sheet.Sheet>
  );
};

export default MobileNavbar;
