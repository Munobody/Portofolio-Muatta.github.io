import React, { useState } from "react";

type ProjectCardProps = {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    technologies: string[];
    liveLink?: string;
    githubLink?: string;
    images?: string[];
    icon: React.ReactNode;
};

function ProjectCard({ 
    title, 
    subtitle, 
    description, 
    features, 
    technologies, 
    liveLink, 
    githubLink, 
    images,
    icon 
}: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const ExternalLinkIcon = () => (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
    );

    const ChevronLeftIcon = () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    );

    const ChevronRightIcon = () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );

    const nextImage = () => {
        if (images && images.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (images && images.length > 0) {
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="w-full bg-gradient-to-br from-white/8 to-white/4 border border-white/20 rounded-2xl shadow-xl backdrop-blur-md hover:shadow-2xl hover:border-white/30 transition-all duration-300 group">
            {/* Image Slider - if images provided */}
            {images && images.length > 0 && (
                <div className="relative h-48 md:h-56 rounded-t-2xl overflow-hidden">
                    {/* Main Image */}
                    <div className="relative w-full h-full">
                        <img 
                            src={images[currentImageIndex]} 
                            alt={`${title} screenshot ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        
                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
                                >
                                    <ChevronLeftIcon />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
                                >
                                    <ChevronRightIcon />
                                </button>
                            </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                            {currentImageIndex + 1} / {images.length}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    {images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                        index === currentImageIndex 
                                            ? 'bg-cyan-400 scale-125' 
                                            : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-sm md:text-base text-cyan-400 font-medium">
                            {subtitle}
                        </p>
                    </div>
                    <div className="ml-4 p-2 bg-cyan-500/20 rounded-lg">
                        {icon}
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-white/85 mb-6 leading-relaxed">
                    {description}
                </p>

                {/* Features */}
                <div className="mb-6">
                    <h4 className="text-xs md:text-sm font-semibold text-cyan-300 mb-3 uppercase tracking-wide">
                        Key Features
                    </h4>
                    <ul className="text-xs md:text-sm text-white/80 space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                    <h4 className="text-xs md:text-sm font-semibold text-cyan-300 mb-3 uppercase tracking-wide">
                        Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index}
                                className="px-2 py-1 text-xs bg-white/10 text-white/90 rounded-md border border-white/20 hover:bg-white/20 transition-colors duration-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    {liveLink && (
                        <a 
                            href={liveLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            <span>Live Demo</span>
                            <ExternalLinkIcon />
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white/90 text-sm font-medium rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Project() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const projects = [
        {
            title: "SIPEMA",
            subtitle: "Public Complaint System for USK",
            description: "Sistem Pengaduan & Pelaporan Masyarakat untuk Universitas Syiah Kuala. Platform responsif yang memungkinkan masyarakat melaporkan keluhan dengan fitur tracking real-time dan manajemen berbasis role.",
            features: [
                "Real-time complaint tracking & status updates",
                "Role-based authentication & secure navigation", 
                "Interactive notification system",
                "Advanced form validation & error handling"
            ],
            technologies: ["React.js", "TypeScript", "RESTful API", "Authentication", "Responsive Design"],
            liveLink: "https://sistem-pengaduan-masyarakat-ten.vercel.app/",
            githubLink: "https://github.com/Munobody/SistemPengaduanMasyarakat",
            images: [
                // "/assets/sipema-1.png",
                // "/assets/sipema-2.png",
                // "/assets/sipema-3.png"
            ],
            icon: (
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            title: "SI-IRA",
            subtitle: "Sistem Informasi Rapat & Visualisasi Data BAPPEDA",
            description: "Sistem terintegrasi yang terdiri dari dua komponen utama: SI-IRA untuk booking ruang rapat dan informasi jadwal rapat, serta modul Visualisasi Data untuk menampilkan data aset dengan visualisasi interaktif yang mendukung pengambilan keputusan berbasis data.",
            features: [
                "Meeting room booking & scheduling system",
                "Interactive data visualization dashboard",
                "Asset management & tracking",
                "Transparent government planning support",
                "Enhanced coordination & resource management"
            ],
            technologies: ["React.js", "TypeScript", "Chart.js", "Data Visualization", "Government System"],
            images: [
                "/assets/Si-ira1.png",
                "/assets/Si-ira3.png", 
                "/assets/Si-ira4.png",
                "/assets/Si-ira5.png"
            ],
            icon: (
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4M5 12v6a2 2 0 002 2h10a2 2 0 002-2v-6m-9 4h4m-2-2v4" />
                </svg>
            )
        },
        {
            title: "PBW USK Docs Lab",
            subtitle: "Website-Based Programming Laboratory Documentation",
            description: "Platform pembelajaran komprehensif untuk laboratorium pemrograman berbasis web di Universitas Syiah Kuala. Menyediakan dokumentasi lengkap dan materi pembelajaran untuk 44 mahasiswa dalam 16 sesi praktikum yang mencakup berbagai teknologi web development.",
            features: [
                "Comprehensive learning materials for web programming",
                "Interactive documentation with practical exercises",
                "16 structured learning sessions curriculum",
                "Integration of multiple teaching techniques",
                "Collaborative project management for students",
                "Dynamic lecture content delivery system"
            ],
            technologies: ["Nextra", "React.js", "TypeScript", "MDX", "Next.js", "Documentation", "Education Platform"],
            liveLink: "https://docs-pbw-inf-224.vercel.app/",
            githubLink: "https://github.com/MuhammadFarhan009/pbw",
            images: [
                // "/assets/pbw-docs-1.png",
                // "/assets/pbw-docs-2.png",
                // "/assets/pbw-docs-3.png"
            ],
            icon: (
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        }
    ];

    const projectsPerPage = 2;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const nextProjectPage = () => {
        setCurrentProjectIndex((prev) => (prev + 1) % totalPages);
    };

    const prevProjectPage = () => {
        setCurrentProjectIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const goToProjectPage = (index: number) => {
        setCurrentProjectIndex(index);
    };

    const getCurrentProjects = () => {
        const start = currentProjectIndex * projectsPerPage;
        const end = start + projectsPerPage;
        return projects.slice(start, end);
    };

    const ChevronLeftIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    );

    const ChevronRightIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );

    return (
        <section className="w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Featured Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
                <p className="text-white/70 max-w-2xl mx-auto">
                    Koleksi project yang telah saya kerjakan dengan fokus pada pengembangan frontend dan sistem informasi
                </p>
            </div>

            <div className="relative">
                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
                    {getCurrentProjects().map((project, index) => (
                        <ProjectCard
                            key={`${currentProjectIndex}-${index}`}
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            features={project.features}
                            technologies={project.technologies}
                            liveLink={project.liveLink}
                            githubLink={project.githubLink}
                            images={project.images}
                            icon={project.icon}
                        />
                    ))}
                </div>

                {/* Navigation Controls - only show if more than 2 projects */}
                {projects.length > projectsPerPage && (
                    <>
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevProjectPage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110 z-10"
                        >
                            <ChevronLeftIcon />
                        </button>
                        <button
                            onClick={nextProjectPage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110 z-10"
                        >
                            <ChevronRightIcon />
                        </button>

                        {/* Page Counter */}
                        <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                            {currentProjectIndex + 1} / {totalPages}
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 gap-3">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToProjectPage(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                        index === currentProjectIndex 
                                            ? 'bg-cyan-400 scale-125' 
                                            : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}