'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio built with Next.js and Framer Motion, featuring smooth animations and dark aesthetic.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    emoji: '🌐',
  },
  // {
  //   title: 'Mobile App',
  //   description: 'Cross-platform mobile application built with React Native and Expo for iOS and Android.',
  //   tags: ['React Native', 'Expo', 'Redux'],
  //   emoji: '📱',
  // },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payments, and admin dashboard.',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    emoji: '🛒',
  },
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="work" ref={ref} style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 5rem)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <span style={{
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            — Portfolio
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginTop: '0.5rem',
          }}>
            Selected Work
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              {/* Card image area */}
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, rgba(60,60,80,0.5) 0%, rgba(30,30,40,0.8) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.5rem',
                borderBottom: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                  opacity: 0.4,
                }} />
                <span style={{ position: 'relative', zIndex: 1 }}>{project.emoji}</span>
              </div>

              {/* Card content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.6rem',
                  letterSpacing: '-0.02em',
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1rem',
                }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '4px',
                      padding: '3px 8px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Show More Card */}
          <motion.a
            href="/projects"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: projects.length * 0.12 }}
            whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.03)' }}
            style={{
              background: 'var(--bg-card)',
              border: '1px dashed var(--border)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'pointer',
              textDecoration: 'none',
              minHeight: '340px',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'var(--accent-bright)',
              color: 'var(--bg-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Show More
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
              View all 5+ projects
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
