export interface Character {
  name: string;
  description: string;
  ability: string;
  color: string;
}

export interface Affinity {
  kindness: number;
  curiosity: number;
  courage: number;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  image?: string;
  emoji: string;
}

export interface Choice {
  text: string;
  affinityChange: Partial<Affinity>;
  nextSceneId?: string;
}

export interface Scene {
  id: string;
  locationId: string;
  text: string;
  choices: Choice[];
  character?: string;
  isSpecial?: boolean;
  specialType?: 'birthday' | 'friendship' | 'letter';
}

export interface GameState {
  currentScene: Scene;
  affinity: Affinity;
  visitedScenes: string[];
  currentDay: number;
  unlockedLocations: string[];
}
