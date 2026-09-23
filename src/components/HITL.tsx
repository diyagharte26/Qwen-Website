import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Shield, Clock, FileText, Users } from 'lucide-react';

const guarantees = [
  { icon: FileText, text: 'Every approval records the authoriser\'s identity + timestamp in the immutable audit trail' },
  { icon: Shield, text: 'Role-gated: only users with the correct RBAC permission can approve each action type' },
  { icon: Users, text: 'Full execution plan shown before approval — no surprises' },
  { icon: Clock, text: 'Approvals are accessible from Microsoft Teams — approve without leaving your workflow' },
];

const cves = [
  { id: 'CVE-2024-21762', score: '9.8', severity: 'Critical', color: '#FF4C6A' },
  { id: 'CVE-2024-24989', score: '8.4', severity: 'High', color: '#FFB347' },
  { id: 'CVE-2024-25110', score: '7.9', severity: 'High', color: '#FFB347' },
];

export default function HITL() {
  return (
    <section id="security" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
        >
          Human-in-the-Loop
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          AI Does the Analysis.{' '}
          <span className="gradient-text">You Make the Call.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-syspilot-muted max-w-3xl mb-12 leading-relaxed"
        >
          Every irreversible action — patching, rebooting, decommissioning — is held in an approval queue. SysPilot presents the full context, risk assessment, and execution plan. You approve or reject. Nothing runs without your sign-off.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="gradient-border p-[1px]">
            <div className="rounded-[15px] bg-syspilot-surface p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-syspilot-border">
                <div className="w-10 h-10 rounded-lg bg-syspilot-amber/10 flex items-center justify-center">
                  <span className="text-xl">⚠️</span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-syspilot-amber">HITL APPROVAL REQUIRED</h4>
                  <p className="text-xs text-syspilot-muted">Agent: KARMA | Action: Apply 3 Critical Patches</p>
                </div>
              </div>

              <div className="text-sm text-syspilot-muted mb-4">
                Target: <span className="text-syspilot-text font-mono">hana-prod-01</span> | Requested by: <span className="text-syspilot-cyan">KARMA Agent</span>
              </div>

              <div className="space-y-2 mb-6">
                {cves.map((cve, i) => (
                  <motion.div
                    key={cve.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-syspilot-black border border-syspilot-border"
                  >
                    <span className="font-mono text-sm text-syspilot-text">{cve.id}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-syspilot-muted">CVSS {cve.score}</span>
                      <motion.span
                        animate={cve.severity === 'Critical' ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-2 py-0.5 rounded text-xs font-medium"
                        style={{ backgroundColor: `${cve.color}20`, color: cve.color }}
                      >
                        {cve.severity}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="px-4 py-3 rounded-lg bg-syspilot-primary/5 border border-syspilot-primary/20 mb-6">
                <p className="text-sm">
                  <span className="font-medium text-syspilot-primary">AI Risk Assessment: HIGH</span>
                  <span className="text-syspilot-muted"> — Patch during next maintenance window; secondary node is in sync.</span>
                </p>
                <p className="text-xs text-syspilot-muted mt-1">Estimated downtime: 0 min (live patch available)</p>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 rounded-lg bg-syspilot-green/10 border border-syspilot-green/30 text-syspilot-green font-medium text-sm flex items-center justify-center gap-2 hover:bg-syspilot-green/20 transition-colors"
                >
                  <CheckCircle2 size={18} /> Approve
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 rounded-lg bg-syspilot-red/10 border border-syspilot-red/30 text-syspilot-red font-medium text-sm flex items-center justify-center gap-2 hover:bg-syspilot-red/20 transition-colors"
                >
                  <XCircle size={18} /> Reject
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {guarantees.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-syspilot-surface/50 border border-syspilot-border"
            >
              <item.icon size={18} className="text-syspilot-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-syspilot-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
