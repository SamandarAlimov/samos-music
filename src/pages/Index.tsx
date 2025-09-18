import { MusicSidebar } from "@/components/MusicSidebar";
import { MusicPlayer } from "@/components/MusicPlayer";
import { FeaturedSection } from "@/components/FeaturedSection";
import { TrackList } from "@/components/TrackList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockTracks = [
  {
    id: "1",
    title: "Digital Dreams",
    artist: "Electronic Collective",
    album: "Synthesis",
    duration: "4:05",
    plays: 2450000,
    liked: true,
    explicit: false,
  },
  {
    id: "2", 
    title: "Midnight Jazz",
    artist: "Blue Note Quartet",
    album: "After Hours",
    duration: "5:32",
    plays: 1200000,
    liked: false,
    explicit: false,
  },
  {
    id: "3",
    title: "Electric Soul",
    artist: "Nova Sounds",
    album: "Future Funk",
    duration: "3:48",
    plays: 890000,
    liked: true,
    explicit: true,
  },
  {
    id: "4",
    title: "Cosmic Journey",
    artist: "Space Echo",
    album: "Interstellar",
    duration: "6:15",
    plays: 3200000,
    liked: false,
    explicit: false,
  },
  {
    id: "5",
    title: "Urban Pulse",
    artist: "City Lights",
    album: "Metropolitan",
    duration: "4:22",
    plays: 1800000,
    liked: true,
    explicit: true,
  },
];

const Index = () => {
  return (
    <div className="h-screen bg-background flex overflow-hidden">
      {/* Sidebar */}
      <MusicSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-background-subtle/80 backdrop-blur-xl border-b border-border p-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="w-8 h-8 rounded-full bg-surface">
                <ChevronDown className="w-4 h-4 rotate-90" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 rounded-full bg-surface">
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </Button>
            </div>
            
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
              <Input 
                placeholder="Search for songs, artists, or albums..."
                className="pl-10 bg-surface border-border focus:border-samos-primary"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5 text-text-muted" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-samos-primary rounded-full"></div>
            </Button>
            
            <Button variant="ghost" className="flex items-center space-x-2 bg-surface px-3 py-2 rounded-full">
              <div className="w-6 h-6 bg-samos-primary rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-text-primary">Profile</span>
              <ChevronDown className="w-4 h-4 text-text-muted" />
            </Button>
          </div>
        </header>
        
        {/* Main Content Area */}
        <ScrollArea className="flex-1">
          <main className="p-6 pb-32">
            <FeaturedSection />
            
            {/* Popular Tracks Section */}
            <section className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-primary">Popular right now</h2>
                <Button variant="ghost" className="text-text-muted hover:text-text-primary">
                  Show all
                </Button>
              </div>
              
              <TrackList tracks={mockTracks} />
            </section>
          </main>
        </ScrollArea>
      </div>
      
      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;