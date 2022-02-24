import React from "react";
import {ContainerStyle } from "../styled/ContainerStyle";
import './404.css'
const Page404:React.FC = () => {
    return(
        <ContainerStyle>  
            <div className="__404">
                <img src="./images/404.svg" alt="404" /> 
            </div>
            
        </ContainerStyle>
        
    )
}
export default Page404;