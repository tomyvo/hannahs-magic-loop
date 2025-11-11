import { Location } from "@/types/game";

export const locations: Record<string, Location> = {
  library: {
    id: "library",
    name: "Die Flüsternde Bibliothek",
    description: "Alte Bücher flüstern Geheimnisse, während schwebende Kerzen sanftes Licht spenden",
    emoji: "📚",
  },
  garden: {
    id: "garden",
    name: "Der Schwebende Garten",
    description: "Bunte Pastellblumen schweben in der Luft und verströmen magischen Duft",
    emoji: "🌷",
  },
  roof: {
    id: "roof",
    name: "Das Wunschdach",
    description: "Bei Sonnenuntergang erscheinen hier freundliche Geister und erfüllen Wünsche",
    emoji: "🌅",
  },
  mirror: {
    id: "mirror",
    name: "Die Spiegelhalle",
    description: "Spiegelbilder bewegen sich unabhängig und sprechen weise Worte",
    emoji: "🪞",
  },
  entrance: {
    id: "entrance",
    name: "Der Zauberhafte Eingang",
    description: "Schwebende Laternen begrüßen jeden neuen Tag in der magischen Schule",
    emoji: "✨",
  },
};
