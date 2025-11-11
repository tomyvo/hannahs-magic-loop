import { useState, useEffect } from "react";
import { GameScene } from "@/components/game/GameScene";
import { AffinityDisplay } from "@/components/game/AffinityDisplay";
import { Affinity, GameState } from "@/types/game";
import { scenes } from "@/data/scenes";
import { Button } from "@/components/ui/button";
import { Home, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Game = () => {
  const navigate = useNavigate();
  
  const [gameState, setGameState] = useState<GameState>({
    currentScene: scenes.start,
    affinity: {
      kindness: 0,
      curiosity: 0,
      courage: 0,
    },
    visitedScenes: ["start"],
    currentDay: 1,
    unlockedLocations: ["entrance"],
  });

  useEffect(() => {
    // Show welcome message on first load
    toast.success("Willkommen in der magischen Schule, Hannah! 🌸✨");
  }, []);

  const handleChoice = (choiceIndex: number) => {
    const choice = gameState.currentScene.choices[choiceIndex];
    
    // Update affinity
    const newAffinity: Affinity = {
      kindness: gameState.affinity.kindness + (choice.affinityChange.kindness || 0),
      curiosity: gameState.affinity.curiosity + (choice.affinityChange.curiosity || 0),
      courage: gameState.affinity.courage + (choice.affinityChange.courage || 0),
    };

    // Show affinity change toast
    if (choice.affinityChange.kindness && choice.affinityChange.kindness > 0) {
      toast.success(`💕 Freundlichkeit +${choice.affinityChange.kindness}`);
    }
    if (choice.affinityChange.curiosity && choice.affinityChange.curiosity > 0) {
      toast.success(`✨ Neugier +${choice.affinityChange.curiosity}`);
    }
    if (choice.affinityChange.courage && choice.affinityChange.courage > 0) {
      toast.success(`🔥 Mut +${choice.affinityChange.courage}`);
    }

    // Navigate to next scene or return to menu
    if (choice.nextSceneId) {
      const nextScene = scenes[choice.nextSceneId];
      if (nextScene) {
        setGameState({
          ...gameState,
          currentScene: nextScene,
          affinity: newAffinity,
          visitedScenes: [...gameState.visitedScenes, choice.nextSceneId],
          unlockedLocations: [
            ...gameState.unlockedLocations,
            nextScene.locationId,
          ],
        });
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Return to menu
      navigate("/");
    }
  };

  const handleRestart = () => {
    setGameState({
      currentScene: scenes.start,
      affinity: {
        kindness: 0,
        curiosity: 0,
        courage: 0,
      },
      visitedScenes: ["start"],
      currentDay: gameState.currentDay + 1,
      unlockedLocations: ["entrance"],
    });
    toast.success("Ein neuer Tag beginnt! 🌅");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-warm-light to-secondary/30 relative overflow-hidden">
      {/* Magical background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-magic-pink/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-magic-lavender/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-magic-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-magical"
          >
            <Home className="h-4 w-4 mr-2" />
            Hauptmenü
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Tag {gameState.currentDay}</span>
            <Button
              onClick={handleRestart}
              variant="outline"
              size="sm"
              className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-magical"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Neustart
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Game Area */}
          <div className="lg:col-span-2">
            <GameScene scene={gameState.currentScene} onChoice={handleChoice} />
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <AffinityDisplay affinity={gameState.affinity} />
            
            {/* Stats Card */}
            <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm shadow-soft border border-border/50">
              <h3 className="text-sm font-semibold text-foreground/80 mb-3">📊 Deine Statistiken</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Besuchte Orte:</span>
                  <span className="font-semibold text-foreground">{gameState.unlockedLocations.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Erlebte Szenen:</span>
                  <span className="font-semibold text-foreground">{gameState.visitedScenes.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Aktueller Tag:</span>
                  <span className="font-semibold text-foreground">{gameState.currentDay}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
