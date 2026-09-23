import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, UserCheck, Building2 } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    title: 'Autonomous Investigation',
    description: 'Agents detect, correlate, and reason over incidents in seconds — not minutes. ORCA delivers a PDF root cause report before your on-call engineer opens their laptop.',
  },
  {
    icon: UserCheck,
    title: 'Human-in-the-Loop Control',
    description: 'No autonomous AI action on production systems without your sign-off. Every patch, reboot, or decommission is held in an approval queue until an authorised engineer approves.',
  },
  {
    icon: Building2,
    title: 'Enterprise-Grade Governance',
    description: 'Immutable audit trails, RBAC, policy engine guardrails, and compliance-aligned log retention — SysPilot is built for organisations where accountability is non-negotiable.',
  },
];

const stats = [
  { value: 18, suffix: '+', label: 'AI Agents' },
  { value: 30, prefix: '< ', suffix: 's', label: 'Mean Time to Insight' },
  { value: 100, suffix: '%', label: 'HITL-Gated Actions' },
  { value: 6, suffix: '-Year', label: 'Audit Retention' },
];

function StatCounter({ value, prefix = '', suffix = '', label }: { value: number; prefix?: string; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl lg:text-5xl font-bold gradient-text mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-syspilot-muted">{label}</div>
    </div>
  );
}

export default function Platform() {
  return (
    <section id="platform" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 dot-grid opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
        >
          The Platform
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          An AI Agent Team That Operates{' '}
          <span className="gradient-text">Your SAP Infrastructure</span> Autonomously
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-syspilot-muted max-w-3xl mb-16 leading-relaxed"
        >
          SysPilot replaces reactive, manual operations with a fleet of specialised AI agents — each purpose-built for a critical SAP domain. Every agent reasons over live infrastructure data, produces structured outputs, and hands high-risk decisions to your engineers for final approval.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.15 }}
              className="glass-card p-8 card-tilt"
            >
              <div className="w-12 h-12 rounded-xl bg-syspilot-primary/10 flex items-center justify-center mb-5">
                <pillar.icon size={24} className="text-syspilot-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-sm text-syspilot-muted leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-8 rounded-2xl border border-syspilot-border bg-syspilot-surface/50"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
