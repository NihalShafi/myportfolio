'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '2rem clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>NS</span>
        <span style={{ color: 'var(--border)' }}>·</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Nihal Shafi
        </span>
      </div>
      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        Built with Next.js & Framer Motion
      </span>
    </motion.footer>
  );
}
