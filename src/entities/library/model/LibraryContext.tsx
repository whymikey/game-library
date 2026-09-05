import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Game } from "../../game/types/index";

interface LibraryContextType {
  savedGame: Game[];
  addGame: (game: Game) => void;
  removeGame: (gameId: number) => void;
  isGameSaved: (gameId: number) => boolean;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [savedGame, setSavedGames] = useState<Game[]>([]);

  const addGame = (game: Game) => {
    if (!savedGame.find((g) => g.id === game.id)) {
      setSavedGames([...savedGame, game]);
    }
  };

  const removeGame = (gameId: number) => {
    setSavedGames(savedGame.filter((g) => g.id !== gameId));
  };

  const isGameSaved = (gameId: number) => {
    return savedGame.some((g) => g.id === gameId);
  };

  return (
    <LibraryContext.Provider
      value={{ savedGame, addGame, removeGame, isGameSaved }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibrary должен использоваться внутри LibraryProvider");
  }
  return context;
};
