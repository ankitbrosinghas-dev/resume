import { Award, Code, Compass, Hammer, Sparkles, Terminal } from 'lucide-react';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'ai',
      title: 'AI & Automation',
      icon: <Sparkles size={20} className="glow-text-cyan" />,
      color: 'var(--accent-cyan)',
      skills: [
        { name: 'AI-Assisted Development', level: 95 },
        { name: 'Prompt Engineering', level: 90 },
        { name: 'Automation Systems', level: 85 },
        { name: 'API Integration', level: 80 }
      ]
    },
    {
      id: 'web',
      title: 'Frontend & Web',
      icon: <Code size={20} className="glow-text-magenta" />,
      color: 'var(--accent-magenta)',
      skills: [
        { name: 'Web Development', level: 90 },
        { name: 'Frontend Development', level: 85 },
        { name: 'Responsive UI Design', level: 90 },
        { name: 'Git & GitHub', level: 80 }
      ]
    },
    {
      id: 'creative',
      title: 'Creative Media',
      icon: <Compass size={20} style={{ color: '#ff9f43' }} />,
      color: '#ff9f43',
      skills: [
        { name: 'Figma (UI/UX)', level: 80 },
        { name: 'Adobe Premiere Pro', level: 75 },
        { name: 'CapCut', level: 85 },
        { name: 'Blender (Basic)', level: 60 }
      ]
    }
  ];

  const allTools = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Python',
    'GitHub',
    'VS Code',
    'Blender',
    'Figma',
    'Premiere Pro',
    'CapCut',
    'AI Development Tools'
  ];

  return (
    <section id="skills">
      <h2>Skills & Toolkit</h2>

      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}
      >
        <button
          onClick={() => setActiveCategory('all')}
          className="btn"
          style={{
            padding: '8px 20px',
            fontSize: '0.8rem',
            background: activeCategory === 'all' ? 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-blue) 100%)' : 'rgba(255, 255, 255, 0.02)',
            color: activeCategory === 'all' ? '#000' : 'var(--text-secondary)',
            border: activeCategory === 'all' ? 'none' : '1px solid var(--border-light)'
          }}
        >
          All Domains
        </button>
        {skillCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="btn"
            style={{
              padding: '8px 20px',
              fontSize: '0.8rem',
              background: activeCategory === cat.id ? 'rgba(255,255,255,0.08)' : 'rgba(255, 255, 255, 0.02)',
              color: 'var(--text-primary)',
              border: activeCategory === cat.id ? `1px solid ${cat.color}` : '1px solid var(--border-light)',
              boxShadow: activeCategory === cat.id ? `0 0 10px ${cat.color}22` : 'none'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {cat.icon}
              {cat.title}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}
      >
        {skillCategories
          .filter(cat => activeCategory === 'all' || activeCategory === cat.id)
          .map(cat => (
            <div
              key={cat.id}
              className="glass-panel"
              style={{
                padding: '30px',
                background: 'rgba(8, 8, 16, 0.5)',
                border: `1px solid ${cat.color}15`
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '28px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingBottom: '14px'
                }}
              >
                {cat.icon}
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontFamily: 'var(--font-tech)' }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {cat.skills.map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: cat.color,
                        boxShadow: `0 0 8px ${cat.color}`
                      }}
                    />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Tech Toolkit Console */}
      <div
        className="glass-panel"
        style={{
          padding: '36px',
          background: 'rgba(5, 5, 8, 0.7)',
          border: '1px solid rgba(255,255,255,0.03)'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '24px'
          }}
        >
          <Terminal size={18} className="glow-text-cyan" />
          <span
            style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              letterSpacing: '2px'
            }}
          >
            SYSTEM.CORE_TOOLKIT // STACK
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center'
          }}
        >
          {allTools.map((tool, index) => (
            <div
              key={index}
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                padding: '10px 18px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.2s ease',
                cursor: 'default',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 242, 254, 0.15)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: index % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-magenta)'
                }}
              />
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
