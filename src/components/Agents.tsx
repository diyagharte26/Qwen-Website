import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { agents } from '../data/agents';

export default function Agents() {
  const [selectedAgent, setSelectedAgent] = useState(0);

  return (
    <section id="agents" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
        >
          AI Agents
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">18 Specialised Agents.</span> One Unified Platform.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-syspilot-muted max-w-2xl mb-12"
        >
          Each agent is purpose-built for a critical SAP domain — from incident response to patch compliance to executive reporting.
        </motion.p>

        <div className="grid lg:grid-cols-[340px_1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-1 max-h-[600px] overflow-y-auto pr-2"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#1E2330 transparent' }}
          >
            {agents.map((agent, i) => (
              <motion.button
                key={agent.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                onClick={() => setSelectedAgent(i)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 group relative ${
                  selectedAgent === i
                    ? 'bg-syspilot-primary/10 border border-syspilot-primary/30'
                    : 'hover:bg-syspilot-surface border border-transparent'
                }`}
              >
                {selectedAgent === i && (
                  <motion.div
                    layoutId="agent-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-syspilot-primary"
                  />
                )}
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: agent.color }}
                  />
                  <div>
                    <div className="text-sm font-medium text-syspilot-text">{agent.name}</div>
                    <div className="text-xs text-syspilot-muted">{agent.tag}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={agents[selectedAgent].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 lg:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${agents[selectedAgent].color}15` }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: agents[selectedAgent].color }}
                    />
                  </div>
                  <div>
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-1"
                      style={{ 
                        backgroundColor: `${agents[selectedAgent].color}15`,
                        color: agents[selectedAgent].color
                      }}
                    >
                      {agents[selectedAgent].tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-3xl font-bold mb-2">
                  {agents[selectedAgent].name}
                </h3>

                <p className="text-lg text-syspilot-cyan font-medium mb-4">
                  {agents[selectedAgent].headline}
                </p>

                <p className="text-syspilot-muted leading-relaxed mb-8">
                  {agents[selectedAgent].oneliner}
                </p>

                <div className="rounded-xl bg-syspilot-black border border-syspilot-border p-5 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-syspilot-red/60" />
                    <div className="w-3 h-3 rounded-full bg-syspilot-amber/60" />
                    <div className="w-3 h-3 rounded-full bg-syspilot-green/60" />
                    <span className="ml-2 text-xs text-syspilot-muted">{agents[selectedAgent].name.toLowerCase()}-agent</span>
                  </div>
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-syspilot-green"
                    >
                      ✓ Agent initialized
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-syspilot-muted"
                    >
                      → Scanning infrastructure data...
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-syspilot-cyan"
                    >
                      → Analysis complete. Report generated.
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                      className="text-syspilot-text"
                    >
                      📄 Output: {agents[selectedAgent].name.toLowerCase()}-report.pdf
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
