import { ArrowDown } from 'lucide-react';
import GlitchText from './GlitchText';
import ScrollVelocity from './ScrollVelocity';
import TextPressure from './TextPressure';

const Hero = () => {

  return (
    <div
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'transparent'
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(2, 2, 5, 0.2) 0%, rgba(2, 2, 5, 0.75) 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Hero Content Container */}
      <div
        className="glass-panel"
        style={{
          zIndex: 2,
          padding: '48px 40px',
          maxWidth: '800px',
          width: '90%',
          textAlign: 'center',
          border: 'none',
          background: 'transparent',
          boxShadow: 'none',
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-tech)',
            color: 'var(--accent-cyan)',
            fontSize: '0.85rem',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '16px'
          }}
        >
          // PORTFOLIO.SYSTEM.INIT
        </span>

        <div style={{ marginBottom: '8px' }}>
          <GlitchText
            speed={0.8}
            enableShadows={true}
            enableOnHover={false}
          >
            ANKIT SINGH
          </GlitchText>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-tech)',
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '24px',
            fontWeight: 500
          }}
        >
          ( CIJO CHACKO )
        </div>

        {/* Subheading with Text Pressure */}
        <div style={{ position: 'relative', height: '60px', width: '100%', maxWidth: '420px', margin: '0 auto 24px' }}>
          <TextPressure
            text="I am an AI Developer"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="var(--accent-cyan)"
            minFontSize={20}
          />
        </div>

        {/* Description with Scroll Velocity */}
        <div style={{ margin: '0 auto 32px', width: '100%', overflow: 'hidden' }}>
          <ScrollVelocity
            texts={[
              "Passionate developer who builds practical projects using AI tools, modern web technologies, and creative problem-solving.",
              "Experienced in turning ideas into working applications, websites, and automation systems."
            ]}
            velocity={20}
            numCopies={3}
            className="velocity-desc"
          />
        </div>

        {/* Motto Display */}
        <div
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '30px',
            border: '1px dashed rgba(255, 255, 255, 0.1)',
            marginBottom: '40px'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '0.9rem',
              color: 'var(--text-muted)'
            }}
          >
            MOTTO: <span style={{ color: 'var(--accent-magenta)', fontStyle: 'italic' }}>"Build. Learn. Innovate. Repeat."</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px'
          }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>

        {/* Click and Hold Prompt */}
        <div
          style={{
            marginTop: '32px',
            fontFamily: 'var(--font-tech)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '1.5px',
            animation: 'pulse-glow 2.5s infinite',
            textTransform: 'uppercase'
          }}
        >
          [ CLICK & HOLD ANYWHERE TO SPEED UP HYPERSPEED ]
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: '30px',
          zIndex: 2,
          color: 'var(--text-secondary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-tech)'
        }}
      >
        <span>SCROLL DOWN</span>
        <ArrowDown
          size={16}
          style={{
            animation: 'bounce 2s infinite'
          }}
        />
      </a>

      {/* Blinking typing cursor animation & bounce */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
