import { Scene } from "@/models/scene.models";

export interface Story {
  id: string; // UUID
  title: string;
  author: string;
  hasWatermark: boolean; // TODO: initially has Bitrock logo
  // watermarkImageSrc: string;
  scenes: Array<Scene>;
}
