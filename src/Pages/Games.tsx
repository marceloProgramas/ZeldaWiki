import {useEffect, useState} from "react"
import api from "../services/api"

function pickUrl(){
  return (window.location.href).split("/")[4]
}

export default function () {
  const [Game, setGame] = useState();


  useEffect(()=>{
    const id = pickUrl();
    api
    .get(`/games/${id}`)
    .then((response)=>{
      setGame(response.data.data);
    })
    .catch((err)=>{
      console.error("ops erros"+err)
    })
  },[])
/*
{
    "id": "5f6ce9d805615a85623ec2bf"
}
*/
  return (
    <div className="App">
      <p>Game title: {Game?.name}</p>
      <p>Developer: {Game?.developer}</p>
      <p>Publisher: {Game?.publisher}</p>
      <p>Desc: {Game?.description}</p>
      <p>Release: {Game?.released_date}</p>
    </div>
  )
}