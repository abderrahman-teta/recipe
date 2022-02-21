import React from "react";
import {ContainerStyle } from "../styled/ContainerStyle";
import {StyledButton} from "../styled/ButtonStyle"
import './Home.css'
const Home:React.FC = () => {
    return(
        <>
        <section className="hero">
                <ContainerStyle>
                    <div className="info">
                        <h1>Yummy Recipes</h1>
                        <p>we have a lot of yummy recipes from all aruond the world.</p>
                        <StyledButton>
                            See Recipes
                        </StyledButton>
                    </div>
                    <div className="image">
                        <img src="./images/burger.svg" alt="burger"  />
                    </div>
                </ContainerStyle>
        </section>
        <section className="recipe">
            <ContainerStyle>
                
            </ContainerStyle>
        </section>
 </>
        
    )
}
export default Home;