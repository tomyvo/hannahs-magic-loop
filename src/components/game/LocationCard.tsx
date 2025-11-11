import { Location } from "@/types/game";
import { Card } from "@/components/ui/card";

interface LocationCardProps {
  location: Location;
  isActive: boolean;
}

export const LocationCard = ({ location, isActive }: LocationCardProps) => {
  return (
    <Card
      className={`p-4 transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-br from-primary/20 to-secondary/20 border-primary shadow-magical scale-105"
          : "bg-card/60 backdrop-blur-sm hover:bg-card/80"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`text-3xl ${isActive ? "animate-float" : ""}`}>
          {location.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-foreground truncate">
            {location.name}
          </h4>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {location.description}
          </p>
        </div>
      </div>
    </Card>
  );
};
