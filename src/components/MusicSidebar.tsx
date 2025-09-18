import { Home, Search, Library, Plus, Heart, Music, Headphones, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MusicSidebar() {
  const mainNavItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Search", active: false },
    { icon: Library, label: "Your Library", active: false },
  ];

  const libraryItems = [
    { icon: Plus, label: "Create Playlist" },
    { icon: Heart, label: "Liked Songs", count: 127 },
    { icon: Music, label: "Recently Played" },
    { icon: Headphones, label: "Downloaded", count: 45 },
  ];

  const playlists = [
    "Chill Vibes",
    "Workout Mix",
    "Jazz Classics",
    "Electronic Beats",
    "Acoustic Sessions",
    "Hip Hop Essentials",
    "Rock Anthems",
    "Focus Flow",
  ];

  return (
    <aside className="w-[280px] h-screen bg-background-subtle border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-text-primary">Samos Music</h1>
            <p className="text-xs text-text-muted">by Samos Global Tech</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 space-y-2">
        {mainNavItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={`w-full justify-start h-10 px-3 ${
              item.active 
                ? "bg-surface text-samos-primary font-medium" 
                : "text-text-secondary hover:text-text-primary hover:bg-surface/50"
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </Button>
        ))}
      </nav>

      <Separator className="my-4 mx-4 bg-border" />

      {/* Library Section */}
      <div className="px-4 space-y-2">
        {libraryItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-between h-10 px-3 text-text-secondary hover:text-text-primary hover:bg-surface/50"
          >
            <div className="flex items-center">
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </div>
            {item.count && (
              <span className="text-xs bg-surface px-2 py-1 rounded-full">
                {item.count}
              </span>
            )}
          </Button>
        ))}
      </div>

      <Separator className="my-4 mx-4 bg-border" />

      {/* Playlists */}
      <div className="flex-1 px-4">
        <h3 className="text-sm font-medium text-text-muted mb-3 px-3">Your Playlists</h3>
        <ScrollArea className="h-full">
          <div className="space-y-1">
            {playlists.map((playlist) => (
              <Button
                key={playlist}
                variant="ghost"
                className="w-full justify-start h-9 px-3 text-text-secondary hover:text-text-primary hover:bg-surface/50 text-sm"
              >
                <Users className="w-4 h-4 mr-3" />
                {playlist}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-border">
        <div className="bg-gradient-surface rounded-lg p-4 text-center">
          <h4 className="text-sm font-medium text-text-primary mb-2">Upgrade to Premium</h4>
          <p className="text-xs text-text-muted mb-3">Unlimited music, ad-free listening</p>
          <Button 
            size="sm" 
            className="w-full bg-samos-primary hover:bg-samos-primary-dark text-white font-medium"
          >
            Upgrade Now
          </Button>
        </div>
      </div>
    </aside>
  );
}