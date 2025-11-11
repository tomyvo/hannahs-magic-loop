import { Affinity } from "@/types/game";
import { Heart, Sparkles, Flame } from "lucide-react";

interface AffinityDisplayProps {
  affinity: Affinity;
}

export const AffinityDisplay = ({ affinity }: AffinityDisplayProps) => {
  const maxValue = 100;

  const affinityItems = [
    {
      name: "Freundlichkeit",
      value: affinity.kindness,
      icon: Heart,
      color: "kindness",
      bgColor: "bg-kindness/20",
    },
    {
      name: "Neugier",
      value: affinity.curiosity,
      icon: Sparkles,
      color: "curiosity",
      bgColor: "bg-curiosity/20",
    },
    {
      name: "Mut",
      value: affinity.courage,
      icon: Flame,
      color: "courage",
      bgColor: "bg-courage/20",
    },
  ];

  return (
    <div className="space-y-3 p-4 rounded-2xl bg-card/80 backdrop-blur-sm shadow-soft border border-border/50">
      <h3 className="text-sm font-semibold text-foreground/80 mb-3">✨ Deine magischen Eigenschaften</h3>
      {affinityItems.map(({ name, value, icon: Icon, color, bgColor }) => (
        <div key={name} className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Icon className={`h-4 w-4 text-${color}`} />
              <span className="font-medium text-foreground/90">{name}</span>
            </div>
            <span className="font-bold text-foreground/70">{value}</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full ${bgColor} transition-all duration-500 ease-out rounded-full`}
              style={{ 
                width: `${Math.min((value / maxValue) * 100, 100)}%`,
                background: `linear-gradient(90deg, hsl(var(--${color}) / 0.6), hsl(var(--${color})))`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
