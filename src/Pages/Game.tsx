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