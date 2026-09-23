import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Resources from './pages/Resources';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-syspilot-black text-syspilot-text overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
