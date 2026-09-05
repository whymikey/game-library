import type { Game } from "../../../entities/game/types";
import { useLibrary } from "../../../entities/library/model/LibraryContext";

const AddToLibraryButton = ({ game }: { game: Game }) => {
  const { addGame, removeGame, isGameSaved } = useLibrary();

  const saved = isGameSaved(game.id);

  const handleClick = () => {
    if (saved) {
      removeGame(game.id);
    } else {
      addGame(game);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-7 h-7 rounded-full flex justify-center items-center leading-none pb-px cursor-pointer transition-colors border 
            ${
              saved
                ? "bg-[#00d4ff] text-black border-[#00d4ff]"
                : "bg-[rgba(0,212,255,0.08)] text-[#00d4ff] border-[rgba(0,212,255,0.4)] hover:bg-[rgba(0,212,255,0.2)]"
            }`}
    >
      {saved ? (
        "✓"
      ) : (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      )}
    </button>
  );
};

export default AddToLibraryButton;
