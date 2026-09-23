import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Lock, Gauge, Globe, Cpu } from 'lucide-react';

const decisionFactors = [
  {
    icon: Lock,
    title: 'Zero Autonomous Risk',
    description: 'Every production action requires human approval. No rogue AI. No unexplained changes. Full audit trail of who approved what and when.',
    badge: 'Risk: Eliminated',
    badgeColor: '#00E5A0',
  },
  {
    icon: Gauge,
    title: 'Immediate Time-to-Value',
    description: 'Deploy in days, not quarters. Agents start delivering value from day one — first root cause report within hours of onboarding.',
    badge: 'ROI: Week 1',
    badgeColor: '#3D6FFF',
  },
  {
    icon: Globe,
    title: 'No Vendor Lock-In',
    description: 'Choose your LLM provider. Run on-premise or cloud. Export all data anytime. Your infrastructure, your rules, your data sovereignty.',
    badge: 'Control: Yours',
    badgeColor: '#00D4FF',
  },
  {
    icon: Cpu,
    title: 'Scales With Your Fleet',
    description: 'From 5 nodes to 500. Agents adapt to your topology. No re-architecture needed as your SAP landscape grows.',
    badge: 'Scale: Unlimited',
    badgeColor: '#FFB347',
  },
];

const competitiveAdvantages = [
  'Your competitors are still manually correlating alerts at 2 AM',
  'Board-ready compliance reports generated in seconds, not days',
  'Attract top engineering talent — they want to build, not triage',
  'Turn SAP operations from a cost centre into a competitive moat',
];

export default function CTODecisionFramework() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-syspilot-cyan/10 border border-syspilot-cyan/20 mb-6"
          >
            <Gauge size={14} className="text-syspilot-cyan" />
            <span className="text-xs font-medium text-syspilot-cyan uppercase tracking-wider">Decision Framework</span>
          </motion.div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Why CTOs Choose{' '}
            <span className="gradient-text">SysPilot</span>
          </h2>
          <p className="text-lg text-syspilot-muted max-w-2xl mx-auto">
            Four criteria that matter when you're betting your infrastructure on AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {decisionFactors.map((factor, i) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 lg:p-8 group hover:border-syspilot-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-syspilot-primary/10 flex items-center justify-center">
                  <factor.icon size={24} className="text-syspilot-primary" />
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: `${factor.badgeColor}15`, color: factor.badgeColor }}
                >
                  {factor.badge}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{factor.title}</h3>
              <p className="text-sm text-syspilot-muted leading-relaxed">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 lg:p-10 rounded-2xl border border-syspilot-primary/20 bg-gradient-to-br from-syspilot-primary/[0.05] to-syspilot-cyan/[0.05]"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-syspilot-primary/50 to-transparent" />
          
          <h3 className="font-heading text-xl lg:text-2xl font-bold mb-6 text-center">
            The Competitive Reality
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {competitiveAdvantages.map((advantage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={18} className="text-syspilot-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-syspilot-text">{advantage}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-syspilot-muted mb-4">
              The question isn't whether AI will transform SAP operations — it's whether you'll lead or follow.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-syspilot-primary to-syspilot-cyan hover:shadow-lg hover:shadow-syspilot-primary/20 transition-all duration-300 group"
            >
              Lead the Transformation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
