import { Character } from "@/types/game";

export const characters: Record<string, Character> = {
  hannah: {
    name: "Hannah",
    description: "Eine freundliche, neugierige und mutige junge Zauberin",
    ability: "Lichtmagie - kann Dunkelheit erhellen und Wahrheit enthüllen",
    color: "magic-pink",
  },
  katharina: {
    name: "Katharina",
    description: "Hannahs beste Freundin, kreativ und voller Fantasie",
    ability: "Traummagie - kann in Träume reisen und Hoffnung schenken",
    color: "magic-lavender",
  },
  ken: {
    name: "Ken",
    description: "Loyal, ruhig und weise über seine Jahre hinaus",
    ability: "Zeitmagie - kann Momente einfrieren und Erinnerungen bewahren",
    color: "magic-blue",
  },
};
