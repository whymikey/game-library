import { useState, useEffect, useRef } from "react";
import fetchGames from "../../entities/game/api/GameApi";
import GameCard from "../../entities/game/ui/GameCard";
import type { Game } from "../../entities/game/types";
import AddToLibraryButton from "../../features/library-control/ui/AddToLibraryButton";

const GameCards = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(20);

  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setIsLoading(true);
        const data = await fetchGames();
        setGames(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Неизвестная ошибка");
      } finally {
        setIsLoading(false);
      }
    };
    loadGames();
  }, []);

  useEffect(() => {

    if (isLoading) return

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setVisibleCount((prev) => prev + 20);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  const visibleGames = games.slice(0, visibleCount);

  if (isLoading) return <div>Идёт загрузка игр...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="bg-[#111] px-12 pt-10 pb-21">
      <div className="flex flex-row items-baseline gap-4 mb-8">
        <span className="text-white font-orbitron font-bold text-2xl">
          Trending Games
        </span>
        <span className="w-10 h-0.5 bg-[linear-gradient(90deg,rgb(0,212,255),transparent)]"></span>
        <span className=" text-[11px] text-[#555555] font-mono">
          {games.length} titles
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {visibleGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            thumbnail={game.thumbnail}
            genre={game.genre}
            actionSlot={<AddToLibraryButton game={game} />}
          />
        ))}
      </div>
      {visibleCount < games.length && (
        <div
          ref={loaderRef}
          className="h-10 w-full mt-4 flex justify-center items-center"
        >
          <span className="text-[#aaaaaa] font-orbitron text-sm">
            Loading more...
          </span>
        </div>
      )}
    </div>
  );
};

export default GameCards;
