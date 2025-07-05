import { Link } from "react-router-dom";


export default function(){
    return(
        <>
        <h1>this page not exist</h1>
        <Link to={"/"}>
        <button>go back</button>
        </Link>
        </>
    )
}