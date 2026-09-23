import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const footerLinks = {
  platform: [
    { label: 'Platform', href: '/#platform' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Enterprise', href: '/#enterprise' },
  ],
  resources: [
    { label: 'Resources', href: '/resources' },
    { label: 'Use Cases', href: '/resources' },
    { label: 'Insights', href: '/resources' },
    { label: 'Product Brief', href: '/resources' },
  ],
  company: [
    { label: 'Company', href: '/company' },
    { label: 'About SysPilot', href: '/company' },
    { label: 'OS3 Infotech', href: 'https://os3infotech.com' },
    { label: 'EvoMind', href: 'https://evomind.ai' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-syspilot-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="inline-block mb-4">
                <span className="font-heading text-xl font-semibold text-syspilot-text hover:text-syspilot-primary transition-colors">
                  SysPilot
                </span>
              </Link>
              <p className="text-sm text-syspilot-text-secondary leading-relaxed">
                Intelligent operations for enterprise infrastructure.
              </p>
            </motion.div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-syspilot-text mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-syspilot-text-secondary hover:text-syspilot-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-syspilot-text mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-syspilot-text-secondary hover:text-syspilot-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-syspilot-text mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('http') ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-syspilot-text-secondary hover:text-syspilot-text transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-syspilot-text-secondary hover:text-syspilot-text transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-syspilot-text mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-syspilot-text-secondary hover:text-syspilot-text transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-syspilot-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-syspilot-muted text-center sm:text-left">
            © 2026 OS3 Infotech. All rights reserved. SysPilot is a product of OS3 Infotech.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-syspilot-muted hover:text-syspilot-text transition-colors" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-syspilot-muted hover:text-syspilot-text transition-colors" aria-label="Twitter/X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
