"use client";
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  artist: string;
  src: string;
  cover?: string;
}

interface MusicPlayerProps {
  tracks: Track[];
}

export default function MusicPlayer({ tracks }: MusicPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.3); // Reduced default volume
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  // Auto-play when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current && !isLoaded) {
        audioRef.current.load();
        setIsLoaded(true);
        // Try to auto-play after a short delay
        setTimeout(() => {
          handleAutoPlay();
        }, 1000);
      }
    }, 2000); // Wait 2 seconds after page load

    return () => clearTimeout(timer);
  }, []);

  const handleAutoPlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.log('Auto-play prevented by browser policy');
      // Browser blocks auto-play, user needs to interact first
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleCanPlay = () => {
      // Try auto-play when audio can play
      if (!isPlaying && isLoaded) {
        handleAutoPlay();
      }
    };
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('ended', handleNext);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentTrackIndex, isLoaded]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Play error:', error);
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    // Auto-play next track
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    }, 100);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    // Auto-play previous track
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    }, 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    }, 100);
  };

  return (
    <div className="w-full">
      <div className="rounded-2xl p-4 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-cyan-400" />
            <h4 className="text-lg font-bold text-white/95">Music Player</h4>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>

        {/* Compact View */}
        <div className="space-y-3">
          {/* Current Track Info with Cover */}
          <div className="flex items-center gap-3">
            {/* Album Cover */}
            <div className="flex-shrink-0">
              {currentTrack.cover ? (
                <img
                  src={currentTrack.cover}
                  alt={currentTrack.title}
                  className="w-12 h-12 rounded-lg object-cover border border-white/20"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/20 flex items-center justify-center">
                  <Music className="w-6 h-6 text-cyan-400" />
                </div>
              )}
            </div>
            
            {/* Track Info */}
            <div className="flex-1 text-left">
              <h5 className="text-sm font-medium text-white/90 truncate">
                {currentTrack.title}
              </h5>
              <p className="text-xs text-gray-400 truncate">{currentTrack.artist}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <input
              type="range"
              min="0"
              max="100"
              value={duration ? (currentTime / duration) * 100 : 0}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={handlePrevious}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipBack size={16} />
            </button>
            
            <button
              onClick={togglePlay}
              className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-full transition-colors"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            
            <button
              onClick={handleNext}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipForward size={16} />
            </button>
          </div>

          {/* Expanded View */}
          {isExpanded && (
            <div className="pt-4 border-t border-white/10 space-y-4">
              {/* Volume Control */}
              <div className="flex items-center space-x-2">
                <button onClick={toggleMute} className="text-gray-400 hover:text-white">
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-gray-400 min-w-[30px]">
                  {Math.round(volume * 100)}%
                </span>
              </div>

              {/* Track List */}
              <div className="max-h-32 overflow-y-auto">
                <h6 className="text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  Playlist
                </h6>
                <div className="space-y-1">
                  {tracks.map((track, index) => (
                    <button
                      key={track.id}
                      onClick={() => handleTrackSelect(index)}
                      className={`w-full text-left p-2 rounded-lg transition-colors ${
                        index === currentTrackIndex
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {track.cover ? (
                          <img
                            src={track.cover}
                            alt={track.title}
                            className="w-8 h-8 rounded object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-8 h-8 rounded bg-gray-600 flex items-center justify-center">
                            <Music className="w-4 h-4" />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="text-xs font-medium truncate">{track.title}</div>
                          <div className="text-xs opacity-75 truncate">{track.artist}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => {
          console.error('Audio error:', e);
        }}
      />

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}