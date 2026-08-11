import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import DesignPreview from './components/DesignPreview';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design-preview" element={<DesignPreview />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
