import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Platform', href: '/#platform' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Enterprise', href: '/#enterprise' },
    { label: 'Resources', href: '/resources' },
    { label: 'Company', href: '/company' },
  ];

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
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-heading text-xl font-semibold text-syspilot-text group-hover:text-syspilot-primary transition-colors">
            SysPilot
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="relative text-sm text-syspilot-text-secondary hover:text-syspilot-text transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-syspilot-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/#demo"
            className="relative px-5 py-2.5 rounded-lg text-sm font-medium text-syspilot-black bg-syspilot-primary hover:bg-syspilot-primary-dark transition-colors duration-200"
          >
            Request a Demo
          </Link>
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
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-syspilot-text-secondary hover:text-syspilot-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#demo"
              className="mt-2 px-5 py-2.5 rounded-lg text-sm font-medium text-syspilot-black bg-syspilot-primary text-center"
            >
              Request a Demo
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
