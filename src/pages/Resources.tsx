import { motion } from 'framer-motion';
import { ArrowRight, FileText, Lightbulb, Play, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resources() {
  const resources = [
    {
      category: 'Use Cases',
      icon: Lightbulb,
      items: [
        { title: 'SAP HANA Operations', desc: 'How enterprises are transforming SAP operations with intelligent automation.' },
        { title: 'Linux Infrastructure Management', desc: 'Streamlining Linux operations across complex enterprise environments.' },
        { title: 'Incident Response Automation', desc: 'Reducing MTTR with AI-powered investigation and root cause analysis.' },
        { title: 'Compliance & Governance', desc: 'Maintaining enterprise compliance with automated monitoring and reporting.' },
      ],
    },
    {
      category: 'Insights',
      icon: BookOpen,
      items: [
        { title: 'The Future of Enterprise IT Operations', desc: 'How AI is reshaping the operational landscape for enterprise IT teams.' },
        { title: 'From Reactive to Proactive Operations', desc: 'Moving beyond alert fatigue to intelligent, predictive operations.' },
        { title: 'Governed Automation in Enterprise', desc: 'Why automation without governance creates more problems than it solves.' },
        { title: 'The Role of AI in SAP Landscapes', desc: 'Understanding where AI can add value in complex SAP environments.' },
      ],
    },
    {
      category: 'Product Brief',
      icon: FileText,
      items: [
        { title: 'SysPilot Platform Overview', desc: 'A comprehensive overview of the SysPilot platform and its capabilities.' },
        { title: 'Enterprise Security & Governance', desc: 'How SysPilot maintains enterprise-grade security and auditability.' },
        { title: 'Integration Architecture', desc: 'Understanding how SysPilot integrates with existing enterprise infrastructure.' },
        { title: 'Deployment Models', desc: 'Flexible deployment options for enterprise environments.' },
      ],
    },
    {
      category: 'Demo & Videos',
      icon: Play,
      items: [
        { title: 'Platform Demo', desc: 'See SysPilot in action with a comprehensive platform walkthrough.' },
        { title: 'Use Case Walkthroughs', desc: 'Detailed demonstrations of specific use cases and workflows.' },
        { title: 'Technical Deep Dives', desc: 'In-depth technical explanations of platform capabilities.' },
        { title: 'Customer Success Stories', desc: 'Real-world examples of SysPilot in enterprise environments.' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-syspilot-black pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 dot-grid opacity-10" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
          >
            Resources
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            Learn about{' '}
            <span className="gradient-text">intelligent operations.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-syspilot-text-secondary max-w-2xl leading-relaxed"
          >
            Explore use cases, insights, product documentation and demonstrations to understand how SysPilot can transform your enterprise operations.
          </motion.p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="relative py-16 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {resources.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-syspilot-primary/10 flex items-center justify-center">
                    <section.icon size={20} className="text-syspilot-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-semibold">{section.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="glass-card p-6 hover:border-syspilot-primary/30 transition-all duration-300 cursor-pointer group"
                    >
                      <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-syspilot-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-syspilot-text-secondary leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-syspilot-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Learn more</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-6"
          >
            Ready to see SysPilot{' '}
            <span className="gradient-text">in action?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-syspilot-text-secondary mb-10 max-w-2xl mx-auto"
          >
            Request a demo and see how intelligent operations can transform your enterprise environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/#demo"
              className="group px-8 py-4 rounded-lg font-medium text-syspilot-black bg-syspilot-primary hover:bg-syspilot-primary-dark transition-colors flex items-center gap-2"
            >
              Request a Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/"
              className="px-8 py-4 rounded-lg font-medium text-syspilot-text border border-syspilot-border hover:border-syspilot-primary/30 transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
