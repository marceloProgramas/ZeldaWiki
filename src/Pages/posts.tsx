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

async function MakeList(list: string[]) {
  const results = await Promise.all(
    list.map(async (link) => {
        const LinkArray = link.split("/");
        return [await getName(LinkArray[4], LinkArray[5]), (LinkArray[4]+"/Post/"+LinkArray[5])];
    })
  );

  return results;
}

export default function(){
    const [type,setType] = useState<any[][]>([])
    const Params = useParams<RouteParams>();


useEffect(() => {
  async function fetchData() {
    try {
      const response = await api.get(`/${Params.type}/${Params.id}`);
      let resp:{[key: string]: string | string[];} = response.data.data;

      const processed = await Promise.all(
        Object.entries(resp)
          .filter(([key, value]) => key !== "id" && value && value.length > 0)
          .map(async ([key, value]) => {
            if (Array.isArray(value)) {
              const result = await MakeList(value);
              return [key, result]; 
            }

            return [key, value];
          })
      );
      console.log(processed)
      setType(processed);
    } catch (err) {
      console.error("Erro:", err);
    }
  }

  fetchData();
}, [Params.type, Params.id]);



    return(
        <div>
            {type?(
                <>
                {
                    type.map(([key, value])=>{
                        return (Array.isArray(value)) ? (
                            <div key={key}>
                                <p>{key}:</p>
                                {
                                value.map(([name, link]) => {
                                   
                                    return(<Link to={`/${link}`} key={link}>{name}<br/></Link>)
                                })
                                }
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