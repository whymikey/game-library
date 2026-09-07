import { useLibrary } from "../entities/library/model/LibraryContext";
import GameCard from "../entities/game/ui/GameCard";
import AddToLibraryButton from "../features/library-control/ui/AddToLibraryButton";

const UserLibrary = () => {
  const { savedGames } = useLibrary();
  return (
    <main className="bg-[#111] px-12 pt-10 pb-21 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {savedGames.map((game) => (
          <GameCard
            id={game.id}
            key={game.id}
            title={game.title}
            thumbnail={game.thumbnail}
            genre={game.genre}
            actionSlot={<AddToLibraryButton game={game}/>}
          />
        ))}
      </div>
    </main>
  );
};

export default UserLibrary;
