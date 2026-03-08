'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
    if (latest > 40 && menuOpen) setMenuOpen(false);
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 clamp(1.25rem, 5vw, 4rem)',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
          background: scrolled || menuOpen
            ? 'rgba(17, 17, 19, 0.92)'
            : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
          borderBottom: scrolled || menuOpen
            ? '1px solid var(--border)'
            : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a href="#" style={{
          fontSize: '1.1rem',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          textDecoration: 'none',
          zIndex: 101,
        }}>
          NS
        </a>

        {/* Desktop nav links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--bg-primary)',
              background: 'var(--accent-bright)',
              padding: '0.45rem 1.1rem',
              borderRadius: '6px',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            zIndex: 101,
          }}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{ display: 'block', width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', transformOrigin: 'center' }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'block', width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px' }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{ display: 'block', width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', transformOrigin: 'center' }}
          />
        </button>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(17,17,19,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '1.5rem clamp(1.25rem, 5vw, 4rem) 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.25 }}
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  letterSpacing: '-0.03em',
                  padding: '0.65rem 0',
                  borderBottom: '1px solid var(--border)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={closeMenu}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.25 }}
              style={{
                marginTop: '1rem',
                display: 'inline-flex',
                justifyContent: 'center',
                padding: '0.85rem 2rem',
                background: 'var(--accent-bright)',
                color: 'var(--bg-primary)',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
