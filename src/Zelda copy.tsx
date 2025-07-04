import {useEffect, useState} from "react"
import axios from "axios"

async function GetUser(){
  try{
    const response = await axios.get("https://api.github.com/users/marceloProgramas")
    return response.data
  }catch(error){
    console.error(error)
  }
}


export default function() {
  const [user, setUsers] = useState();

  useEffect( () => {
    
  })
  return (
    <div className="App">
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  )
}