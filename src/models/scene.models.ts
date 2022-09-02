import { Character } from "@/models/character.models";

export interface Scene {
  id: string; // UUID
  title?: string;
  titleBackgroundColor?: string;
  backgroundImageSrc?: string;
  backgroundImageIsFlipped?: boolean;
  characters?: Array<Character>;
}
