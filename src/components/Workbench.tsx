import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, Clock } from 'lucide-react';

const chatMessages = [
  { role: 'user', text: 'Run KARMA on all production HANA nodes and send the compliance report to security@company.com' },
  { role: 'system', text: 'Understood. Initiating KARMA compliance scan across 12 registered production HANA nodes...' },
  { role: 'progress', text: '' },
  { role: 'system', text: '✅ Scan complete. Found 3 Critical CVEs across 2 hosts.' },
  { role: 'system', text: '📄 Compliance report generated and sent to security@company.com' },
  { role: 'system', text: '📌 Full report saved to Reports Centre.' },
];

const capabilities = [
  { icon: MessageSquare, title: 'Trigger any agent with a sentence', desc: 'No forms. No navigation. Just ask.' },
  { icon: Brain, title: 'Session memory across the conversation', desc: 'Agents remember what they found earlier in the thread.' },
  { icon: Clock, title: 'Natural language scheduling', desc: '"Run GAUGE every morning at 8 AM" — done.' },
];

export default function Workbench() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Animate messages one by one
          chatMessages.forEach((_, i) => {
            setTimeout(() => {
              setVisibleMessages(i + 1);
              if (chatMessages[i].role === 'progress') {
                // Animate progress bar
                let p = 0;
                const interval = setInterval(() => {
                  p += 5;
                  setProgress(p);
                  if (p >= 100) clearInterval(interval);
                }, 60);
              }
            }, i * 800);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 dot-grid opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section tag */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
        >
          Agent Workbench
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          Ask Anything. Trigger Any Agent.{' '}
          <span className="gradient-text">In Plain English.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-syspilot-muted max-w-3xl mb-12 leading-relaxed"
        >
          The Agent Workbench is a conversational AI interface where operators query the platform, trigger agents, and receive analysis — without navigating individual agent pages or filling forms.
        </motion.p>

        {/* Chat mock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="glass-card p-6 lg:p-8">
            <div className="space-y-4">
              {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${
                    msg.role === 'user'
                      ? 'flex justify-end'
                      : 'flex justify-start'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-tr-sm bg-syspilot-primary/20 border border-syspilot-primary/30">
                      <p className="text-sm text-syspilot-text">{msg.text}</p>
                    </div>
                  ) : msg.role === 'progress' ? (
                    <div className="w-full max-w-[80%]">
                      <div className="h-2 rounded-full bg-syspilot-border overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-syspilot-primary to-syspilot-cyan"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-syspilot-muted mt-1">Scanning nodes...</p>
                    </div>
                  ) : (
                    <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-tl-sm bg-syspilot-surface border border-syspilot-border">
                      <p className="text-sm text-syspilot-text">{msg.text}</p>
                    </div>
                  )}
                </motion.div>
              ))}
              {visibleMessages < chatMessages.length && (
                <div className="flex gap-1">
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 rounded-full bg-syspilot-muted" />
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 rounded-full bg-syspilot-muted" />
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 rounded-full bg-syspilot-muted" />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-syspilot-primary/10 flex items-center justify-center mx-auto mb-4">
                <cap.icon size={20} className="text-syspilot-primary" />
              </div>
              <h4 className="font-heading font-semibold mb-2">{cap.title}</h4>
              <p className="text-sm text-syspilot-muted">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
