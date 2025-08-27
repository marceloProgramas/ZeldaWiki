import { useEffect, useState } from "react";
import * as S from "./ListSt"
import api from "../../services/api";

export default function List({type}:{type:string}) {
  const [Games, setGames] = useState([
    {name: '', id: '', description: '', developer: '', publisher: '', released_date: ''}
]);

  useEffect(() => {
    api.get(`${type}?limit=6`)
      .then((response) => setGames(response.data.data))
      .catch((err) => console.error("ops erro " + err));
  }, [type]);

  return (
    <>
    <S.title>{type} list</S.title>
    <S.list>
      {Games.map((game) => (
        <S.card key={game.id}>
          <S.link to={`/${type}/${game?.id}`} >
            {game?.name}
          </S.link>
        </S.card>
      ))}
    </S.list>
    </>
  );
}
