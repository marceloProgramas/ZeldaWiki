import {useParams,Link} from "react-router-dom"
import {useEffect, useState} from "react"
import api from "../services/api"
import List from "../Components/List/List";

type RouteParams ={
    type: string;
    id:string;
}

async function getName(id:string){
    return new Promise((resolve)=>{
        resolve(id)
    })
}

export default function(){
    const [type,setType] = useState(null)
    const Params = useParams<RouteParams>();


useEffect(()=>{
    api
    .get(`/${Params.type}/${Params.id}`) 
    .then((response)=>{
        setType(response.data.data)
    })       
    .catch((err)=>{
        console.error("ops erros"+err)
    })
    console.log(getName("https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c0"))
},[Params.type, Params.id])



    return(
        <div>
            {type?(
                <>
                {
                    Object.entries(type)
                    .filter(([key, value]) => key !== "id" && value)
                    .map(([key,value])=>{
                        return (Array.isArray(value)) ? (
                            <div key={key}>
                                <p>{key}:</p>
                                {value.map((link, i) => {
                                    console.log(link.split("/"))
                                    return(<Link to={`/games/Post/${link.split("/")[5]}`} key={i}>{link}<br/></Link>)
                                }
                                )}
                            </div>
                        ) : (
                            <p key={key}>{key}<>:</> {String(value)}</p>
                        );
                    })
                }
                {Params.type && <List type={Params.type} />}
                </>
            ):(
                <p>Carregando....</p>
            )}
        </div>
    )
}