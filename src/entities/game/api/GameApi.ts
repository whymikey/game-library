import type { Game, GameDetails } from "../types/index";

export const fetchGames = async (): Promise<Game[]> => {
  try {
    const res = await fetch("https://www.freetogame.com/api/games");

    if (!res.ok) {
      throw new Error(`Ошибка HTTP: ${res.status}`);
    }

    const data = await res.json();
    return data as Game[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchGameById = async (id: string): Promise<GameDetails> => {
  try {
    const res = await fetch(`https://www.freetogame.com/api/game?id=${id}`);
    if (!res.ok) throw new Error("Ошибка при загрузке игры");
    const data = await res.json();
    return data as GameDetails;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
