import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-black relative flex flex-col text-white justify-center items-center text-center px-16 w-full">
      <div className="border border-[#7b2fff]/40 bg-[#7b2fff]/20 text-[#b57bff] px-3 py-0.75 text-[11px] w-52 rounded-md inline-block my-6">
        ✦ YOUR UNIVERSE OF GAMES
      </div>
      <div className="text-[clamp(2.4rem,5vw,4.2rem)] font-black font-orbitron flex flex-col leading-[1.05] mb-5">
        Discover. Play.{" "}
        <span className="text-[#00d4ff] [text-shadow:0_0_10px_#00d4ffcc,0_0_30px_#00d4ff66] leading-[1.05]">
          Conquer.
        </span>
      </div>
      <div className="mb-5 text-[rgb(119,119,119)] text-[16px] font-normal leading-[1.7]">
        <p>Thousands of worlds at your fingertips. Build your library, track</p>
        <p>your progress, and find your next obsession.</p>
      </div>
      <div className="flex gap-3 flex-wrap justify-center ">
        <button className="text-[13px] font-orbitron font-bold text-white py-2 px-9 bg-[linear-gradient(135deg,#00d4ff,#7b2fff)] rounded-lg">
          EXPLORE STORE
        </button>
        <Link to="/library">
          <button className="text-[13px] font-orbitron font-bold text-[#00d4ff] py-2 px-9 border border-[#00d4ff] rounded-lg cursor-pointer">
            MY LIBRARY
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-13 pt-8 mb-4">
        <div className="banner-stat-games">
          <span className="text-[rgb(0,212,255)] text-2xl font-bold font-orbitron">
            12,400+
          </span>
          <p className="mt-1 text-[rgb(68,68,68)] text-xs">GAMES</p>
        </div>
        <div className="banner-stat-players">
          <span className="text-[rgb(0,212,255)] text-2xl font-bold font-orbitron">
            3.2M
          </span>
          <p className="mt-1 text-[rgb(68,68,68)] text-xs">PLAYERS</p>
        </div>
        <div className="banner-stat-uptime">
          <span className="text-[rgb(0,212,255)] text-2xl font-bold font-orbitron">
            98%
          </span>
          <p className="mt-1 text-[rgb(68,68,68)] text-xs">UPTIME</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
