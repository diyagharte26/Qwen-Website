import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, Database, Shield } from 'lucide-react';

const tabs = [
  {
    id: 'ha',
    label: 'HA Cluster',
    icon: Server,
    headline: 'Cluster quorum, node status, fencing health',
    metrics: [
      { label: 'Online Nodes', value: '12/12', status: 'healthy' },
      { label: 'Quorum State', value: 'OK', status: 'healthy' },
      { label: 'SBD Status', value: 'Active', status: 'healthy' },
      { label: 'Fencing Health', value: '98%', status: 'healthy' },
    ],
  },
  {
    id: 'infra',
    label: 'Infrastructure',
    icon: Cpu,
    headline: 'Per-host resource monitoring',
    metrics: [
      { label: 'CPU Usage', value: '34%', status: 'healthy' },
      { label: 'Memory', value: '67%', status: 'warning' },
      { label: 'Disk /hana', value: '72%', status: 'warning' },
      { label: 'Network I/O', value: '1.2 Gbps', status: 'healthy' },
    ],
  },
  {
    id: 'hana',
    label: 'SAP HANA',
    icon: Database,
    headline: 'Database internals visibility',
    metrics: [
      { label: 'Active Connections', value: '847', status: 'healthy' },
      { label: 'Memory by Service', value: '128 GB', status: 'healthy' },
      { label: 'SQL Lock Waits', value: '0', status: 'healthy' },
      { label: 'Column Store', value: '94%', status: 'healthy' },
    ],
  },
  {
    id: 'security',
    label: 'Security & Patch',
    icon: Shield,
    headline: 'Fleet patch compliance live',
    metrics: [
      { label: 'Patched Hosts', value: '9/12', status: 'warning' },
      { label: 'Critical Patches', value: '3', status: 'critical' },
      { label: 'Compliance %', value: '75%', status: 'warning' },
      { label: 'Groups', value: '4 Active', status: 'healthy' },
    ],
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case 'healthy': return '#00E5A0';
    case 'warning': return '#FFB347';
    case 'critical': return '#FF4C6A';
    default: return '#6B7A99';
  }
}

export default function Observability() {
  const [activeTab, setActiveTab] = useState('ha');
  const activeData = tabs.find(t => t.id === activeTab)!;

  return (
    <section id="observability" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 dot-grid opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
        >
          Live Observability
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          Four Live Dashboards.{' '}
          <span className="gradient-text">Every Domain Covered.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-syspilot-muted max-w-3xl mb-12 leading-relaxed"
        >
          SysPilot's observability layer provides real-time visibility across your entire SAP landscape — no manual queries, no tab-switching between tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden"
        >
          <div className="flex border-b border-syspilot-border overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-syspilot-text'
                    : 'text-syspilot-muted hover:text-syspilot-text'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-syspilot-primary to-syspilot-cyan"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="p-6 lg:p-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-syspilot-muted mb-6">{activeData.headline}</p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {activeData.metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-xl bg-syspilot-black border border-syspilot-border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-syspilot-muted">{metric.label}</span>
                      <motion.span
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getStatusColor(metric.status) }}
                      />
                    </div>
                    <div className="font-heading text-2xl font-bold" style={{ color: getStatusColor(metric.status) }}>
                      {metric.value}
                    </div>
                    <div className="mt-3 h-8 flex items-end gap-0.5">
                      {Array.from({ length: 12 }).map((_, j) => (
                        <motion.div
                          key={j}
                          initial={{ height: 0 }}
                          animate={{ height: `${20 + Math.random() * 80}%` }}
                          transition={{ delay: 0.3 + j * 0.05, duration: 0.4 }}
                          className="flex-1 rounded-sm"
                          style={{ 
                            backgroundColor: getStatusColor(metric.status),
                            opacity: 0.3 + (j / 12) * 0.5
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
