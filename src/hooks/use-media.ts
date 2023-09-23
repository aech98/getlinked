import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const useMedia = () => {
  const mobile = useMediaQuery('(max-width: 768px)');
  const desktop = useMediaQuery('(min-width: 1024px)');

  const [isMobile, setIsMobile] = useState(mobile);
  const [isDesktop, setIsDesktop] = useState(desktop);

  useEffect(() => {
    mobile ? setIsMobile(true) : setIsMobile(false);
    desktop ? setIsDesktop(true) : setIsDesktop(false);
  }, [mobile, desktop]);

  return { isMobile, isDesktop };
};

export { useMedia };
