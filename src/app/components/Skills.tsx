'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { category: 'Frontend', icon: '⚡', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', icon: '🔧', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
  { category: 'Tools', icon: '🛠', items: ['Git', 'Figma', 'VS Code', 'Vercel'] },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" ref={ref} style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 5rem)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
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
            — Expertise
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginTop: '0.5rem',
          }}>
            My Skills
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '1.75rem',
                cursor: 'default',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{skill.icon}</div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}>
                {skill.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skill.items.map((item) => (
                  <span key={item} style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontWeight: 500,
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
