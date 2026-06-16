import { Check, Clipboard, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = 'ankitbrosinghas@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      style={{
        background: 'linear-gradient(to top, #010103 0%, rgba(2, 2, 5, 0.8) 100%)',
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '80px 24px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h2 style={{ marginBottom: '16px' }}>Get In Touch</h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            textAlign: 'center',
            maxWidth: '500px',
            marginBottom: '40px',
            fontSize: '1.05rem'
          }}
        >
          Have an idea or project you want to build? Let's connect and design something amazing together.
        </p>

        {/* Contact Glass Panel */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '550px',
            width: '100%',
            padding: '36px',
            textAlign: 'center',
            background: 'rgba(8, 8, 16, 0.6)',
            border: '1px solid rgba(255,255,255,0.04)',
            marginBottom: '50px'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              padding: '16px',
              background: 'rgba(0, 242, 254, 0.05)',
              borderRadius: '50%',
              color: 'var(--accent-cyan)',
              marginBottom: '20px',
              border: '1px solid rgba(0, 242, 254, 0.1)'
            }}
          >
            <Mail size={32} />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '1.25rem',
              color: 'var(--text-primary)',
              marginBottom: '12px',
              letterSpacing: '1px'
            }}
          >
            EMAIL ADDRESS
          </h3>

          {/* Email Address Display */}
          <div
            style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              marginBottom: '28px',
              wordBreak: 'break-all'
            }}
          >
            {email}
          </div>

          {/* Action Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}
          >
            {/* Mailto Link */}
            <a href={`mailto:${email}`} className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
              <Send size={16} />
              Send Email
            </a>

            {/* Copy Button */}
            <button
              onClick={copyToClipboard}
              className="btn btn-secondary"
              style={{
                padding: '10px 24px',
                fontSize: '0.85rem',
                cursor: 'pointer',
                borderColor: copied ? 'var(--accent-cyan)' : 'var(--border-light)'
              }}
            >
              {copied ? (
                <>
                  <Check size={16} style={{ color: 'var(--accent-cyan)' }} />
                  <span style={{ color: 'var(--accent-cyan)' }}>Copied!</span>
                </>
              ) : (
                <>
                  <Clipboard size={16} />
                  Copy Email
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social Link Badge */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-secondary)',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--accent-cyan)';
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>

        {/* Bottom copyright details */}
        <div
          style={{
            fontFamily: 'var(--font-tech)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
          © 2026 ANKIT SINGH. ALL RIGHTS RESERVED.
          <div style={{ marginTop: '6px', fontSize: '0.65rem' }}>
            Built with React, Three.js & AI Assistance.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
