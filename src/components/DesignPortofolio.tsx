import React, { useState, useEffect } from "react";
import { SiFigma, SiCanva, SiAdobephotoshop } from "react-icons/si";
import {
  FiX,
  FiExternalLink,
  FiImage,
  FiEye,
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiPause,
} from "react-icons/fi";
import { designWorks } from "../components/Data/designData";

// Tool configuration
const toolIcons = {
  figma: { icon: SiFigma, color: "#F24E1E" },
  canva: { icon: SiCanva, color: "#00C4CC" },
  photoshop: { icon: SiAdobephotoshop, color: "#31A8FF" },
};

const getToolData = (tool: string) =>
  toolIcons[tool.toLowerCase() as keyof typeof toolIcons] || {
    icon: FiImage,
    color: "#64748b",
  };

function DesignCard({ design, onClick }: { design: any; onClick: () => void }) {
  const { icon: ToolIcon, color } = getToolData(design.tool);

  return (
    <div
      className="group cursor-pointer bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 hover:bg-white/8 transition-all duration-300 hover:shadow-xl hover:scale-105 w-full max-w-sm mx-auto"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={design.images[0]}
          alt={design.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            <FiEye className="w-4 h-4" />
            View Details
          </div>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
          <ToolIcon className="w-3 h-3" style={{ color }} />
          {design.tool}
        </div>
        {design.images.length > 1 && (
          <div className="absolute top-3 left-3 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
            <FiImage className="w-3 h-3 inline mr-1" />
            {design.images.length}
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-white text-base mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {design.title}
        </h4>
        <div className="flex items-center justify-between">
          <span className="text-xs text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-full font-medium">
            {design.category}
          </span>
          <span className="text-xs text-white/60">
            {design.images.length} image{design.images.length > 1 ? 's' : ''}
          </span>
        </div>
      </div>
    </div>
  );
}

function DesignModal({ design, onClose }: { design: any; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!design) return null;

  const { images = [], title, category, tool, description, figmaLink, canvaLink } = design;
  const hasMultiple = images.length > 1;
  const { icon: ToolIcon, color } = getToolData(tool);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasMultiple)
        setCurrentIndex((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft" && hasMultiple)
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, hasMultiple, images.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="max-w-7xl w-full h-[95vh] flex flex-col rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header - Fixed */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-6 border-b border-white/10 flex-shrink-0">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-full font-medium">{category}</span>
              <div className="flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-white/20 text-white" style={{ borderColor: color + '40' }}>
                <ToolIcon className="w-4 h-4" style={{ color }} />
                {tool}
              </div>
              {hasMultiple && (
                <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
                  {currentIndex + 1} of {images.length}
                </span>
              )}
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors self-start sm:self-center"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Image Container - Scrollable */}
        <div className="relative flex-1 overflow-hidden bg-black/20">
          <div className="w-full h-full overflow-auto flex items-start justify-center p-4 sm:p-6">
            <div className="relative min-h-full flex items-center justify-center w-full">
              <img 
                src={images[currentIndex]} 
                alt={`${title} - Image ${currentIndex + 1}`}
                className="max-w-full h-auto object-contain rounded-lg shadow-2xl"
                style={{ 
                  minHeight: '200px',
                  maxHeight: 'none' // Allow full height
                }}
              />
            </div>
          </div>
          
          {/* Navigation Controls - Fixed Position */}
          {hasMultiple && (
            <>
              <button 
                onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/80 hover:bg-black/90 text-white transition-all backdrop-blur-sm border border-white/20 z-10"
              >
                <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button 
                onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/80 hover:bg-black/90 text-white transition-all backdrop-blur-sm border border-white/20 z-10"
              >
                <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              {/* Thumbnail Navigation - Fixed at Bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <div className="flex gap-2 max-w-xs overflow-x-auto p-2 bg-black/80 rounded-lg backdrop-blur-sm border border-white/20">
                  {images.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all flex-shrink-0 ${
                        idx === currentIndex ? "bg-cyan-400 scale-125" : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Image Counter - Fixed at Top Right of Image */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-black/80 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white border border-white/20 z-10">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}

          {/* Zoom Instructions */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-black/80 backdrop-blur-sm rounded-lg text-xs text-white/70 border border-white/20 z-10">
            <span className="hidden sm:inline">Scroll to view full image • </span>
            <span className="sm:hidden">Scroll to zoom</span>
          </div>
        </div>

        {/* Content Footer - Fixed */}
        <div className="p-4 sm:p-6 border-t border-white/10 flex-shrink-0 max-h-40 overflow-y-auto">
          {description && (
            <p className="text-white/80 leading-relaxed mb-4 text-sm sm:text-base">{description}</p>
          )}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {figmaLink && (
              <a
                href={figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-all font-medium text-sm"
              >
                <SiFigma className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Open in </span>Figma
                <FiExternalLink className="w-3 h-3" />
              </a>
            )}
            {canvaLink && (
              <a
                href={canvaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/30 transition-all font-medium text-sm"
              >
                <SiCanva className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Open in </span>Canva
                <FiExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DesignPortfolio() {
  const [selectedDesign, setSelectedDesign] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(designWorks.map(work => work.category))];
  const filteredWorks = selectedCategory === "All" 
    ? designWorks 
    : designWorks.filter(work => work.category === selectedCategory);

  // Responsive items per slide
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1);
      else if (window.innerWidth < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(filteredWorks.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || totalSlides <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const getCurrentSlideItems = () => {
    const start = currentSlide * itemsPerSlide;
    return filteredWorks.slice(start, start + itemsPerSlide);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="w-full py-16 px-4">
      <div className={`transition-all duration-300 ${selectedDesign ? "filter blur-sm pointer-events-none" : ""}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Design Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Showcase of my creative design work including social media graphics, UI mockups, branding, and digital illustrations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentSlide(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          {/* Stats and Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-3 text-white/70">
              <div className="flex items-center gap-2">
                <FiImage className="w-5 h-5 text-cyan-400" />
                <span className="font-medium">{filteredWorks.length} designs</span>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <span className="text-sm">{categories.length - 1} categories</span>
            </div>
            
            {totalSlides > 1 && (
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/30"
              >
                {isAutoPlay ? <FiPause className="w-4 h-4" /> : <FiPlay className="w-4 h-4" />}
                <span className="font-medium text-sm sm:text-base">{isAutoPlay ? 'Pause' : 'Play'} Auto-slide</span>
              </button>
            )}
          </div>

          {/* Designs Grid/Slider */}
          {filteredWorks.length === 0 ? (
            <div className="text-center py-16">
              <FiImage className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <p className="text-white/60 text-lg">No designs found in this category</p>
            </div>
          ) : (
            <div className="relative">
              {/* Grid Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {getCurrentSlideItems().map(design => (
                  <DesignCard
                    key={design.id}
                    design={design}
                    onClick={() => setSelectedDesign(design)}
                  />
                ))}
              </div>

              {/* Navigation for larger screens */}
              {totalSlides > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-sm border border-white/20 hidden lg:block"
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-sm border border-white/20 hidden lg:block"
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          )}

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all lg:hidden"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-cyan-400 w-8" 
                        : "bg-white/30 hover:bg-white/50 w-2"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all lg:hidden"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Tools Section */}
          <div className="text-center mt-16">
            <p className="text-white/60 mb-4 font-medium">Design Tools I Use</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Figma", "Canva", "Photoshop"].map(tool => {
                const { icon: Icon, color } = getToolData(tool);
                return (
                  <div 
                    key={tool} 
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6" style={{ color }} />
                    <span className="text-white font-medium">{tool}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedDesign && (
        <DesignModal
          design={selectedDesign}
          onClose={() => setSelectedDesign(null)}
        />
      )}
    </section>
  );
}