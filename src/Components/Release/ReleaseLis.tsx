import { useEffect, useState } from "react";
import * as S from "./RelStyle"
import api from "../../services/api";

export default function Release() {
  const [Games, setGames] = useState([
    {name: '', id: '', description: '', developer: '', publisher: '', released_date: ''}
]);

  useEffect(() => {
    api.get("games?limit=6")
      .then((response) => setGames(response.data.data))
      .catch((err) => console.error("ops erro " + err));
  }, []);

  return (
    <>
    <S.title>Realease list</S.title>
    <S.list>
      {Games.map((game) => (
        <S.card key={game.id}>
          <S.link to={`/games/${game?.id}`} >
            {game?.name}
          </S.link>
        </S.card>
      ))}
    </S.list>
    </>
  );
}
