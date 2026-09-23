import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Lock, Eye, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const headlineWords1 = ['Intelligent', 'Operations'];
const headlineWords2 = ['for', 'Enterprise', 'Infrastructure'];

const trustBadges = [
  { icon: Shield, label: 'Enterprise Security' },
  { icon: Lock, label: 'Governed Automation' },
  { icon: Eye, label: 'Full Observability' },
  { icon: FileCheck, label: 'Audit-Grade Logs' },
];

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    // Connected nodes
    const nodes = Array.from({ length: 5 }, (_, i) => ({
      x: canvas.offsetWidth / 2 + Math.cos((i / 5) * Math.PI * 2) * 100,
      y: canvas.offsetHeight / 2 + Math.sin((i / 5) * Math.PI * 2) * 80,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(48, 196, 139, ${p.alpha})`;
        ctx.fill();
      });

      // Draw central glow
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120);
      gradient.addColorStop(0, 'rgba(48, 196, 139, 0.08)');
      gradient.addColorStop(0.5, 'rgba(74, 158, 255, 0.03)');
      gradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, 120, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw connected nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < cx - 150 || node.x > cx + 150) node.vx *= -1;
        if (node.y < cy - 120 || node.y > cy + 120) node.vy *= -1;

        // Connect to center
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = 'rgba(48, 196, 139, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Connect to adjacent nodes
        const nextNode = nodes[(i + 1) % nodes.length];
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(nextNode.x, nextNode.y);
        ctx.strokeStyle = 'rgba(74, 158, 255, 0.08)';
        ctx.stroke();

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(48, 196, 139, 0.6)';
        ctx.fill();
      });

      // Mouse interaction
      if (mouseX > 0 && mouseY > 0) {
        const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 60);
        mouseGlow.addColorStop(0, 'rgba(48, 196, 139, 0.05)');
        mouseGlow.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 60, 0, Math.PI * 2);
        ctx.fillStyle = mouseGlow;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-syspilot-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 dot-grid opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="z-10">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {headlineWords1.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 100 }}
                    className={word === 'Intelligent' ? 'gradient-text' : ''}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                {headlineWords2.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 100 }}
                    className={word === 'Enterprise' ? 'gradient-text' : ''}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-lg text-syspilot-text-secondary max-w-xl mb-8 leading-relaxed"
            >
              SysPilot brings together enterprise infrastructure expertise and AI-driven innovation to help organizations move from fragmented operational processes to intelligent, governed workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                to="#demo"
                className="group relative px-6 py-3 rounded-lg font-medium text-syspilot-black bg-syspilot-primary hover:bg-syspilot-primary-dark transition-colors flex items-center gap-2"
              >
                Request a Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/company"
                className="px-6 py-3 rounded-lg font-medium text-syspilot-text border border-syspilot-border hover:border-syspilot-primary/30 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                  className="flex items-center gap-1.5 text-xs text-syspilot-muted"
                >
                  <badge.icon size={14} className="text-syspilot-primary" />
                  <span>{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Canvas animation */}
          <div className="relative h-[400px] lg:h-[500px] hidden lg:block">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={24} className="text-syspilot-muted subtle-pulse" />
        </motion.div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="relative py-24 lg:py-32">
        <div className="absolute inset-0 dot-grid opacity-10" />
        
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
            Intelligent operations,{' '}
            <span className="gradient-text">built for enterprise.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-syspilot-text-secondary max-w-3xl mb-16 leading-relaxed"
          >
            SysPilot connects operational visibility, AI reasoning and governed automation into a unified platform for enterprise IT operations.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'OBSERVE', desc: 'Gain unified visibility across your operational environment.' },
              { title: 'UNDERSTAND', desc: 'Correlate operational context and identify what matters.' },
              { title: 'ACT', desc: 'Execute controlled workflows with automation and human oversight.' },
              { title: 'GOVERN', desc: 'Maintain security, governance, auditability and control.' },
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

      {/* Solutions Section */}
      <section id="solutions" className="relative py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
          >
            Solutions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            Purpose-built for{' '}
            <span className="gradient-text">complex environments.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-syspilot-text-secondary max-w-3xl mb-16 leading-relaxed"
          >
            From SAP landscapes to Linux infrastructure, SysPilot provides intelligent automation designed for the complexity of enterprise IT.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'SAP Operations', desc: 'Intelligent orchestration for SAP HANA landscapes, from monitoring to compliance.' },
              { title: 'Linux Infrastructure', desc: 'Automated management for Linux environments with enterprise-grade governance.' },
              { title: 'Incident Response', desc: 'AI-powered investigation and root cause analysis for faster resolution.' },
              { title: 'Compliance & Security', desc: 'Continuous monitoring and automated reporting for enterprise compliance.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 hover:border-syspilot-primary/30 transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-syspilot-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section id="enterprise" className="relative py-24 lg:py-32">
        <div className="absolute inset-0 dot-grid opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-medium uppercase tracking-widest text-syspilot-primary mb-4"
          >
            Enterprise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            Built for{' '}
            <span className="gradient-text">enterprise requirements.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-syspilot-text-secondary max-w-3xl mb-16 leading-relaxed"
          >
            SysPilot is designed from the ground up for enterprise environments, with security, governance, and auditability at its core.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Security by Design', desc: 'Enterprise security and operational governance built into every layer.' },
              { title: 'Governed Automation', desc: 'Automation with control, visibility and accountability.' },
              { title: 'Audit-Grade Logs', desc: 'Immutable audit trails for every action and decision.' },
              { title: 'Human Oversight', desc: 'Human-in-the-loop control for all critical operations.' },
              { title: 'Role-Based Access', desc: 'Granular permissions and policy enforcement.' },
              { title: 'Compliance Ready', desc: 'Designed to support enterprise compliance requirements.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 hover:border-syspilot-primary/30 transition-all duration-300"
              >
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-syspilot-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="relative py-24 lg:py-32">
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
              to="#demo"
              className="group px-8 py-4 rounded-lg font-medium text-syspilot-black bg-syspilot-primary hover:bg-syspilot-primary-dark transition-colors flex items-center gap-2"
            >
              Request a Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/company"
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
