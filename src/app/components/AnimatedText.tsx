'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = ['Web Developer', 'UI/UX Designer', 'Full Stack Engineer'];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.08,
          color: 'var(--text-primary)',
        }}
      >
        Nihal Shafi
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <span style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          fontWeight: 400,
          color: 'var(--text-secondary)',
          letterSpacing: '-0.01em',
        }}>
          is a
        </span>

        <div style={{
          minWidth: '220px',
          height: '2rem',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
          <AnimatePresence mode="wait">
            {visible && (
              <motion.span
                key={roles[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  fontWeight: 600,
                  color: 'var(--accent-bright)',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}
              >
                {roles[index]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
