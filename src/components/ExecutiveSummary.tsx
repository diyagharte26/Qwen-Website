import { motion } from 'framer-motion';
import { Zap, Target, Clock, Award } from 'lucide-react';

const summaryPoints = [
  {
    icon: Zap,
    stat: '30 seconds',
    context: 'from alert to root cause report',
    color: '#3D6FFF',
  },
  {
    icon: Target,
    stat: 'Zero',
    context: 'autonomous actions without your approval',
    color: '#00E5A0',
  },
  {
    icon: Clock,
    stat: '1 day',
    context: 'to first production value',
    color: '#00D4FF',
  },
  {
    icon: Award,
    stat: '6 years',
    context: 'of audit-grade immutable logs',
    color: '#FFB347',
  },
];

export default function ExecutiveSummary() {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-syspilot-primary/[0.03] via-syspilot-cyan/[0.02] to-syspilot-primary/[0.03]" />
      <div className="absolute inset-0 border-y border-syspilot-border" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-heading text-xl lg:text-2xl font-bold mb-2">
            The <span className="gradient-text">30-Second</span> Executive Summary
          </h3>
          <p className="text-sm text-syspilot-muted">
            For leaders who need the bottom line fast.
          </p>
        </motion.div>

        {/* Summary points */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {summaryPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-5 rounded-xl bg-syspilot-surface/50 border border-syspilot-border hover:border-syspilot-primary/20 transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: `${point.color}15` }}
              >
                <point.icon size={18} style={{ color: point.color }} />
              </div>
              <div className="font-heading text-2xl lg:text-3xl font-bold mb-1" style={{ color: point.color }}>
                {point.stat}
              </div>
              <div className="text-xs text-syspilot-muted leading-relaxed">{point.context}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom one-liner */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-sm text-syspilot-muted"
        >
          Autonomous AI operations. Human-controlled decisions. Enterprise-grade governance.{' '}
          <span className="text-syspilot-text font-medium">That's SysPilot.</span>
        </motion.p>
      </div>
    </section>
  );
}
