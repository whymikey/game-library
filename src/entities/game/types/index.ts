export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  genre: string;
}

export interface GameDetails extends Game {
  description: string;
  developer: string;
  publisher: string;
  release_date: string;
  platform: string;
  game_url: string;
  minimum_system_requirements?: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots?: {
    id: number;
    image: string;
  }[];
}
