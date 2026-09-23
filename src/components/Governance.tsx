import { motion } from 'framer-motion';
import { FileCheck, Shield, Eye, Server, HardDrive, RotateCcw } from 'lucide-react';

const pillars = [
  {
    icon: FileCheck,
    title: 'Immutable Audit Trail',
    description: 'Every action — by a user, an agent, or a schedule — is written to an append-only, integrity-hashed log. Including every AI conversation.',
  },
  {
    icon: Shield,
    title: 'RBAC & Policy Engine',
    description: 'Four role tiers. Every action evaluated against configurable policy rules before execution. Policy violations are blocked, logged, and surfaced immediately.',
  },
  {
    icon: Eye,
    title: 'AI Explainability',
    description: 'Every agent recommendation includes the full reasoning chain — what data was collected, what pattern was found, why that conclusion was reached. No black boxes.',
  },
  {
    icon: Server,
    title: 'LLM Provider Choice',
    description: 'Run SysPilot on OpenAI, Anthropic, IBM Granite, Mistral, or your own on-premise model. Data residency decisions are yours.',
  },
  {
    icon: HardDrive,
    title: '6-Year Log Retention',
    description: 'Compliance-aligned retention windows for HIPAA (6-year) and CIS Controls — configurable per organisation, with structured export for SIEM ingestion.',
  },
  {
    icon: RotateCcw,
    title: 'Rollback Protection',
    description: 'Every patch and configuration change maintains a rollback strategy. The Security Rollback agent monitors post-patch health and flags degradation automatically.',
  },
];

const complianceLogos = ['HIPAA', 'CIS Controls', 'SOC 2', 'ISO 27001', 'GDPR', 'NIST'];

export default function Governance() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
        >
          Enterprise Governance
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          HIPAA. CIS Controls. Audit-Ready.{' '}
          <span className="gradient-text">From Day One.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 card-tilt"
            >
              <div className="w-10 h-10 rounded-xl bg-syspilot-primary/10 flex items-center justify-center mb-4">
                <pillar.icon size={20} className="text-syspilot-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{pillar.title}</h3>
              <p className="text-sm text-syspilot-muted leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden py-6 border-t border-b border-syspilot-border"
        >
          <div className="flex ticker-animate whitespace-nowrap">
            {[...complianceLogos, ...complianceLogos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-8"
              >
                <div className="w-8 h-8 rounded-lg bg-syspilot-primary/10 flex items-center justify-center">
                  <Shield size={14} className="text-syspilot-primary" />
                </div>
                <span className="text-sm font-medium text-syspilot-muted">{logo}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
