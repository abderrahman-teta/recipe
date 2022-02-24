import React from "react";
import {ContainerStyle } from "../styled/ContainerStyle";
import {StyledButton} from "../styled/ButtonStyle"
import HomeCard from '../components/HomeCard';
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
            <h1 className="title">Recipes</h1>
            <ContainerStyle>
                     <HomeCard title="Main Dishes" desc="There is so many main dishes recipes" 
                     image_url="./main.jpg"/>
                     <HomeCard 
                     title="Side Dishes" 
                     desc="there is so many side dishes recipes" 
                     image_url="./images/side_dish.jpg"
                     />
                     <HomeCard 
                     title="Drinks" 
                     desc="there is so many Drinks recipes" 
                     image_url="./drink.jpeg"
                     />
                     <HomeCard 
                      title="Dessert" 
                      desc="there is so many Dessert recipes" 
                      image_url="./dessert.jpg"
                     />
            </ContainerStyle>
        </section>
 </>
        
    )
}
export default Home;