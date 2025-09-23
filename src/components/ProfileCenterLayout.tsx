import React from "react";
import ProfileCard from "@/components/utils/ProfileCardComponent";
import MusicPlayer from "@/components/MusicPlayer";

type InfoCardProps = {
  title: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

function InfoCard({ title, children, icon }: InfoCardProps) {
  return (
    <div className="w-full">
      <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:border-white/30">
        <div className="flex items-center gap-3 mb-6">
          {icon && <div className="text-cyan-400 flex-shrink-0">{icon}</div>}
          <h4 className="text-lg md:text-xl font-bold text-white/95 tracking-wide">
            {title}
          </h4>
        </div>
        <div className="text-sm md:text-base text-white/85 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProfileCenterLayout() {
  const UserIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );

  const HeartIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  );

  const AcademicIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"/>
    </svg>
  );

  const SkillsIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );

  // Data musik untuk Music Player
  const musicTracks = [
    {
      id: "1",
      title: "Someone to Stay",
      artist: "Vancouver Sleep Clinic - ",
      src: "/audio/Vancouver Sleep Clinic - Someone to Stay.mp3",
      cover: "/assets/atta.jpeg"
    },
    {
      id: "2", 
      title: "Coding Flow",
      artist: "Focus Music",
      src: "/audio/coding-flow.mp3",
      cover: "/assets/music-cover2.jpg"
    },
    {
      id: "3",
      title: "Creative Mind",
      artist: "Ambient Sound",
      src: "/audio/creative-mind.mp3",
      cover: "/assets/music-cover3.jpg"
    }
  ];

  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Profile Card Section dengan Music Player */}
          <div className="xl:col-span-4 flex flex-col items-center xl:items-start gap-6">
            <div className="w-full max-w-[320px] xl:max-w-none">
              <div className="sticky top-8 space-y-6">
                <ProfileCard
                  name="Muatta Muhariq"
                  title="Frontend Developer"
                  handle="muatta_"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/assets/Atta.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log("Contact clicked")}
                />
                
                {/* Music Player Component */}
                <div className="w-full">
                  <MusicPlayer tracks={musicTracks} />
                </div>
              </div>
            </div>
          </div>

          {/* Information Cards Section */}
          <div className="xl:col-span-8 space-y-6">
            
            {/* Biodata Card */}
            <InfoCard title="Personal Information" icon={<UserIcon />}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-cyan-300 text-xs uppercase tracking-wide font-semibold">
                        Full Name
                      </span>
                      <span className="text-white/90 font-medium">Muatta Muhariq</span>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="text-cyan-300 text-xs uppercase tracking-wide font-semibold">
                        Birth Date & Place
                      </span>
                      <span className="text-white/90">Langsa, 27 Juni 2000</span>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="text-cyan-300 text-xs uppercase tracking-wide font-semibold">
                        Gender
                      </span>
                      <span className="text-white/90">Male</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-cyan-300 text-xs uppercase tracking-wide font-semibold">
                        Email
                      </span>
                      <a
                        className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 break-all"
                        href="mailto:muhariqmuatta27@gmail.com"
                      >
                        muhariqmuatta27@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="text-cyan-300 text-xs uppercase tracking-wide font-semibold">
                        Phone
                      </span>
                      <a 
                        className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200"
                        href="tel:+6285172173897"
                      >
                        +62 851 7217 3897
                      </a>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="text-cyan-300 text-xs uppercase tracking-wide font-semibold">
                        Location
                      </span>
                      <span className="text-white/90 text-sm leading-relaxed">
                        Langsa, Aceh, Indonesia
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-white/10">
                  <div className="flex flex-col gap-1">
                    <span className="text-cyan-300 text-xs uppercase tracking-wide font-semibold">
                      Address
                    </span>
                    <span className="text-white/80 text-sm leading-relaxed">
                      Jl. Peutua Hamzah, Gampong Paya Bujok Teungoh, Kec. Langsa Barat, Kota Langsa, Aceh 24352
                    </span>
                  </div>
                </div>
              </div>
            </InfoCard>

            {/* Education & Skills Card */}
            <InfoCard title="Education & Skills" icon={<AcademicIcon />}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-cyan-300 mb-2 text-sm uppercase tracking-wide">
                      Education
                    </h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                        <h6 className="font-medium text-white/90 text-sm">Universitas Syiah Kuala</h6>
                        <p className="text-white/70 text-xs">Informatics</p>
                        <p className="text-cyan-400 text-xs">2021 - 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-cyan-300 mb-2 text-sm uppercase tracking-wide">
                      Technical Skills
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'Git', 'Laravel', 'PHP'].map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-md border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </InfoCard>

            {/* Hobbies & Interests Card */}
            <InfoCard title="Hobbies & Interests" icon={<HeartIcon />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">📚</span>
                      <h5 className="font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                        Reading & Learning
                      </h5>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed pl-6">
                      Exploring Psychology, Sociology, and Philosophy to better understand human behavior and society.
                    </p>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">⚽</span>
                      <h5 className="font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                        Sports Activities
                      </h5>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed pl-6">
                      Playing football, futsal, and basketball as part of an active and healthy lifestyle.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">🎤</span>
                      <h5 className="font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                        Leadership & Public Speaking
                      </h5>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed pl-6">
                      Interested in public speaking, politics, and continuously developing leadership skills for the future.
                    </p>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">🎨</span>
                      <h5 className="font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                        Design & Creative Work
                      </h5>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed pl-6">
                      Passionate about design and editing using Photoshop, Canva, Figma, and CapCut for creative projects.
                    </p>
                  </div>
                </div>
              </div>
            </InfoCard>

          </div>
        </div>
      </div>
    </section>
  );
}