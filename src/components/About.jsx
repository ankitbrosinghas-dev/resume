import { Cpu, Eye, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const coreStrengths = [
    {
      icon: <Cpu size={24} className="glow-text-cyan" />,
      title: 'AI Synthesis',
      description: 'Leveraging cutting-edge AI models and prompt engineering to accelerate development workflows and integrate intelligent features.'
    },
    {
      icon: <Zap size={24} className="glow-text-magenta" />,
      title: 'Rapid Prototyping',
      description: 'Turning conceptual ideas into working applications and automation flows with speed and agility.'
    },
    {
      icon: <Lightbulb size={24} style={{ color: '#ff9f43' }} />,
      title: 'Creative Building',
      description: 'Combining standard frontend development with design principles, 3D assets (Blender), and custom assets.'
    },
    {
      icon: <Eye size={24} style={{ color: '#0984e3' }} />,
      title: 'Practical Focus',
      description: 'Focusing on building functional, real-world utility projects rather than just theoretical coding.'
    }
  ];

  return (
    <section id="about">
      <h2>About Me</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          alignItems: 'start',
          marginTop: '20px'
        }}
        className="about-grid"
      >
        {/* Narrative Card */}
        <div
          className="glass-panel"
          style={{
            padding: '36px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            background: 'rgba(10, 10, 20, 0.55)'
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '1.4rem',
              color: 'var(--accent-cyan)',
              marginBottom: '20px'
            }}
          >
            THE CREATIVE CODE LAB
          </h3>

          <p style={{ marginBottom: '20px', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            I enjoy building innovative projects by combining AI, web development, automation, and design.
            I believe that coding is a creative superpower when combined with modern intelligence tools.
          </p>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            I may not be an expert in every programming language, but I have successfully developed multiple
            real-world projects by leveraging modern AI tools, deep research, and continuous learning. My motto is to
            <strong> Build, Learn, Innovate, and Repeat</strong>.
          </p>

          {/* Quick Metrics Bar */}
          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              justifyContent: 'space-around',
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.03)'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.8rem', color: 'var(--accent-cyan)', fontWeight: 'bold' }}>5+</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>Core Projects</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.8rem', color: 'var(--accent-magenta)', fontWeight: 'bold' }}>10+</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>Tools Mastered</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.8rem', color: '#ff9f43', fontWeight: 'bold' }}>100%</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>AI-Driven</div>
            </div>
          </div>
        </div>

        {/* Strength Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {coreStrengths.map((strength, index) => (
            <div
              key={index}
              className="glass-panel strength-card"
              style={{
                display: 'flex',
                gap: '20px',
                padding: '24px',
                alignItems: 'flex-start',
                background: 'rgba(7, 7, 15, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.03)'
              }}
            >
              <div
                style={{
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {strength.icon}
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-tech)',
                    fontSize: '1.05rem',
                    color: 'var(--text-primary)',
                    marginBottom: '6px'
                  }}
                >
                  {strength.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
