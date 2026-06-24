import type { ImageMetadata } from 'astro';

export interface AudioContent {
  id: string;
  title: string;
  audioUrl: string;
  thumbnail: ImageMetadata | string;
  category: string; // Now refers to Series name
  series?: string;
  duration: string;
  description: string;
  dominantColor?: string;
  arabicTitle?: string;
}

export interface CategoryData {
  name: string;
  color: string;
  description: string;
  image: ImageMetadata | string;
  episodes: number;
}

export interface PlayerState {
  currentAudio: AudioContent | null;
  isPlaying: boolean;
  progress: number;
}
