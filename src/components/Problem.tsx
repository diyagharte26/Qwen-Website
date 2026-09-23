import { motion } from 'framer-motion';
import { AlertTriangle, ShieldAlert, GitBranch } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Alert Storm',
    subtitle: 'Mean Time to Resolution: 47 Minutes',
    description: 'Engineers manually correlate alerts across Prometheus, Trento, and HANA Cockpit before investigation can even begin.',
  },
  {
    icon: ShieldAlert,
    title: 'Compliance Gaps',
    subtitle: 'Patch Compliance Falls Behind Daily',
    description: 'Tracking CVE exposure across a multi-node SAP fleet manually is a full-time role — and still produces gaps.',
  },
  {
    icon: GitBranch,
    title: 'Silent Drift',
    subtitle: 'Configuration Drift Goes Undetected',
    description: 'HA clusters silently diverge from safe-failover baselines. No alert fires until the failover fails.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring' } }
};

export default function Problem() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
        >
          The Problem
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-3xl"
        >
          Your SAP Landscape Is Generating{' '}
          <span className="gradient-text">More Signals</span> Than Your Team Can Process
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={cardVariants}
              className="glass-card p-8 card-tilt group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <problem.icon size={24} className="text-syspilot-red" />
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-syspilot-red/50"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold">{problem.title}</h3>
              </div>
              <p className="text-sm font-medium text-syspilot-cyan mb-3">{problem.subtitle}</p>
              <p className="text-sm text-syspilot-muted leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg lg:text-xl text-syspilot-muted italic leading-relaxed">
            "The infrastructure generates the data. The tooling stores it. But the reasoning — the correlation, the root cause, the remediation priority — still lives inside your engineers' heads."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
