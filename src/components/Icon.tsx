import React, { useState } from 'react';
import {
  SiLaravel, SiAdonisjs, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMysql, SiPostgresql, SiPrisma, SiTailwindcss, SiMui, SiPostman, SiFigma
} from 'react-icons/si';

const items = [
  { icon: <SiLaravel />, color: 'red', label: 'Laravel' },
  { icon: <SiAdonisjs />, color: 'purple', label: 'Adonis.js' },
  { icon: <SiReact />, color: 'cyan', label: 'React.js' },
  { icon: <SiNextdotjs />, color: 'black', label: 'Next.js' },
  { icon: <SiNodedotjs />, color: 'green', label: 'Node.js' },
  { icon: <SiExpress />, color: 'gray', label: 'Express.js' },
  { icon: <SiMysql />, color: 'blue', label: 'MySQL' },
  { icon: <SiPostgresql />, color: 'indigo', label: 'PostgreSQL' },
  { icon: <SiPrisma />, color: 'black', label: 'Prisma' },
  { icon: <SiTailwindcss />, color: 'teal', label: 'Tailwind CSS' },
  { icon: <SiMui />, color: 'blue', label: 'Material-UI' },
  { icon: <SiPostman />, color: 'orange', label: 'Postman' },
  { icon: <SiFigma />, color: 'pink', label: 'Figma' },
];

export default function TechnologiesCard() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 4);

  return (
    <div className="bg-white/10 rounded-xl shadow-lg p-6 text-white border border-white/10 w-full max-w-xl mx-auto">
      <div className="mb-4 text-xl font-bold text-white text-center">Technologies</div>
      <div className="grid grid-cols-4 gap-x-1 gap-y-2 justify-center">
        {visibleItems.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-3xl" style={{ color: item.color }}>{item.icon}</span>
            <span className="text-xs mt-1 text-white text-center">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 rounded bg-white/20 text-white hover:bg-white/30 transition"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Tutup" : "Show More"}
        </button>
      </div>
    </div>
  );
}