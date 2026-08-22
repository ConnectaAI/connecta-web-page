import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CompanyHome from './components/CompanyHome';
import Home from './components/Home';
import DesignPreview from './components/DesignPreview';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<CompanyHome />} />
          <Route path="/medassistant" element={<Home />} />
          <Route path="/design-preview" element={<DesignPreview />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
