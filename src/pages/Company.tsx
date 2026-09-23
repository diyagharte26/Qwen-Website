import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Company() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const layers = [
      { y: 0.2, label: 'Enterprise Infrastructure', color: 'rgba(74, 158, 255, 0.6)' },
      { y: 0.4, label: 'AI & Intelligent Automation', color: 'rgba(139, 92, 246, 0.6)' },
      { y: 0.6, label: 'SysPilot', color: 'rgba(48, 196, 139, 0.8)' },
      { y: 0.8, label: 'Intelligent Enterprise Operations', color: 'rgba(48, 196, 139, 0.6)' },
    ];

    const particles: { x: number; y: number; speed: number; layer: number }[] = [];
    for (let i = 0; i < 30; i++) {
      const layer = Math.floor(Math.random() * (layers.length - 1));
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: layers[layer].y * canvas.offsetHeight + (Math.random() - 0.5) * 40,
        speed: 0.3 + Math.random() * 0.3,
        layer,
      });
    }

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw layer lines
      layers.forEach((layer) => {
        const y = layer.y * h;
        ctx.beginPath();
        ctx.moveTo(w * 0.1, y);
        ctx.lineTo(w * 0.9, y);
        ctx.strokeStyle = layer.color.replace('0.6', '0.15').replace('0.8', '0.2');
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw node
        ctx.beginPath();
        ctx.arc(w * 0.5, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = layer.color;
        ctx.fill();

        // Label
        ctx.font = '11px Inter';
        ctx.fillStyle = layer.color.replace('0.6', '0.5').replace('0.8', '0.7');
        ctx.textAlign = 'center';
        ctx.fillText(layer.label, w * 0.5, y - 12);
      });

      // Draw flowing particles
      particles.forEach((p) => {
        p.x += p.speed;
        if (p.x > w) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = layers[p.layer].color.replace('0.6', '0.4').replace('0.8', '0.6');
        ctx.fill();
      });

      // Draw connections between layers
      for (let i = 0; i < layers.length - 1; i++) {
        const y1 = layers[i].y * h;
        const y2 = layers[i + 1].y * h;
        ctx.beginPath();
        ctx.moveTo(w * 0.5, y1);
        ctx.lineTo(w * 0.5, y2);
        ctx.strokeStyle = 'rgba(48, 196, 139, 0.1)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-syspilot-black pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 dot-grid opacity-10" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
              >
                About SysPilot
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Built for the next generation of{' '}
                <span className="gradient-text">enterprise operations.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-syspilot-text-secondary max-w-xl leading-relaxed"
              >
                SysPilot brings together enterprise infrastructure expertise and AI-driven innovation to help organizations move from fragmented operational processes to intelligent, governed workflows.
              </motion.p>
            </div>

            <div className="relative h-[400px] hidden lg:block">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* OS3 Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 dot-grid opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
          >
            Enterprise Technology
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Enterprise infrastructure expertise.
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading text-2xl font-semibold text-syspilot-primary mb-6"
          >
            OS3 Infotech
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-syspilot-text-secondary max-w-3xl mb-12 leading-relaxed"
          >
            OS3 brings deep expertise across enterprise infrastructure, open-source technologies and modern IT environments. Its experience across technologies such as SAP, Linux, cloud, Kubernetes, automation and enterprise infrastructure provides the foundation for building solutions designed for real-world operational environments.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              'Enterprise Infrastructure',
              'SAP & Linux',
              'Cloud & Kubernetes',
              'Automation',
              'Open Source Technologies',
              'Enterprise IT Transformation',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-4 text-sm text-syspilot-text-secondary"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://os3infotech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-syspilot-primary hover:text-syspilot-primary-dark transition-colors group"
          >
            Visit OS3 <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* EvoMind Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
          >
            AI-First Innovation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Turning enterprise technology into intelligent products.
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading text-2xl font-semibold text-syspilot-primary mb-6"
          >
            EvoMind
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-syspilot-text-secondary max-w-3xl mb-12 leading-relaxed"
          >
            EvoMind focuses on building AI-first products and cloud-native platforms that help organizations automate, optimize and operate at scale. With a focus on intelligent automation and enterprise AI, EvoMind brings product engineering and AI capabilities to the SysPilot platform.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              'Artificial Intelligence',
              'Intelligent Automation',
              'Cloud-Native Platforms',
              'Enterprise AI',
              'Product Engineering',
              'AI-Powered Operations',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-4 text-sm text-syspilot-text-secondary"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://evomind.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-syspilot-primary hover:text-syspilot-primary-dark transition-colors group"
          >
            Visit EvoMind <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* Why SysPilot */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 dot-grid opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
          >
            Why SysPilot
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Where enterprise expertise{' '}
            <span className="gradient-text">meets AI.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mb-16"
          >
            <p className="text-lg text-syspilot-text-secondary leading-relaxed mb-4">
              Enterprise IT environments have become increasingly complex.
            </p>
            <p className="text-lg text-syspilot-text-secondary leading-relaxed mb-4">
              SAP landscapes, Linux infrastructure, monitoring systems, security tools and operational processes often exist across disconnected systems and teams.
            </p>
            <p className="text-lg text-syspilot-text-secondary leading-relaxed">
              SysPilot was created to bring intelligence, context and controlled automation together across these environments.
            </p>
          </motion.div>

          {/* Flow visualization */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Complex IT Environment',
              'Fragmented Operational Data',
              'AI-Powered Understanding',
              'Governed Decision Making',
              'Controlled Action',
              'Operational Intelligence',
            ].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-4 text-center">
                  <div className="text-xs text-syspilot-primary font-medium mb-2">STEP {i + 1}</div>
                  <div className="text-xs text-syspilot-text-secondary">{step}</div>
                </div>
                {i < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-syspilot-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Positioning */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
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
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Intelligent operations,{' '}
            <span className="gradient-text">built for enterprise environments.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-syspilot-text-secondary max-w-3xl mb-16 leading-relaxed"
          >
            SysPilot connects operational visibility, AI reasoning and governed automation into a unified platform for enterprise IT operations. It is designed to help teams understand their environments, investigate operational issues, make informed decisions and execute controlled workflows — while maintaining enterprise security, governance and auditability.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'OBSERVE', desc: 'Gain unified visibility across your operational environment.' },
              { title: 'UNDERSTAND', desc: 'Correlate operational context and identify what matters.' },
              { title: 'ACT', desc: 'Execute controlled operational workflows with automation and human oversight.' },
              { title: 'GOVERN', desc: 'Maintain security, governance, auditability and operational control.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 hover:border-syspilot-primary/30 transition-all duration-300"
              >
                <h3 className="font-heading text-sm font-semibold text-syspilot-primary mb-3">{item.title}</h3>
                <p className="text-sm text-syspilot-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 dot-grid opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
          >
            The Ecosystem
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Part of a broader{' '}
            <span className="gradient-text">AI-first technology ecosystem.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: 'SysPilot', desc: 'Agentic AI for SAP & Linux Operations', tag: 'Intelligent orchestration for enterprise IT operations.' },
              { name: 'HivePlane', desc: 'Cloud & Infrastructure Operations', tag: 'Unified visibility and management across modern infrastructure environments.' },
              { name: 'KubeSage', desc: 'AI-Powered Kubernetes Operations', tag: 'Intelligent assistance for Kubernetes environments.' },
              { name: 'PromptCloud', desc: 'Enterprise AI & Prompt Engineering', tag: 'Tools and workflows for building effective enterprise AI experiences.' },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 hover:border-syspilot-primary/30 transition-all duration-300"
              >
                <h3 className="font-heading text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-syspilot-primary mb-3">{product.desc}</p>
                <p className="text-xs text-syspilot-text-secondary leading-relaxed">{product.tag}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
          >
            Built for Enterprise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12"
          >
            Enterprise technology.{' '}
            <span className="gradient-text">AI-first innovation.</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Enterprise Expertise', desc: 'Deep understanding of complex IT environments.' },
              { title: 'AI-First Engineering', desc: 'AI integrated into operational workflows.' },
              { title: 'Open Technology', desc: 'Built around modern and open technology ecosystems.' },
              { title: 'Cloud-Native', desc: 'Designed for modern infrastructure environments.' },
              { title: 'Governed Automation', desc: 'Automation with control, visibility and accountability.' },
              { title: 'Security by Design', desc: 'Enterprise security and operational governance built into the platform.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6"
              >
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-syspilot-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            See what SysPilot can do{' '}
            <span className="gradient-text">for your environment.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-syspilot-text-secondary mb-10 max-w-2xl mx-auto"
          >
            Explore how intelligent operations can fit into your existing SAP and Linux environment.
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
              to="/#platform"
              className="px-8 py-4 rounded-lg font-medium text-syspilot-text border border-syspilot-border hover:border-syspilot-primary/30 transition-colors"
            >
              Explore the Platform
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
