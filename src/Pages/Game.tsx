import { useParams } from "react-router-dom";
import {useEffect, useState} from "react"
import api from "../services/api"
import List from "../Components/List/List.tsx";

export default function () {
  const [Game, setGame] = useState({name: '', id: '', description: '', developer: '', publisher: '', released_date: ''});
  const {id} = useParams();


  useEffect(()=>{
    api
    .get(`/games/${id}`)
    .then((response)=>{
      setGame(response.data.data);
    })
    .catch((err)=>{
      console.error("ops erros"+err)
    })
  },[id])
/*
{
    {name: 'The Legend of Zelda', description: 'The Legend of Zelda is the first installment of th…nown as The Hyrule Fantasy: The Legend of Zelda. ', developer: 'Nintendo R&D 4', publisher: 'Nintendo', released_date: ' February 21, 1986', …}
}
*/
  return (
    <>
    <div className="App">
      <p>Game title: {Game?.name}</p>
      <p>Developer: {Game?.developer}</p>
      <p>Publisher: {Game?.publisher}</p>
      <p>Desc: {Game?.description}</p>
      <p>Release: {Game?.released_date}</p>
    </div>
    <List type="games"/>
    </>
  )
}