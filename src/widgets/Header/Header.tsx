import avatarImg from "../../shared/assets/avatar.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#111] w-full mx-auto flex items-center justify-between p-6 lg:px-8 text-[#aaaaaa] font-orbitron">
      <Link to="/">
        <div className="uppercase text-[20px] font-black">
          <span className="text-[#00d4ff] [text-shadow:0_0_10px_rgba(0,212,255,0.8),0_0_30px_rgba(0,212,255,0.4)]">
            Nexus
          </span>
          Vault
        </div>
      </Link>
      <input
        id="input"
        type="text"
        placeholder="Search games..."
        className="w-1/2 font-sans bg-white/5 border border-white/10 rounded-md py-1.5 px-3 focus:outline-none focus-visible:outline-none"
      />
      <div className="flex flex-wrap gap-4 justify-center items-center pl-2">
        <Link to="/library">
          <span className="text-[12px] font-bold ">MY LIBRARY</span>
        </Link>
        <div className="user-avatar">
          <img
            src={avatarImg}
            alt="user's avatar"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
