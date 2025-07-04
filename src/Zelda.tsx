import {useEffect, useState} from "react"
import api from "./services/api"


export default function () {
  const [user, setUser] = useState();


  useEffect(()=>{
    api
    .get("/users/marceloProgramas")
    .then((response)=>setUser(response.data))
    .catch((err)=>{
      console.error("ops erros"+err)
    })
  })

  return (
    <div className="App">
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  )
}