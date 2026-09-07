import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Platform from './components/Platform';
import Agents from './components/Agents';
import Workbench from './components/Workbench';
import HITL from './components/HITL';
import Observability from './components/Observability';
import Governance from './components/Governance';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-syspilot-black text-syspilot-text overflow-x-hidden">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Hero />
            <Problem />
            <Platform />
            <Agents />
            <Workbench />
            <HITL />
            <Observability />
            <Governance />
            <DemoForm />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
