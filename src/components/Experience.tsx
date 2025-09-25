import React, { useState } from "react";
import { 
  FaSuitcase, 
  FaRegCalendarAlt, 
  FaGraduationCap, 
  FaUsers, 
  FaChalkboardTeacher,
  FaBuilding 
} from "react-icons/fa";
import { 
  FiExternalLink, 
  FiChevronDown, 
  FiChevronUp, 
  FiMapPin,
  FiAward,
  FiUsers as FiUsersOutline
} from "react-icons/fi";

// Definisi tipe untuk experience data
interface ExperienceItem {
  id: string;
  category: 'work' | 'education' | 'organization' | 'teaching';
  title: string;
  company: string;
  location?: string;
  link?: string;
  period: string;
  description: string[];
  skills?: string[];
  highlight?: boolean;
  role?: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: "1",
    category: "work",
    title: "Information System Intern",
    company: "BAPPEDA Provinsi Aceh",
    location: "Banda Aceh, Indonesia",
    link: "https://dpmptsp.acehprov.go.id/",
    period: "Jul 2024 - Aug 2024",
    description: [
      "Creating user interfaces according to user requirements",
      "Integrating system backend into the frontend application", 
      "Improved frontend development expertise by working closely with the backend team",
      "Developed SI-IRA (Meeting Information System) to book meeting rooms and provide meeting schedules",
      "Built a Data Visualization module to display interactive visualizations of agency asset data",
      "Enhanced coordination, resource management, and transparency in government planning through integrated system features"
    ],
    skills: ["React", "JavaScript", "UI/UX", "System Integration", "Data Visualization"],
    highlight: true
  },
  {
    id: "2", 
    category: "education",
    title: "Mobile Development Cohort",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    link: "https://grow.google/intl/id_id/bangkit/",
    period: "Feb 2024 - Jul 2024",
    description: [
      "Completed comprehensive curriculum covering mobile development fundamentals",
      "Strengthened teamwork, communication, and problem-solving skills",
      "Cross-functional collaboration and agile project workflows"
    ],
    skills: ["Mobile Development", "Teamwork", "Communication", "Problem Solving"],
    highlight: true
  },
  {
    id: "3",
    category: "organization",
    title: "Vice Chair I",
    company: "Himpunan Mahasiswa Informatika",
    period: "Sep 2023 - Aug 2024",
    description: [
      "Led operational coordination and execution of organizational work programs",
      "Managed external relations, inter-organizational collaborations, and sponsorships",
      "Mentored members, evaluated programs, and enhanced team capabilities"
    ],
    skills: ["Leadership", "Project Management", "Mentoring", "External Relations"]
  },
  {
    id: "4",
    category: "organization", 
    title: "Vice Chair II",
    company: "Informatics Student Association",
    period: "Sep 2022 - Aug 2023",
    description: [
      "Coordinated internal organization and managed student affairs programs",
      "Assisted in preparing agendas, meeting documentation, and monitoring division progress",
      "Improved communication among members and facilitated campus activities"
    ],
    skills: ["Organization", "Communication", "Documentation", "Event Planning"]
  },
  {
    id: "5",
    category: "organization",
    title: "Human Resource Development Staff", 
    company: "Student Executive Board FMIPA",
    period: "2022 - 2023",
    description: [
      "Responsible for Basketball at POM FMIPA — organized match schedules, coordinated participants, arranged equipment, appointed referees, and managed event logistics",
      "Responsible for Expo at PIL MIPA XXIV FMIPA — managed booth planning, expo layout, vendor and promotion team coordination, and operational flow on the event day",
      "Designed and implemented HR training programs for BEM members (leadership, communication, teamwork)",
      "Conducted post-event evaluations and prepared recommendations to increase participation and event effectiveness"
    ],
    skills: ["Event Management", "HR Development", "Logistics", "Team Coordination"]
  },
  {
    id: "6",
    category: "teaching",
    title: "Teaching Assistant",
    company: "Software Development and Operations — Syiah Kuala University",
    period: "Aug 2024 – Dec 2024",
    description: [
      "Implemented Jira for project management training; taught Scrum and Kanban, user story creation, sprint planning, and issue tracking",
      "Conducted hands-on Docker workshops to containerize applications, manage dependencies, and deploy scalable solutions",
      "Introduced GitHub Actions for CI/CD pipelines, guiding students to automate testing, builds, and deployments"
    ],
    skills: ["DevOps", "Docker", "CI/CD", "Project Management", "Jira", "Scrum"]
  },
  {
    id: "7",
    category: "teaching",
    title: "Teaching Assistant",
    company: "Website-Based Programming Laboratory — Syiah Kuala University", 
    link: "https://docs-pbw-inf-224.vercel.app/",
    period: "Feb 2024 – May 2024",
    description: [
      "Educated 44 students across 16 sessions on Linux and web programming (HTML, CSS, JavaScript, PHP, Laravel, Tailwind, Git)",
      "Developed interactive lesson plans using practical exercises, collaborative projects, and lectures",
      "Maintained online documentation and learning resources: docs-pbw-inf-224.vercel.app"
    ],
    skills: ["Web Development", "Teaching", "Documentation", "Laravel", "Linux"]
  }
];

const categoryConfig = {
  work: { 
    icon: FaSuitcase, 
    color: "text-blue-400", 
    bg: "bg-blue-500/10", 
    border: "border-blue-500/20",
    label: "Professional Experience" 
  },
  education: { 
    icon: FaGraduationCap, 
    color: "text-green-400", 
    bg: "bg-green-500/10", 
    border: "border-green-500/20",
    label: "Education & Training" 
  },
  organization: { 
    icon: FaUsers, 
    color: "text-purple-400", 
    bg: "bg-purple-500/10", 
    border: "border-purple-500/20",
    label: "Organizational Roles" 
  },
  teaching: { 
    icon: FaChalkboardTeacher, 
    color: "text-cyan-400", 
    bg: "bg-cyan-500/10", 
    border: "border-cyan-500/20",
    label: "Teaching Experience" 
  }
};

