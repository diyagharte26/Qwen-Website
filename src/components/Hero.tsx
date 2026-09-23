import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Lock, Eye, FileCheck, Users } from 'lucide-react';

const headlineWords1 = ['The', 'Autonomous', 'AI', 'Platform'];
const headlineWords2 = ['for', 'SAP', 'Infrastructure'];

const trustBadges = [
  { icon: Shield, label: 'HIPAA-Aligned' },
  { icon: Lock, label: 'CIS Controls Compliant' },
  { icon: Users, label: 'RBAC-Gated' },
  { icon: FileCheck, label: 'Audit-Grade Logs' },
  { icon: Eye, label: 'Human-in-the-Loop' },
];

const agentNodes = ['ORCA', 'KARMA', 'GAUGE', 'ATLAS', 'ANCHOR'];

export default function Hero() {
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

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const nodes = agentNodes.map((name, i) => ({
      name,
      angle: (i / agentNodes.length) * Math.PI * 2,
      radius: 120 + Math.random() * 30,
      speed: 0.003 + Math.random() * 0.002,
      size: 6,
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

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(61, 111, 255, ${p.alpha})`;
        ctx.fill();
      });

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 100);
      gradient.addColorStop(0, 'rgba(61, 111, 255, 0.15)');
      gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.05)');
      gradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, 100, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      const orbGradient = ctx.createRadialGradient(cx - 10, cy - 10, 0, cx, cy, 40);
      orbGradient.addColorStop(0, 'rgba(61, 111, 255, 0.4)');
      orbGradient.addColorStop(0.7, 'rgba(15, 17, 23, 0.9)');
      orbGradient.addColorStop(1, 'rgba(15, 17, 23, 1)');
      ctx.beginPath();
      ctx.arc(cx, cy, 40, 0, Math.PI * 2);
      ctx.fillStyle = orbGradient;
      ctx.fill();
      ctx.strokeStyle = 'rgba(61, 111, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      nodes.forEach((node) => {
        node.angle += node.speed;
        const nx = cx + Math.cos(node.angle) * node.radius;
        const ny = cy + Math.sin(node.angle) * node.radius * 0.6;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = 'rgba(61, 111, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();

        const nodeGlow = ctx.createRadialGradient(nx, ny, 0, nx, ny, 15);
        nodeGlow.addColorStop(0, 'rgba(0, 212, 255, 0.4)');
        nodeGlow.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(nx, ny, 15, 0, Math.PI * 2);
        ctx.fillStyle = nodeGlow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
        ctx.fillStyle = '#00D4FF';
        ctx.fill();

        ctx.font = '10px Inter';
        ctx.fillStyle = 'rgba(232, 236, 244, 0.7)';
        ctx.textAlign = 'center';
        ctx.fillText(node.name, nx, ny - 14);
      });

      if (mouseX > 0 && mouseY > 0) {
        const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 80);
        mouseGlow.addColorStop(0, 'rgba(61, 111, 255, 0.08)');
        mouseGlow.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 80, 0, Math.PI * 2);
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6">
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {headlineWords1.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 100 }}
                  className={word === 'AI' || word === 'Autonomous' ? 'gradient-text' : ''}
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
                  className={word === 'SAP' ? 'gradient-text' : ''}
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
            className="text-lg text-syspilot-muted max-w-xl mb-8 leading-relaxed"
          >
            SysPilot deploys a team of AI agents that continuously monitor, investigate, patch, and report across your entire SAP HANA landscape — so your engineers focus on decisions, not data collection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="#demo"
              className="group relative px-6 py-3 rounded-lg font-medium text-white overflow-hidden flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-syspilot-primary to-syspilot-cyan" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-syspilot-cyan to-syspilot-primary" />
              <span className="relative flex items-center gap-2">
                Book a Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#platform"
              className="px-6 py-3 rounded-lg font-medium text-syspilot-text border border-syspilot-border hover:border-syspilot-primary/50 transition-colors flex items-center gap-2"
            >
              See How It Works <ChevronDown size={16} className="bounce-slow" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap gap-4 mb-8"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap gap-6 p-4 rounded-xl border border-syspilot-border bg-syspilot-surface/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold gradient-text">47→12</span>
              <span className="text-xs text-syspilot-muted leading-tight">min<br/>MTTR</span>
            </div>
            <div className="w-px h-8 bg-syspilot-border" />
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-syspilot-green">90s</span>
              <span className="text-xs text-syspilot-muted leading-tight">Full fleet<br/>CVE scan</span>
            </div>
            <div className="w-px h-8 bg-syspilot-border" />
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-syspilot-cyan">100%</span>
              <span className="text-xs text-syspilot-muted leading-tight">Human<br/>approval gated</span>
            </div>
            <div className="w-px h-8 bg-syspilot-border hidden sm:block" />
            <div className="items-center gap-2 hidden sm:flex">
              <span className="font-heading text-2xl font-bold text-syspilot-amber">3×</span>
              <span className="text-xs text-syspilot-muted leading-tight">Engineer<br/>productivity</span>
            </div>
          </motion.div>
        </div>

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
        <ChevronDown size={24} className="text-syspilot-muted bounce-slow" />
      </motion.div>
    </section>
  );
}
