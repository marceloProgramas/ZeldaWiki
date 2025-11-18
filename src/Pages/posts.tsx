import {useParams,Link} from "react-router-dom"
import {useEffect, useState} from "react"
import api from "../services/api"
import List from "../Components/List/List";

type RouteParams ={
    type: string;
    id:string;
}

async function getName(type: string, id: string) {
  try {
    const response = await api.get(`/${type}/${id}`);
    return response.data.data.name; 
  } catch (error) {
    console.error("Error fetching name:", error);
    throw error;
  }
}


export default function(){
    const [type,setType] = useState(null)
    const [LinkName, setLinkName] = useState(null)
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
                                    let LinkArray = link.split("/");
                                    getName(LinkArray[4],LinkArray[5]).then((res)=>null)
                                    return(<Link to={`/${LinkArray[4]}/Post/${LinkArray[5]}`} key={i}>{link}<br/></Link>)
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