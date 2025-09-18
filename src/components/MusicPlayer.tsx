import { useState } from "react";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Shuffle, 
  Repeat,
  Heart,
  Maximize2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  artwork: string;
  duration: number;
}

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(125);
  const [volume, setVolume] = useState([75]);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0: off, 1: all, 2: one

  const currentTrack: Track = {
    id: "1",
    title: "Digital Dreams",
    artist: "Electronic Collective",
    album: "Synthesis",
    artwork: "/placeholder.svg",
    duration: 245
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / currentTrack.duration) * 100;

  return (
    <Card className="fixed bottom-0 left-0 right-0 h-[90px] bg-player-bg border-t border-border rounded-none z-50">
      <div className="h-full flex items-center justify-between px-4">
        {/* Track Info */}
        <div className="flex items-center space-x-4 w-1/4 min-w-0">
          <div className="w-14 h-14 bg-surface rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={currentTrack.artwork} 
              alt={currentTrack.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-medium text-text-primary truncate">
              {currentTrack.title}
            </h4>
            <p className="text-xs text-text-muted truncate">
              {currentTrack.artist}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            className="p-2"
          >
            <Heart 
              className={`w-4 h-4 ${isLiked ? 'fill-error text-error' : 'text-text-muted'}`} 
            />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex-1 max-w-2xl">
          {/* Control Buttons */}
          <div className="flex items-center justify-center space-x-4 mb-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsShuffled(!isShuffled)}
              className={`p-2 ${isShuffled ? 'text-samos-primary' : 'text-text-muted'}`}
            >
              <Shuffle className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-text-primary hover:bg-surface"
            >
              <SkipBack className="w-5 h-5" />
            </Button>
            
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-samos-primary hover:bg-samos-primary-light rounded-full flex items-center justify-center"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-text-primary hover:bg-surface"
            >
              <SkipForward className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setRepeatMode((repeatMode + 1) % 3)}
              className={`p-2 ${repeatMode > 0 ? 'text-samos-primary' : 'text-text-muted'}`}
            >
              <Repeat className="w-4 h-4" />
              {repeatMode === 2 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-samos-primary rounded-full"></span>
              )}
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-3">
            <span className="text-xs text-text-muted w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 group cursor-pointer">
              <div className="h-1 bg-surface rounded-full relative overflow-hidden">
                <div 
                  className="h-full bg-samos-primary rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div 
                    className="absolute top-1/2 w-3 h-3 bg-samos-primary rounded-full transform -translate-y-1/2 -translate-x-1/2"
                    style={{ left: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <span className="text-xs text-text-muted w-10">
              {formatTime(currentTrack.duration)}
            </span>
          </div>
        </div>

        {/* Volume & Extra Controls */}
        <div className="flex items-center space-x-3 w-1/4 justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="p-2 text-text-muted hover:text-text-primary"
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <Volume2 className="w-4 h-4 text-text-muted" />
            <div className="w-20">
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}