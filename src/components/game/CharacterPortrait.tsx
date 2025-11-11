import { characters } from "@/data/characters";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface CharacterPortraitProps {
  characterName: string;
}

export const CharacterPortrait = ({ characterName }: CharacterPortraitProps) => {
  const character = characters[characterName.toLowerCase()];
  
  if (!character) return null;

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
  };

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-card to-secondary/30 border border-border/50 shadow-soft animate-fade-in">
      <Avatar className={`h-12 w-12 border-2 border-${character.color} shadow-lg animate-glow-pulse`}>
        <AvatarFallback className={`bg-${character.color} text-primary-foreground font-bold`}>
          {getInitials(character.name)}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-sm text-foreground">
          {character.name}
        </h4>
        <p className="text-xs text-muted-foreground truncate">
          {character.description}
        </p>
      </div>
    </div>
  );
};
