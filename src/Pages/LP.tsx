import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function LP() {
  const [Games, setGames] = useState([]);

  useEffect(() => {
    api.get("games?limit=10")
      .then((response) => setGames(response.data.data))
      .catch((err) => console.error("ops erro " + err));
  }, []);

  return (
    <ul>
      {Games.map((game) => (
        <li key={game.id}>
          <Link to={`/games/${game?.id}`}>
            {game?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
