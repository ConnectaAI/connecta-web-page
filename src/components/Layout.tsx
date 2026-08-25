import { ReactNode } from 'react';
import { LazyMotion, domAnimation } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Navbar />
      {children}
      <Footer />
    </LazyMotion>
  );
}

export default Layout;
