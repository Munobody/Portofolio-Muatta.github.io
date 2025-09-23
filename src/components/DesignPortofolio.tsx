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
      className="group cursor-pointer bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/30 hover:bg-white/8 transition-all flex-shrink-0 w-80"
      onClick={onClick}
    >
      <div className="relative aspect-video">
        <img
          src={design.images[0]}
          alt={design.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex items-center gap-2 px-3 py-1 bg-black/80 rounded-full text-white text-sm">
            <FiEye className="w-4 h-4" />
            View
          </div>
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/80 rounded-full text-xs text-white">
          <ToolIcon className="w-3 h-3" style={{ color }} />
          {design.tool}
        </div>
        {design.images.length > 1 && (
          <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/80 rounded-full text-xs text-white">
            {design.images.length} images
          </div>
        )}
      </div>
      <div className="p-3">
        <h4 className="font-medium text-white text-sm mb-1">{design.title}</h4>
        <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
          {design.category}
        </span>
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
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, hasMultiple, images.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">{category}</span>
              <div className="flex items-center gap-1 text-xs px-2 py-1 rounded-full border border-white/20" style={{ color }}>
                <ToolIcon className="w-3 h-3" />
                {tool}
              </div>
              {hasMultiple && <span className="text-xs text-white/60">{currentIndex + 1}/{images.length}</span>}
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg text-white">
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="relative bg-white/5">
          <img src={images[currentIndex]} alt={title} className="w-full h-auto max-h-[60vh] object-contain" />
          
          {hasMultiple && (
            <>
              <button 
                onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Description */}
        <div className="p-4">
          <p className="text-white/80 text-sm mb-3">{description}</p>
          <div className="flex flex-wrap gap-3">
            {figmaLink && (
              <a
                href={figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-all text-sm"
              >
                <SiFigma className="w-4 h-4" />
                Open in Figma
                <FiExternalLink className="w-3 h-3" />
              </a>
            )}
            {canvaLink && (
              <a
                href={canvaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/30 transition-all text-sm"
              >
                <SiCanva className="w-4 h-4" />
                Open in Canva
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

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(filteredWorks.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 4000);

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
    <section className="w-full py-16">
      <div className={`transition-all duration-300 ${selectedDesign ? "filter blur-sm pointer-events-none" : ""}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Design Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Showcase of my creative design work including social media graphics, UI mockups, branding, and digital illustrations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentSlide(0);
              }}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category
                  ? "bg-cyan-500 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Auto-play Control */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <FiImage className="w-4 h-4" />
              {filteredWorks.length} designs
            </div>
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 text-sm transition-all"
            >
              {isAutoPlay ? <FiPause className="w-4 h-4" /> : <FiPlay className="w-4 h-4" />}
              Auto-play
            </button>
          </div>

          {/* Slider */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              {getCurrentSlideItems().map(design => (
                <DesignCard
                  key={design.id}
                  design={design}
                  onClick={() => setSelectedDesign(design)}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-cyan-400" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Tools Used */}
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm mb-3">Tools I use for design</p>
            <div className="flex justify-center items-center gap-4">
              {["Figma", "Canva", "Photoshop"].map(tool => {
                const { icon: Icon, color } = getToolData(tool);
                return (
                  <div key={tool} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                    <Icon className="w-5 h-5" style={{ color }} />
                    <span className="text-white/80 text-sm">{tool}</span>
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