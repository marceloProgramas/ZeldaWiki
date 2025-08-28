import { useEffect, useState } from "react";
import * as S from "./ListSt"
import api from "../../services/api";

export default function List({type}:{type:string}) {
  const [Things, setThings] = useState([
    {name: '', id: '', description: '', developer: '', publisher: '', released_date: ''}
]);

  useEffect(() => {
    api.get(`${type}?limit=6`)
      .then((response) => setThings(response.data.data))
      .catch((err) => console.error("ops erro " + err));
  }, [type]);

  return (
    <>
    <S.title>{type} list</S.title>
    <S.list>
      {Things.map((thing) => (
        <S.card key={thing.id}>
          <S.link to={`/${type}/${thing?.id}`} >
            {thing?.name}
          </S.link>
        </S.card>
      ))}
    </S.list>
    </>
  );
}
