import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));
const Contact = lazy(() => import('@/pages/contact'));
const Register = lazy(() => import('@/pages/register'));

export { Home, Contact, Register };
