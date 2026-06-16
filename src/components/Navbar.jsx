import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: scrolled ? '12px 24px' : '20px 24px',
        background: scrolled ? 'rgba(5, 5, 12, 0.8)' : 'rgba(5, 5, 12, 0.3)',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(4px)',
        borderBottom: scrolled ? '1px solid rgba(0, 242, 254, 0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform var(--transition-fast)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'none';
          }}
        >
          <img
            src="/logo.png"
            alt="Ankit Singh Logo"
            style={{
              height: '42px',
              width: 'auto',
              display: 'block',
              mixBlendMode: 'screen'
            }}
          />
        </a>

        {/* Desktop Links */}
        <div
          className="desktop-menu"
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.85rem',
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'color var(--transition-fast)',
                fontWeight: 600
              }}
              onMouseEnter={e => {
                e.target.style.color = 'var(--accent-cyan)';
                e.target.style.textShadow = '0 0 8px rgba(0, 242, 254, 0.5)';
              }}
              onMouseLeave={e => {
                e.target.style.color = 'var(--text-secondary)';
                e.target.style.textShadow = 'none';
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links Dropdown */}
      {isOpen && (
        <div
          className="mobile-dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'rgba(7, 7, 15, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-light)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
            zIndex: 999
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '1rem',
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.03)'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Inline styles for responsive rules */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
