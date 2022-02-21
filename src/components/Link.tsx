import React from "react";
import { Link } from "react-router-dom";
interface Props {
    children : any,
    to:string
}
const Link_:React.FC <Props>= ({children,to}) => {
    return(
        <Link to={to}>
             {children} 
        </Link>
    )
}
export default Link_;