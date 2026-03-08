'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const allProjects = [
  {
    title: 'Modern Portfolio Platform',
    category: 'Web Development',
    description: 'A dark-themed, ultra-responsive portfolio platform built with Next.js 15, Framer Motion, and Tailwind CSS.',
    image: '/project1.png',
    link: '#',
    year: '2026',
  },
  {
    title: 'Fintech Mobile App',
    category: 'Mobile Application',
    description: 'Cross-platform banking application built with React Native and Redux with deep biometric integrations.',
    image: '/project2.png',
    link: '#',
    year: '2025',
  },
  {
    title: 'E-Commerce Dashboard',
    category: 'SaaS Dashboard',
    description: 'Comprehensive analytics dashboard providing real-time sales metrics and inventory management.',
    image: '/project1.png',
    link: '#',
    year: '2025',
  },
  {
    title: 'Crypto Wallet UI',
    category: 'UI/UX Design',
    description: 'Sleek, glassmorphic crypto wallet interface focusing on security and seamless transaction flows.',
    image: '/project2.png',
    link: '#',
    year: '2024',
  },
  {
    title: 'Social Media Engine',
    category: 'Full Stack',
    description: 'High-performance social media backend with real-time websocket chat and Go-powered microservices.',
    image: '/project1.png',
    link: '#',
    year: '2024',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function ProjectsPage() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 5rem) 4rem',
      position: 'relative',
    }}>
      {/* Background glow base */}
      <div style={{
        position: 'fixed',
        top: '-10%',
        left: '20%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(130,130,160,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: -1,
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}
        >
          <div>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Home
            </Link>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              lineHeight: 1.1,
            }}>
              All Projects
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              marginTop: '1rem',
              fontSize: '1.1rem',
              maxWidth: '500px',
            }}>
              A complete archive of things I&apos;ve built, designed, and launched over the years.
            </p>
          </div>
        </motion.div>

        {/* Project List */}
        <motion.div
          className="project-list-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {allProjects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'relative',
                display: 'flex',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                minHeight: '180px',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                const img = e.currentTarget.querySelector('.project-img') as HTMLElement;
                if (img) img.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                const img = e.currentTarget.querySelector('.project-img') as HTMLElement;
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              {/* Left Content Area */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                width: '60%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.75rem',
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{project.year}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--border)' }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-bright)', fontWeight: 600 }}>{project.category}</span>
                </div>
                <h2 style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}>
                  {project.title}
                </h2>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  maxWidth: '90%',
                }}>
                  {project.description}
                </p>
              </div>

              {/* Right Image Area with Fade */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '65%',
                zIndex: 1,
                overflow: 'hidden',
                /* The magic fade mask */
                maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)',
              }}>
                <div
                  className="project-img"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      opacity: 0.6,
                    }}
                  />
                  {/* Subtle noise overlay specifically for the image to blend it with our theme */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    opacity: 0.2,
                    mixBlendMode: 'overlay',
                  }} />
                </div>
              </div>

              {/* Mobile overlay for small screens to ensure text is readable */}
              <style>{`
                @media (max-width: 768px) {
                  .project-list-wrapper > a > div:first-child { width: 100% !important; }
                  .project-list-wrapper > a > div:last-child { 
                    width: 100% !important; 
                    mask-image: linear-gradient(to right, transparent 0%, black 100%) !important;
                    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 100%) !important;
                  }
                  .project-list-wrapper > a > div:last-child img { opacity: 0.15 !important; }
                }
              `}</style>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
