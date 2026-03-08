'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedText from './AnimatedText';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 clamp(1.5rem, 5vw, 5rem)',
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Ambient glow blobs */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(130,130,160,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100,100,130,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }} />
      </div>

      {/* Main content grid */}
      <div
        className="hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 5vw, 6rem)',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          paddingTop: '64px',
        }}
      >
        {/* Left: Text content */}
        <div className="hero-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border)',
              borderRadius: '100px',
              padding: '6px 14px',
              width: 'fit-content',
            }}
          >
            <span style={{
              width: '7px', height: '7px',
              borderRadius: '50%',
              background: '#6ee7a0',
              display: 'block',
              boxShadow: '0 0 8px #6ee7a0',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
              Available for work
            </span>
          </motion.div>

          {/* Animated heading */}
          <AnimatedText />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              maxWidth: '420px',
              letterSpacing: '-0.01em',
            }}
          >
            I craft seamless digital experiences — building blazing-fast web apps
            and stunning interfaces that leave a lasting impression. Let&apos;s build something extraordinary together.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href="#work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.75rem 1.75rem',
                background: 'var(--accent-bright)',
                color: 'var(--bg-primary)',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                transition: 'transform 0.2s, opacity 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}
            >
              View My Work
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M8.5 4L12 7.5 8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.75rem',
                background: 'transparent',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '0.9rem',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{
              display: 'flex',
              gap: '2rem',
              paddingTop: '0.5rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            {[
              { value: '3+', label: 'Years Exp.' },
              { value: '20+', label: 'Projects Done' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>{stat.value}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Profile image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Outer glow ring */}
          <div style={{
            position: 'absolute',
            inset: '-20px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(160,160,200,0.12) 0%, transparent 70%)',
            animation: 'spin 20s linear infinite',
          }} />

          {/* Dashed ring */}
          <div style={{
            position: 'absolute',
            inset: '-10px',
            borderRadius: '50%',
            border: '1px dashed rgba(255,255,255,0.07)',
            animation: 'spin 25s linear infinite reverse',
          }} />

          {/* Image container */}
          <div
            style={{
              width: 'clamp(260px, 35vw, 420px)',
              height: 'clamp(260px, 35vw, 420px)',
              borderRadius: '50%',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid var(--border)',
              background: 'var(--bg-card)',
              boxShadow: '0 0 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)',
            }}
          >
            <Image
              src="/profilenihal.png"
              alt="Nihal Shafi"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />

            {/* Inner gradient overlay for depth */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, rgba(17,17,19,0.4) 100%)',
            }} />
          </div>

          {/* Floating badge: Web */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: '14%',
              left: '-5%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '10px 16px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.2rem' }}>🌐</span>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>Web Dev</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>React · Next.js</div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            display: flex !important;
            flex-direction: column-reverse;
            padding-top: 32px !important;
            gap: 3rem !important;
            text-align: center;
          }
          .hero-text {
            align-items: center;
          }
          .hero-text p {
            margin: 0 auto;
          }
          .hero-text > div:last-child {
            justify-content: center;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #6ee7a0; }
          50% { opacity: 0.6; box-shadow: 0 0 14px #6ee7a0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
