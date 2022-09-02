import { Position } from "@/models/position.models";

export interface Character {
  id: string; // UUID
  name: string;
  imageSrc: string;
  sentence: string;
  isFlipped: boolean;
  position: Position;
}
