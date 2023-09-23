import { Routes } from '@/lib/routes';

type NavLinksDataType = {
  name: string;
  path: string;
};

const navLinksData: NavLinksDataType[] = [
  { name: 'Timeline', path: Routes.TIMELINE },
  { name: 'Overview', path: Routes.OVERVIEW },
  { name: 'FAQs', path: Routes.FAQS },
  { name: 'Contact', path: Routes.CONTACT },
];

export { navLinksData, type NavLinksDataType };
