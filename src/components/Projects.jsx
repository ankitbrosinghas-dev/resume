import { Bot, ChevronDown, ChevronUp, Cpu, Film, Globe, Keyboard } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projectsData = [
    {
      title: 'Anime AI Assistant',
      icon: <Bot size={24} className="glow-text-cyan" />,
      tagline: 'AI-powered virtual companion with voice synthesis.',
      description: 'An intelligent virtual assistant designed with conversational capabilities, voice interaction, and natural language processing. It provides a customized user experience by integrating advanced conversational AI API feeds, voice synthesis, and an animated, responsive avatar interface.',
      tech: ['OpenAI APIs', 'Voice Synthesis', 'WebSockets', 'React'],
      extraDetails: 'Designed to simulate interactive companionship. Features include low-latency audio response streaming, wake-word activation, customized anime personality mapping, and a visual dashboard that syncs user emotions with audio sentiment.',
      color: 'var(--accent-cyan)'
    },
    {
      title: 'Gesture Controller',
      icon: <Cpu size={24} className="glow-text-magenta" />,
      tagline: 'Computer vision based contactless system controller.',
      description: 'A contactless system utility that leverages computer vision to interpret hand gestures. Allows users to control volume, media playback, system navigation, and cursor movements without physical contact with inputs.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'OS Automation'],
      extraDetails: 'Processes real-time webcam video feed frames at 30+ FPS. Maps coordinates of hand landmarks (fingertip ratios, palms) to system shortcuts, volume controls, and mouse clicks, implementing custom smoothing algorithms to prevent cursor jitter.',
      color: 'var(--accent-magenta)'
    },
    {
      title: 'Typooo – Typing Test Platform',
      icon: <Keyboard size={24} style={{ color: '#ff9f43' }} />,
      tagline: 'Modern speed typing analyzer with real-time stats.',
      description: 'A typing speed test web application with real-time Words Per Minute (WPM) tracking, accuracy metrics, detailed analytics, and a typing-habit feedback dashboard.',
      tech: ['React', 'JavaScript', 'CSS Modules', 'Web Vitals'],
      extraDetails: 'Features dynamic test durations, custom word banks, character-by-character visual feedback, error analysis, and storage of local attempts to graph typing speed improvement curves over time.',
      color: '#ff9f43'
    },
    {
      title: 'Video Editing Projects',
      icon: <Film size={24} style={{ color: '#9b5de5' }} />,
      tagline: 'Visual storytelling and short-form content creation.',
      description: 'Created, conceptualized, and edited digital videos for social platforms and brand promotions, utilizing pacing, sound design, and color-correction techniques.',
      tech: ['Adobe Premiere Pro', 'CapCut', 'After Effects', 'Audio Design'],
      extraDetails: 'Produced a portfolio of high-engagement video assets. Specializes in advanced keyframe animations, audio noise reduction, synced transitions, subtitles automation, and visual effects optimizations.',
      color: '#9b5de5'
    },
    {
      title: 'Web Development Projects',
      icon: <Globe size={24} style={{ color: '#0984e3' }} />,
      tagline: 'High-performance websites and interactive applications.',
      description: 'Developed and published multiple web applications, responsive landing pages, and interactive UI packages built on solid architectural principles.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Vite'],
      extraDetails: 'Emphasizes mobile-first layout designs, pixel-perfect UI execution, semantic markup, asset minification, clean git structures, and automated deployment integrations like Vercel and Netlify.',
      color: '#0984e3'
    }
  ];

  const handleCardClick = index => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginTop: '20px'
        }}
      >
        {projectsData.map((project, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className="glass-panel"
              onClick={() => handleCardClick(index)}
              style={{
                cursor: 'pointer',
                padding: '28px',
                background: 'rgba(8, 8, 16, 0.45)',
                border: isExpanded ? `1px solid ${project.color}` : '1px solid rgba(255, 255, 255, 0.04)',
                boxShadow: isExpanded ? `0 10px 30px ${project.color}15` : 'none',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
              }}
            >
              {/* Header Grid */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      padding: '12px',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-tech)',
                        fontSize: '1.25rem',
                        color: 'var(--text-primary)',
                        marginBottom: '4px'
                      }}
                    >
                      {project.title}
                    </h3>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{project.tagline}</div>
                  </div>
                </div>

                {/* Tech tags and Arrow */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    className="tech-tags-container"
                    style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap'
                    }}
                  >
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-tech)',
                          background: 'rgba(255,255,255,0.02)',
                          color: 'var(--text-muted)',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          border: '1px solid rgba(255,255,255,0.05)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-tech)',
                          background: 'rgba(255,255,255,0.02)',
                          color: 'var(--accent-cyan)',
                          padding: '4px 8px',
                          borderRadius: '4px'
                        }}
                      >
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp size={20} style={{ color: project.color }} />
                    ) : (
                      <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />
                    )}
                  </div>
                </div>
              </div>

              {/* Collapsible details */}
              {isExpanded && (
                <div
                  style={{
                    marginTop: '24px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    animation: 'slideDown 0.3s ease'
                  }}
                  onClick={e => e.stopPropagation()} // Prevent closing when clicking inner details
                >
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.01)',
                      borderLeft: `3px solid ${project.color}`,
                      padding: '16px',
                      borderRadius: '0 8px 8px 0',
                      marginBottom: '20px'
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.8rem',
                        color: project.color,
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold'
                      }}
                    >
                      Technical Deep Dive
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {project.extraDetails}
                    </div>
                  </div>

                  {/* All tech tags inside expanded panel */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-tech)',
                          background: 'rgba(255, 255, 255, 0.03)',
                          color: 'var(--text-primary)',
                          padding: '4px 12px',
                          borderRadius: '4px',
                          border: `1px solid ${project.color}22`
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .tech-tags-container {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
