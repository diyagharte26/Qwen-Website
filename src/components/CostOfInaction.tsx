import { motion } from 'framer-motion';
import { AlertOctagon, TrendingDown, Zap } from 'lucide-react';

const costItems = [
  {
    icon: AlertOctagon,
    value: '$850K',
    label: 'Average cost of a single SAP HANA outage',
    sublabel: 'Including revenue loss, SLA penalties, and recovery',
  },
  {
    icon: TrendingDown,
    value: '34%',
    label: 'Of engineer time lost to manual triage',
    sublabel: 'Time that could be spent on strategic initiatives',
  },
  {
    icon: Zap,
    value: '72hrs',
    label: 'Average time to full CVE compliance manually',
    sublabel: 'Vs. 90 seconds with KARMA agent',
  },
];

export default function CostOfInaction() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-syspilot-red/[0.03] via-syspilot-black to-syspilot-red/[0.03]" />
      <div className="absolute inset-0 border-y border-syspilot-red/10" />
      
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-syspilot-red/[0.03] to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-syspilot-red/10 border border-syspilot-red/20 mb-4">
            <AlertOctagon size={12} className="text-syspilot-red" />
            <span className="text-xs font-medium text-syspilot-red uppercase tracking-wider">The Cost of Inaction</span>
          </div>
          <h3 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight">
            What Happens When You <span className="text-syspilot-red">Don't</span> Act?
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {costItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-6 rounded-xl border border-syspilot-red/10 bg-syspilot-surface/50 text-center group hover:border-syspilot-red/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-syspilot-red/10 flex items-center justify-center mx-auto mb-4">
                <item.icon size={20} className="text-syspilot-red" />
              </div>
              <div className="font-heading text-3xl lg:text-4xl font-bold text-syspilot-red mb-2">
                {item.value}
              </div>
              <div className="text-sm font-medium text-syspilot-text mb-1">{item.label}</div>
              <div className="text-xs text-syspilot-muted">{item.sublabel}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 text-sm text-syspilot-muted"
        >
          These aren't hypotheticals. They're the daily reality for SAP teams operating without AI-assisted infrastructure management.
        </motion.p>
      </div>
    </section>
  );
}
