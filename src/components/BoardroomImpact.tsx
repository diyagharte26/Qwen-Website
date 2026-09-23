import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, DollarSign, Clock, Shield, Users } from 'lucide-react';

const impactMetrics = [
  {
    icon: DollarSign,
    value: 2.4,
    prefix: '$',
    suffix: 'M',
    label: 'Annual Ops Cost Saved',
    sublabel: 'Per 50-node SAP landscape',
    color: '#00E5A0',
  },
  {
    icon: Clock,
    value: 73,
    suffix: '%',
    label: 'MTTR Reduction',
    sublabel: '47 min → 12 min average',
    color: '#3D6FFF',
  },
  {
    icon: Shield,
    value: 94,
    suffix: '%',
    label: 'CVE Compliance Rate',
    sublabel: 'Up from 61% pre-SysPilot',
    color: '#00D4FF',
  },
  {
    icon: Users,
    value: 3,
    suffix: '×',
    label: 'Engineer Productivity',
    sublabel: 'Same team, 3× the coverage',
    color: '#FFB347',
  },
];

function AnimatedMetric({ metric, index }: { metric: typeof impactMetrics[0]; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Number((eased * metric.value).toFixed(metric.value % 1 !== 0 ? 1 : 0)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [metric.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative p-6 lg:p-8 rounded-2xl bg-syspilot-surface border border-syspilot-border group hover:border-opacity-60 transition-all duration-300"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at center, ${metric.color}08 0%, transparent 70%)` }}
      />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${metric.color}15` }}
          >
            <metric.icon size={20} style={{ color: metric.color }} />
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp size={14} style={{ color: metric.color }} />
            <span className="text-xs font-medium" style={{ color: metric.color }}>Impact</span>
          </div>
        </div>
        
        <div className="font-heading text-4xl lg:text-5xl font-bold mb-1" style={{ color: metric.color }}>
          {metric.prefix || ''}{count}{metric.suffix}
        </div>
        <div className="text-sm font-medium text-syspilot-text mb-1">{metric.label}</div>
        <div className="text-xs text-syspilot-muted">{metric.sublabel}</div>
      </div>
    </motion.div>
  );
}

const executiveQuotes = [
  {
    quote: "We went from firefighting 40+ alerts per week to proactive resolution. Our SAP team now spends 80% of their time on strategic projects instead of manual triage.",
    author: "CTO",
    company: "Global SAP Managed Services Provider",
    metric: "80% time reallocation",
  },
  {
    quote: "The board asked how we'd handle a critical CVE across 30 production nodes. I showed them SysPilot's KARMA report — patch plan, risk assessment, and approval workflow — all generated in 90 seconds.",
    author: "VP Infrastructure",
    company: "Fortune 500 Manufacturing",
    metric: "90s full fleet scan",
  },
];

export default function BoardroomImpact() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-syspilot-black via-syspilot-surface/30 to-syspilot-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-syspilot-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-syspilot-cyan/5 rounded-full blur-3xl" />
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-syspilot-primary/10 border border-syspilot-primary/20 mb-6"
          >
            <TrendingDown size={14} className="text-syspilot-green" />
            <span className="text-xs font-medium text-syspilot-primary uppercase tracking-wider">For the Boardroom</span>
          </motion.div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            The Numbers Your Board{' '}
            <span className="gradient-text">Needs to Hear</span>
          </h2>
          <p className="text-lg text-syspilot-muted max-w-2xl mx-auto">
            Measurable impact across cost, risk, compliance, and team productivity — validated across production SAP landscapes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {impactMetrics.map((metric, i) => (
            <AnimatedMetric key={metric.label} metric={metric} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 lg:p-8 rounded-2xl border border-syspilot-red/20 bg-syspilot-red/[0.02]">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-syspilot-red pulse-dot" />
                <span className="text-xs font-medium uppercase tracking-wider text-syspilot-red">Before SysPilot</span>
              </div>
              <ul className="space-y-3">
                {[
                  '47-minute average incident resolution',
                  'Manual CVE tracking across 3+ tools',
                  'Full-time role dedicated to compliance reporting',
                  'HA failover risks discovered during actual failover',
                  'Board reports assembled manually over 2 days',
                  'Engineer burnout from 24/7 alert fatigue',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-sm text-syspilot-muted"
                  >
                    <span className="text-syspilot-red mt-0.5">✕</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl border border-syspilot-green/20 bg-syspilot-green/[0.02]">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-syspilot-green pulse-dot" />
                <span className="text-xs font-medium uppercase tracking-wider text-syspilot-green">After SysPilot</span>
              </div>
              <ul className="space-y-3">
                {[
                  'Under-30-second root cause analysis, auto-generated',
                  'One scan → fleet-wide compliance report with remediation plan',
                  'HERALD agent delivers executive digests on schedule',
                  'ATLAS detects replication drift before failover window',
                  'Automated board-ready PDFs with full audit trail',
                  'Engineers focus on decisions, not data collection',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-2 text-sm text-syspilot-text"
                  >
                    <span className="text-syspilot-green mt-0.5">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {executiveQuotes.map((eq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-6 lg:p-8 relative"
            >
              <div className="text-3xl text-syspilot-primary/30 font-heading mb-4">"</div>
              <p className="text-syspilot-text leading-relaxed mb-6">{eq.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-syspilot-text">{eq.author}</div>
                  <div className="text-xs text-syspilot-muted">{eq.company}</div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-syspilot-primary/10 border border-syspilot-primary/20">
                  <span className="text-xs font-medium text-syspilot-primary">{eq.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-syspilot-muted mb-6">
            Every day without autonomous SAP operations is a day your team spends on work an AI agent could do in seconds.
          </p>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-white bg-gradient-to-r from-syspilot-primary to-syspilot-cyan hover:shadow-lg hover:shadow-syspilot-primary/20 transition-all duration-300"
          >
            See the ROI in 30 Minutes
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
