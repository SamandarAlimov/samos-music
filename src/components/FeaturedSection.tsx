import { Play, Heart, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-music-bg.jpg";

interface FeaturedAlbum {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  type: "playlist" | "album" | "artist";
}

export function FeaturedSection() {
  const featuredAlbums: FeaturedAlbum[] = [
    { id: "1", title: "Today's Top Hits", artist: "Popular worldwide", artwork: "/placeholder.svg", type: "playlist" },
    { id: "2", title: "Chill Indie Rock", artist: "Relax and unwind", artwork: "/placeholder.svg", type: "playlist" },
    { id: "3", title: "Electronic Dreams", artist: "Synthwave Collection", artwork: "/placeholder.svg", type: "album" },
    { id: "4", title: "Jazz Classics", artist: "Timeless jazz standards", artwork: "/placeholder.svg", type: "playlist" },
    { id: "5", title: "Acoustic Sessions", artist: "Unplugged favorites", artwork: "/placeholder.svg", type: "album" },
    { id: "6", title: "Hip Hop Essentials", artist: "Best of hip hop", artwork: "/placeholder.svg", type: "playlist" },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div 
        className="relative h-80 rounded-lg overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-end p-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-white/80 uppercase font-medium tracking-wide">
                Featured Playlist
              </p>
              <h1 className="text-5xl font-bold text-white leading-tight">
                Samos Weekly Mix
              </h1>
              <p className="text-lg text-white/90 max-w-md">
                Your personalized playlist updated every week with fresh discoveries and favorites
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                size="lg"
                className="bg-samos-primary hover:bg-samos-primary-light text-white rounded-full h-14 px-8 font-semibold text-base"
              >
                <Play className="w-5 h-5 mr-2 ml-1" />
                Play
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full h-14 px-6"
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full h-14 px-6"
              >
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-white/70">
              <span>Samos Music</span>
              <span>•</span>
              <span>127 songs</span>
              <span>•</span>
              <span>8h 32m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Good evening</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Liked Songs", "Recently Played", "Discover Weekly", "Release Radar", "Chill Mix", "Your Top Songs 2024"].map((title) => (
            <Card key={title} className="group bg-surface hover:bg-surface-hover transition-colors cursor-pointer overflow-hidden">
              <div className="flex items-center p-3">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text-primary truncate">{title}</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity bg-samos-primary hover:bg-samos-primary-light text-white rounded-full w-12 h-12 p-0"
                >
                  <Play className="w-5 h-5 ml-0.5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Playlists */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Made for you</h2>
          <Button variant="ghost" className="text-text-muted hover:text-text-primary">
            Show all
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {featuredAlbums.map((album) => (
            <Card 
              key={album.id} 
              className="group bg-background-card hover:bg-surface transition-all duration-300 cursor-pointer overflow-hidden hover-lift"
            >
              <div className="p-4">
                <div className="relative mb-4">
                  <div className="aspect-square bg-surface rounded-lg overflow-hidden">
                    <img 
                      src={album.artwork} 
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-samos-primary hover:bg-samos-primary-light text-white rounded-full w-12 h-12 p-0 shadow-lg"
                  >
                    <Play className="w-5 h-5 ml-0.5" />
                  </Button>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-semibold text-text-primary text-sm truncate">
                    {album.title}
                  </h3>
                  <p className="text-text-muted text-xs truncate">
                    {album.artist}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section className="pb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Recently played</h2>
          <Button variant="ghost" className="text-text-muted hover:text-text-primary">
            Show all
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {featuredAlbums.slice(0, 5).map((album) => (
            <Card 
              key={`recent-${album.id}`} 
              className="group bg-background-card hover:bg-surface transition-all duration-300 cursor-pointer overflow-hidden hover-lift"
            >
              <div className="p-4">
                <div className="relative mb-4">
                  <div className="aspect-square bg-surface rounded-lg overflow-hidden">
                    <img 
                      src={album.artwork} 
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-samos-primary hover:bg-samos-primary-light text-white rounded-full w-12 h-12 p-0 shadow-lg"
                  >
                    <Play className="w-5 h-5 ml-0.5" />
                  </Button>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-semibold text-text-primary text-sm truncate">
                    {album.title}
                  </h3>
                  <p className="text-text-muted text-xs truncate">
                    {album.artist}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}