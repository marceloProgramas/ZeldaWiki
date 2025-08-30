import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import api from "../services/api"

export default function(){
    const [type,setType] = useState()
    const Params = useParams();


useEffect(()=>{
    api
    .get(`/${Params.type}/${Params.id}`) 
    .then((response)=>{
        setType(response.data.data)
    })       
    .catch((err)=>{
        console.error("ops erros"+err)
    })
},[Params.type, Params.id])

useEffect(() => {
  console.log("type atualizado:", type);
}, [type]);


    return(
        <div>
            {type?(
                <>{
                    Object.entries(type).map((Array)=>Array.map((Thing)=>{
                        (
                        <p>Thing</p>
                        )
                        console.log(Thing)
                    }))
                }
                </>
            ):(
                <p>Carregando....</p>
            )}
        </div>
    )
}