function ExperienceCard({ 
  experience, 
  isExpanded, 
  onToggle 
}: { 
  experience: ExperienceItem; 
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const config = categoryConfig[experience.category];
  const IconComponent = config.icon;

  return (
    <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      experience.highlight 
        ? 'bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 border-cyan-500/30 hover:border-cyan-400/50 shadow-lg shadow-cyan-500/10' 
        : 'bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/30 hover:bg-white/8'
    }`}>
      
      {/* Highlight Badge */}
      {experience.highlight && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 px-2 py-1 bg-cyan-400/20 border border-cyan-400/40 rounded-full text-xs text-cyan-300 font-medium">
            <FiAward className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Icon */}
          <div className={`p-3 rounded-xl ${config.bg} ${config.border} border shrink-0`}>
            <IconComponent className={`w-6 h-6 ${config.color}`} />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {experience.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  {experience.link ? (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-semibold text-base flex items-center gap-1 hover:underline transition-colors"
                    >
                      {experience.company}
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-white/90 font-semibold text-base">{experience.company}</span>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt className="w-4 h-4" />
                    <span className="font-medium">{experience.period}</span>
                  </div>
                  {experience.location && (
                    <div className="flex items-center gap-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  )}
                  <div className={`px-2 py-1 rounded-lg text-xs font-medium ${config.bg} ${config.color} border ${config.border}`}>
                    {config.label}
                  </div>
                </div>
              </div>
              
              <button
                onClick={onToggle}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all shrink-0"
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                {isExpanded ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-20 opacity-80'
        }`}>
          <ul className="space-y-3 text-white/85">
            {(isExpanded ? experience.description : experience.description.slice(0, 2)).map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mt-2 shrink-0"></div>
                <span className="leading-relaxed text-sm">{item}</span>
              </li>
            ))}
            {!isExpanded && experience.description.length > 2 && (
              <li className="flex items-center gap-2 text-white/40 text-xs font-medium">
                <FiChevronDown className="w-3 h-3" />
                +{experience.description.length - 2} more details
              </li>
            )}
          </ul>
          
          {/* Skills */}
          {experience.skills && isExpanded && (
            <div className="mt-6 pt-4 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white/80 mb-3">Key Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const categories = ["all", ...Object.keys(categoryConfig)];
  
  const filteredExperiences = selectedCategory === "all" 
    ? experienceData 
    : experienceData.filter(exp => exp.category === selectedCategory);

  const toggleCard = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const expandAll = () => {
    setExpandedCards(new Set(filteredExperiences.map(exp => exp.id)));
  };

  const collapseAll = () => {
    setExpandedCards(new Set());
  };

  return (
    <section className="max-w-6xl mx-auto mb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaSuitcase className="text-4xl text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Experience</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mb-6"></div>
        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          My journey through professional development, education, leadership, and teaching experiences
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {Object.entries(categoryConfig).map(([key, config]) => {
          const count = experienceData.filter(exp => exp.category === key).length;
          const IconComponent = config.icon;
          
          return (
            <div key={key} className={`p-5 rounded-xl ${config.bg} border ${config.border} hover:scale-105 transition-transform duration-200`}>
              <div className="flex items-center gap-3">
                <IconComponent className={`w-7 h-7 ${config.color}`} />
                <div>
                  <div className="text-2xl font-bold text-white">{count}</div>
                  <div className="text-xs text-white/60 font-medium">
                    {config.label.split(' ')[0]}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => {
            const isActive = selectedCategory === category;
            const config = categoryConfig[category as keyof typeof categoryConfig];
            const IconComponent = config?.icon || FaSuitcase;
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 scale-105"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10 hover:border-white/30"
                }`}
              >
                {category !== "all" && <IconComponent className="w-4 h-4" />}
                <span className="capitalize">
                  {category === "all" ? "All Experience" : config?.label || category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Expand/Collapse Controls */}
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="flex items-center gap-2 px-4 py-2.5 text-sm bg-white/10 hover:bg-white/20 text-white/70 hover:text-white rounded-xl transition-all border border-white/10 hover:border-white/30 font-medium"
          >
            <FiChevronDown className="w-4 h-4" />
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="flex items-center gap-2 px-4 py-2.5 text-sm bg-white/10 hover:bg-white/20 text-white/70 hover:text-white rounded-xl transition-all border border-white/10 hover:border-white/30 font-medium"
          >
            <FiChevronUp className="w-4 h-4" />
            Collapse All
          </button>
        </div>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {filteredExperiences.length === 0 ? (
          <div className="text-center py-16">
            <FaSuitcase className="w-20 h-20 text-white/20 mx-auto mb-6" />
            <p className="text-white/60 text-lg">No experiences found in this category</p>
          </div>
        ) : (
          filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isExpanded={expandedCards.has(experience.id)}
              onToggle={() => toggleCard(experience.id)}
            />
          ))
        )}
      </div>

      {/* Summary */}
      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-sm">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Experience Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mb-3">
                <FiUsersOutline className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-1">{experienceData.length}</div>
              <div className="text-sm text-white/60 font-medium">Total Experiences</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mb-3">
                <FaRegCalendarAlt className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-1">3+</div>
              <div className="text-sm text-white/60 font-medium">Years Active</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mb-3">
                <FaGraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-1">44+</div>
              <div className="text-sm text-white/60 font-medium">Students Taught</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}