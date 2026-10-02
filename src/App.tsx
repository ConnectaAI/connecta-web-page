import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CompanyHome from './components/CompanyHome';
import Home from './components/Home';
import DesignPreview from './components/DesignPreview';
import ScrollToTop from './components/ScrollToTop';
import Seo from './components/Seo';
import './App.css';

function App() {
  return (
    <>
      <Seo />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<CompanyHome />} />
          <Route path="/medassistant" element={<Home />} />
          <Route path="/design-preview" element={<DesignPreview />} />
          {/* English lives under /en (see src/lib/routes.ts) */}
          <Route path="/en" element={<CompanyHome />} />
          <Route path="/en/medassistant" element={<Home />} />
          <Route path="/en/design-preview" element={<DesignPreview />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
