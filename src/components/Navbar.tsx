import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Platform', 'Agents', 'Observability', 'Security', 'Pricing'];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="flex items-center gap-2"
        >
          <span className="font-heading text-xl font-bold text-syspilot-text">SysPilot</span>
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="w-2 h-2 rounded-full bg-syspilot-primary"
          />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-syspilot-muted hover:text-syspilot-text transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#demo"
            className="relative px-5 py-2.5 rounded-lg text-sm font-medium text-white overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-syspilot-primary to-syspilot-cyan opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 rounded-lg border border-transparent group-hover:border-white/20 transition-all" />
            <span className="relative">Book a Demo</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-syspilot-text"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden nav-blur border-t border-syspilot-border"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-syspilot-muted hover:text-syspilot-text transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#demo"
              className="mt-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-syspilot-primary to-syspilot-cyan text-center"
            >
              Book a Demo
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
