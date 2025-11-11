import { Scene, Affinity } from "@/types/game";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CharacterPortrait } from "./CharacterPortrait";
import { LocationCard } from "./LocationCard";
import { locations } from "@/data/locations";
import { Sparkles, Heart, MessageCircle } from "lucide-react";

interface GameSceneProps {
  scene: Scene;
  onChoice: (choiceIndex: number) => void;
}

export const GameScene = ({ scene, onChoice }: GameSceneProps) => {
  const location = locations[scene.locationId];
  
  const getSpecialIcon = () => {
    if (scene.specialType === "birthday") return "🎂";
    if (scene.specialType === "friendship") return "💕";
    if (scene.specialType === "letter") return "💌";
    return null;
  };

  const specialIcon = getSpecialIcon();

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Location Header */}
      <LocationCard location={location} isActive={true} />

      {/* Special Event Badge */}
      {scene.isSpecial && specialIcon && (
        <div className="flex items-center justify-center">
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-magic-pink via-magic-lavender to-magic-blue text-primary-foreground font-semibold text-sm shadow-magical animate-glow-pulse flex items-center gap-2">
            <span className="text-lg">{specialIcon}</span>
            <span>Besonderes Event</span>
          </div>
        </div>
      )}

      {/* Character Portrait */}
      {scene.character && <CharacterPortrait characterName={scene.character} />}

      {/* Scene Text */}
      <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-magical border border-border/50">
        <div className="flex items-start gap-3 mb-4">
          <MessageCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <p className="text-foreground leading-relaxed whitespace-pre-line flex-1">
            {scene.text}
          </p>
        </div>
      </Card>

      {/* Choices */}
      <div className="space-y-3">
        {scene.choices.map((choice, index) => (
          <Button
            key={index}
            onClick={() => onChoice(index)}
            className="w-full h-auto py-4 px-6 text-left justify-start bg-gradient-to-r from-secondary/80 to-accent/60 hover:from-secondary hover:to-accent border border-border/50 shadow-soft hover:shadow-magical transition-all duration-300 hover:scale-[1.02] group"
            variant="outline"
          >
            <div className="flex items-start gap-3 w-full">
              <div className="flex-shrink-0 mt-1">
                {choice.affinityChange.kindness && choice.affinityChange.kindness > 0 && (
                  <Heart className="h-4 w-4 text-kindness" />
                )}
                {choice.affinityChange.curiosity && choice.affinityChange.curiosity > 0 && (
                  <Sparkles className="h-4 w-4 text-curiosity" />
                )}
                {choice.affinityChange.courage && choice.affinityChange.courage > 0 && (
                  <Sparkles className="h-4 w-4 text-courage" />
                )}
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {choice.text}
              </span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
