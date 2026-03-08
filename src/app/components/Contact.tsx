'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" ref={ref} style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 5rem)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: 'clamp(2.5rem, 6vw, 5rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '200px',
            background: 'radial-gradient(ellipse, rgba(160,160,200,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <span style={{
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            — Let&apos;s talk
          </span>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            margin: '1rem 0',
            lineHeight: 1.1,
          }}>
            Ready to build<br />something great?
          </h2>

          <p style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '420px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            I&apos;m currently open to opportunities. Whether it&apos;s a project,
            freelance work, or a full-time role — let&apos;s chat.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:nihal@example.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.85rem 2rem',
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Send an Email
            </a>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { label: 'GitHub', icon: '⌘', href: '#' },
                { label: 'LinkedIn', icon: 'in', href: '#' },
                { label: 'Twitter', icon: '𝕏', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  style={{
                    width: '46px',
                    height: '46px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
