import { useState } from "react";
import { Play, Pause, Heart, MoreHorizontal, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  plays: number;
  liked: boolean;
  explicit?: boolean;
}

interface TrackListProps {
  tracks: Track[];
  showHeader?: boolean;
}

export function TrackList({ tracks, showHeader = true }: TrackListProps) {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());

  const handlePlay = (trackId: string) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
    }
  };

  const toggleLike = (trackId: string) => {
    const newLiked = new Set(likedTracks);
    if (newLiked.has(trackId)) {
      newLiked.delete(trackId);
    } else {
      newLiked.add(trackId);
    }
    setLikedTracks(newLiked);
  };

  const formatPlays = (plays: number) => {
    if (plays >= 1000000) {
      return `${(plays / 1000000).toFixed(1)}M`;
    } else if (plays >= 1000) {
      return `${(plays / 1000).toFixed(1)}K`;
    }
    return plays.toString();
  };

  return (
    <div className="bg-background-card rounded-lg">
      {showHeader && (
        <div className="grid grid-cols-12 gap-4 p-4 pb-2 text-xs text-text-muted uppercase font-medium border-b border-border">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-3">Album</div>
          <div className="col-span-2">Plays</div>
          <div className="col-span-1 flex justify-end">
            <Clock className="w-4 h-4" />
          </div>
        </div>
      )}
      
      <div className="space-y-1">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className="group grid grid-cols-12 gap-4 p-4 hover:bg-surface/50 rounded-lg transition-colors cursor-pointer"
            onDoubleClick={() => handlePlay(track.id)}
          >
            {/* Track Number / Play Button */}
            <div className="col-span-1 flex items-center">
              <div className="relative">
                <span className="group-hover:opacity-0 text-text-muted text-sm">
                  {index + 1}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePlay(track.id)}
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 w-8 h-8 p-0 transition-opacity"
                >
                  {playingTrack === track.id ? (
                    <Pause className="w-4 h-4 text-samos-primary" />
                  ) : (
                    <Play className="w-4 h-4 text-text-primary" />
                  )}
                </Button>
              </div>
            </div>

            {/* Title & Artist */}
            <div className="col-span-5 flex items-center min-w-0">
              <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className={`text-sm font-medium truncate ${
                    playingTrack === track.id ? 'text-samos-primary' : 'text-text-primary'
                  }`}>
                    {track.title}
                  </h4>
                  {track.explicit && (
                    <Badge variant="secondary" className="text-xs px-1 py-0 h-4">
                      E
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-text-muted truncate">{track.artist}</p>
              </div>
            </div>

            {/* Album */}
            <div className="col-span-3 flex items-center">
              <p className="text-sm text-text-muted truncate hover:text-text-primary cursor-pointer">
                {track.album}
              </p>
            </div>

            {/* Play Count */}
            <div className="col-span-2 flex items-center">
              <span className="text-sm text-text-muted">
                {formatPlays(track.plays)}
              </span>
            </div>

            {/* Duration & Actions */}
            <div className="col-span-1 flex items-center justify-end space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleLike(track.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1"
              >
                <Heart 
                  className={`w-4 h-4 ${
                    likedTracks.has(track.id) || track.liked
                      ? 'fill-error text-error' 
                      : 'text-text-muted hover:text-text-primary'
                  }`} 
                />
              </Button>
              
              <span className="text-sm text-text-muted w-12 text-right">
                {track.duration}
              </span>
              
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1"
              >
                <MoreHorizontal className="w-4 h-4 text-text-muted" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}