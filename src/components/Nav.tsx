import { NavStyle,ContainerStyle } from "../styled/ContainerStyle";
import React from 'react'
import { Link } from "react-router-dom";

const Nav:React.FC = () =>{
    return (
     <NavStyle>
         <ContainerStyle>
                <Link to="/"> <span>Recipe</span></Link>
                <div>
                    <Link to="/">HOME</Link>
                    <Link to="/list">LIST</Link>
                    <Link to="/search">SEARCH</Link>
                </div>
         </ContainerStyle>
     </NavStyle>
    )
}
export default Nav