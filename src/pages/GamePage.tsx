import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchGameById } from "../entities/game/api/GameApi";
import type { GameDetails } from "../entities/game/types/index";

const GamePage = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<GameDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadGame = async () => {
      try {
        setIsLoading(true);
        const data = await fetchGameById(id);
        setGame(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadGame();
  }, [id]);

  if (isLoading) return <div className="text-white p-10">Загрузка игры...</div>;
  if (!game) return <div className="text-white p-10">Игра не найдена</div>;

  return (
    <div className="bg-[#111] min-h-screen text-white p-10">
      <Link to="/" className="text-[#00d4ff] hover:underline mb-6 inline-block">
        ← Назад к играм
      </Link>

      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="rounded-lg w-full lg:w-1/3 object-cover h-fit shrink-0"
        />

        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-4xl font-orbitron font-bold">{game.title}</h1>
          <div className="flex gap-2">
            <span className="bg-[#222] px-3 py-1 rounded text-sm text-[#b57bff]">
              {game.genre}
            </span>
            <span className="bg-[#222] px-3 py-1 rounded text-sm">
              {game.platform}
            </span>
          </div>
          <p className="text-[#aaaaaa] leading-relaxed">{game.description}</p>

          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Разработчик:</h3>
            <p className="text-[#00d4ff]">{game.developer}</p>
          </div>
        </div>

        {game.screenshots && game.screenshots.length > 0 && (
          <div className="flex flex-col w-full lg:w-64 shrink-0">
            <h3 className="text-[#555] text-xs font-bold tracking-widest uppercase mb-4">
              Screenshots
            </h3>
            <div className="flex flex-col gap-4">
              {game.screenshots.map((img) => (
                <div
                  key={img.id}
                  className="rounded-md overflow-hidden aspect-video border border-white/[0.07] cursor-pointer hover:border-white/30 transition-colors duration-200"
                >
                  <img
                    src={img.image}
                    alt={`Screenshot ${img.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
