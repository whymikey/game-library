import type { ReactNode } from "react";

interface GameCardProps {
  title: string;
  thumbnail: string;
  genre: string;
  actionSlot?: ReactNode;
}

const GameCard = ({ title, thumbnail, genre, actionSlot }: GameCardProps) => {
  return (
    <div className="bg-[#111] border border-white/10 rounded-md overflow-hidden flex flex-col hover:border-[#00d4ff]/50 transition-colors duration-300">
      <img src={thumbnail} alt={title} className="w-full h-full object-cover" />

      <div className="p-4 flex flex-col gap-2">
        <div className="">
          <span className="text-[#b57bff] text-[11px] font-normal font-mono uppercase bg-[rgba(123,47,255,0.2)] px-1.5 py-0.5 rounded">
            {genre}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-white font-orbitron font-semibold text-[14px] truncate">
            {title}
          </h3>
          {actionSlot}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
