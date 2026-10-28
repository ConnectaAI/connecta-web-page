import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import TzijFooter from './TzijFooter';
import { stripLang } from '../lib/routes';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const isTzij = stripLang(pathname) === '/tzij';

  return (
    <LazyMotion features={domAnimation}>
      <Navbar />
      {children}
      {isTzij ? <TzijFooter /> : <Footer />}
    </LazyMotion>
  );
}

export default Layout;
