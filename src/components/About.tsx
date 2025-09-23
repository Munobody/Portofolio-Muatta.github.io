import React, { useState } from "react";
import {
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiMui,
  SiPostman,
  SiFigma,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";
import {
  FiDownload,
  FiMail,
  FiX,
  FiCode,
  FiLayers,
} from "react-icons/fi";

// Simplified data structures
const skillsData = {
  technologies: [
    { icon: SiReact, color: "#61DAFB", label: "React.js", category: "Frontend" },
    { icon: SiNextdotjs, color: "#000000", label: "Next.js", category: "Frontend" },
    { icon: SiTypescript, color: "#3178C6", label: "TypeScript", category: "Language" },
    { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS", category: "Frontend" },
    { icon: SiLaravel, color: "#FF2D20", label: "Laravel", category: "Backend" },
    { icon: SiNodedotjs, color: "#339933", label: "Node.js", category: "Backend" },
    { icon: SiMysql, color: "#4479A1", label: "MySQL", category: "Database" },
    { icon: SiPostgresql, color: "#336791", label: "PostgreSQL", category: "Database" },
    { icon: SiPrisma, color: "#2D3748", label: "Prisma", category: "Database" },
    { icon: SiExpress, color: "#000000", label: "Express.js", category: "Backend" },
    { icon: SiMui, color: "#007FFF", label: "Material-UI", category: "Frontend" },
    { icon: SiFigma, color: "#F24E1E", label: "Figma", category: "Design" },
    { icon: SiCanva, color: "#00C4CC", label: "Canva", category: "Design" },
    { icon: SiAdobephotoshop, color: "#31A8FF", label: "Photoshop", category: "Design" },
    { icon: SiGit, color: "#F05032", label: "Git", category: "Tools" },
    { icon: SiGithub, color: "#181717", label: "GitHub", category: "Tools" },
    { icon: SiPostman, color: "#FF6C37", label: "Postman", category: "Tools" },
  ],
  languages: [
    { icon: SiJavascript, color: "#F7DF1E", label: "JavaScript", level: "Advanced" },
    { icon: SiTypescript, color: "#3178C6", label: "TypeScript", level: "Advanced" },
    { icon: SiPhp, color: "#777BB4", label: "PHP", level: "Intermediate" },
    { icon: SiHtml5, color: "#E34F26", label: "HTML5", level: "Advanced" },
    { icon: SiCss3, color: "#1572B6", label: "CSS3", level: "Advanced" },
  ]
};

// Optimized components
function SkillCard({ icon: Icon, label, color, category, level }: any) {
  return (
    <div className="group p-3 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/8 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
          <Icon className="text-xl" style={{ color }} />
        </div>
        <div>
          <h4 className="text-sm font-medium text-white">{label}</h4>
          <p className="text-xs text-white/60">{category || level}</p>
        </div>
      </div>
    </div>
  );
}

function Modal({ title, items, onClose }: { title: string; items: any[]; onClose: () => void }) {
  const categories = [...new Set(items.map(item => item.category).filter(Boolean))];
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="max-w-4xl w-full max-h-[80vh] overflow-y-auto rounded-xl p-6 bg-white/10 backdrop-blur-md border border-white/20" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg text-white">
            <FiX className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-6">
          {categories.map(category => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-cyan-300 mb-3">{category}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.filter(item => item.category === category).map((item, idx) => (
                  <SkillCard key={idx} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [showTechModal, setShowTechModal] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);

  const isModalOpen = showTechModal || showLangModal;

  return (
    <section className="w-full py-8">
      <div className={`transition-all duration-300 ${isModalOpen ? "filter blur-sm pointer-events-none" : ""}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
          {/* Intro */}
          <div className="p-8 border-b border-white/10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for Work
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Hi, I'm Muatta Muhariq, S.Kom 👋</h3>
            <p className="text-white/80 mb-6 max-w-3xl mx-auto">
              A passionate Software Developer and fresh graduate with a Bachelor's degree in Informatics from Syiah Kuala University. 
              I specialize in creating innovative web solutions and creative design work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/CV-Muatta.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                <FiDownload className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="mailto:muhariqmuatta27@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                <FiMail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Technologies */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <FiCode className="w-5 h-5 text-cyan-400" />
                    Technologies
                  </h4>
                  <button
                    onClick={() => setShowTechModal(true)}
                    className="text-cyan-400 text-sm hover:underline"
                  >
                    View All ({skillsData.technologies.length})
                  </button>
                </div>
                <div className="grid gap-2">
                  {skillsData.technologies.slice(0, 6).map((tech, idx) => (
                    <SkillCard key={idx} {...tech} />
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <FiLayers className="w-5 h-5 text-cyan-400" />
                    Languages
                  </h4>
                  <button
                    onClick={() => setShowLangModal(true)}
                    className="text-cyan-400 text-sm hover:underline"
                  >
                    View All ({skillsData.languages.length})
                  </button>
                </div>
                <div className="grid gap-2">
                  {skillsData.languages.slice(0, 4).map((lang, idx) => (
                    <SkillCard key={idx} {...lang} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showTechModal && (
        <Modal title="All Technologies & Tools" items={skillsData.technologies} onClose={() => setShowTechModal(false)} />
      )}
      {showLangModal && (
        <Modal title="Programming Languages" items={skillsData.languages} onClose={() => setShowLangModal(false)} />
      )}
    </section>
  );
}