import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    painPoint: '',
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3D6FFF', '#00D4FF', '#00E5A0'],
    });
  };

  return (
    <section id="demo" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 mesh-gradient" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
        >
          Get Started
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          See SysPilot Operate Your{' '}
          <span className="gradient-text">SAP Landscape</span> in 30 Minutes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-syspilot-muted max-w-3xl mb-12 leading-relaxed"
        >
          Book a live demo and watch SysPilot's AI agents investigate a real incident, generate a compliance report, and hold a patch for your approval — all in under 30 minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto"
        >
          <div className="gradient-border p-[1px]">
            <div className="rounded-[15px] bg-syspilot-surface p-6 lg:p-8">
              {!submitted ? (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-syspilot-text mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-syspilot-black border border-syspilot-border text-syspilot-text placeholder-syspilot-muted/50 focus:outline-none focus:border-syspilot-primary/50 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-syspilot-text mb-1.5">Business Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-syspilot-black border border-syspilot-border text-syspilot-text placeholder-syspilot-muted/50 focus:outline-none focus:border-syspilot-primary/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-syspilot-text mb-1.5">Company</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-syspilot-black border border-syspilot-border text-syspilot-text placeholder-syspilot-muted/50 focus:outline-none focus:border-syspilot-primary/50 transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-syspilot-text mb-1.5">SAP Environment Size</label>
                      <select
                        required
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-syspilot-black border border-syspilot-border text-syspilot-text focus:outline-none focus:border-syspilot-primary/50 transition-colors"
                      >
                        <option value="">Select...</option>
                        <option value="1-10">1–10 nodes</option>
                        <option value="11-50">11–50 nodes</option>
                        <option value="50+">50+ nodes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-syspilot-text mb-1.5">Primary Pain Point</label>
                      <select
                        required
                        value={formData.painPoint}
                        onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-syspilot-black border border-syspilot-border text-syspilot-text focus:outline-none focus:border-syspilot-primary/50 transition-colors"
                      >
                        <option value="">Select...</option>
                        <option value="incident">Incident Response</option>
                        <option value="compliance">Patch Compliance</option>
                        <option value="monitoring">HA Monitoring</option>
                        <option value="reporting">Executive Reporting</option>
                      </select>
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-lg font-medium text-white bg-gradient-to-r from-syspilot-primary to-syspilot-cyan flex items-center justify-center gap-2 group"
                  >
                    Book My Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 rounded-full bg-syspilot-green/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 size={32} className="text-syspilot-green" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Demo Requested!</h3>
                  <p className="text-syspilot-muted">We'll be in touch within 1 business day.</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              { step: '01', title: '30-min live demo', desc: 'See agents work on real SAP data' },
              { step: '02', title: 'Custom ROI analysis', desc: 'Tailored to your landscape size' },
              { step: '03', title: 'Deploy in days', desc: 'Not quarters. First value in week 1.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-syspilot-border bg-syspilot-surface/30">
                <div className="font-heading text-lg font-bold gradient-text mb-1">{item.step}</div>
                <div className="text-sm font-medium text-syspilot-text mb-0.5">{item.title}</div>
                <div className="text-xs text-syspilot-muted">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <p className="text-lg text-syspilot-muted italic leading-relaxed mb-4">
            "SysPilot collapsed our alert investigation time from 40 minutes to under a minute. ORCA delivers the root cause report before our on-call engineer has opened their laptop."
          </p>
          <cite className="text-sm text-syspilot-primary not-italic font-medium">
            — VP Infrastructure, SAP Managed Services Provider
          </cite>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="max-w-xl mx-auto mt-10 text-center p-5 rounded-xl border border-syspilot-primary/10 bg-syspilot-primary/[0.03]"
        >
          <p className="text-sm text-syspilot-muted">
            <span className="text-syspilot-text font-medium">For CTOs:</span> Every week without autonomous SAP operations costs your team ~20 hours of manual triage. Your competitors are already evaluating AI-assisted infrastructure.{' '}
            <span className="text-syspilot-primary">The window to lead is now.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
