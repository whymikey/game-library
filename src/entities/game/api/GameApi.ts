const fetchGames = async () => {
  try {
    const res = await fetch("https://www.freetogame.com/api/games");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchGames;
