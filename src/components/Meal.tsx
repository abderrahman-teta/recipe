import React ,{useEffect,useState} from "react";
import {useParams,useNavigate,Link} from 'react-router-dom';
import {ContainerStyle } from "../styled/ContainerStyle";
import Ingredient from "../components/Ingredient"
import './Meal.css'
const Meal:React.FC = () => {
    const [recipe, setRecipe] = useState<any>(null)
    const {id} = useParams()
    const url =" https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    console.log(url);
    
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
        .then(response =>response.json())
        .then(data =>{
            console.log(data.meals[0]);
            
            setRecipe(data.meals[0])
        
        })
        console.log(recipe);
        
      },[id])
      
      
    return(
        <div className="content">

        <ContainerStyle>

           {recipe && 
           <div className="meal_content">
           <div className="side">
               <img className="meal_img" src={recipe.strMealThumb} alt={recipe.strMeal} />
               <div className="meal_inf">
                   <h1>{recipe.strMeal} </h1>
                   <p className="category">Category : {recipe.strCategory}</p>
                   <p >Original : {recipe.strArea}</p>
                   <p >Youtube : <a target="_blank" href={recipe.strYoutube}>Here</a></p>  
               </div>
           </div>
           <div className="main">
               
                  {recipe.strIngredient1 && <Ingredient strIngredient={recipe.strIngredient1} strMeasure={recipe.strMeasure1}/>}  
                  {recipe.strIngredient2 && <Ingredient strIngredient={recipe.strIngredient2} strMeasure={recipe.strMeasure2}/>}   
                  {recipe.strIngredient3 && <Ingredient strIngredient={recipe.strIngredient3} strMeasure={recipe.strMeasure3}/>}   
                  {recipe.strIngredient4 && <Ingredient strIngredient={recipe.strIngredient4} strMeasure={recipe.strMeasure4}/>}   
                  {recipe.strIngredient5 && <Ingredient strIngredient={recipe.strIngredient5} strMeasure={recipe.strMeasure5}/>}   
                  {recipe.strIngredient6 && <Ingredient strIngredient={recipe.strIngredient6} strMeasure={recipe.strMeasure6}/>}   
                  {recipe.strIngredient7 && <Ingredient strIngredient={recipe.strIngredient7} strMeasure={recipe.strMeasure7}/>}   
                  {recipe.strIngredient8 && <Ingredient strIngredient={recipe.strIngredient8} strMeasure={recipe.strMeasure8}/>}   
                  {recipe.strIngredient9 && <Ingredient strIngredient={recipe.strIngredient9} strMeasure={recipe.strMeasure9}/>}   
                  {recipe.strIngredient10 && <Ingredient strIngredient={recipe.strIngredient10} strMeasure={recipe.strMeasure10}/>}   
                  {recipe.strIngredient11 && <Ingredient strIngredient={recipe.strIngredient11} strMeasure={recipe.strMeasure11}/>}   
                  {recipe.strIngredient12 && <Ingredient strIngredient={recipe.strIngredient12} strMeasure={recipe.strMeasure12}/>}   
                  {recipe.strIngredient13 && <Ingredient strIngredient={recipe.strIngredient13} strMeasure={recipe.strMeasure13}/>}   
                  {recipe.strIngredient14 && <Ingredient strIngredient={recipe.strIngredient14} strMeasure={recipe.strMeasure14}/>}   
                  {recipe.strIngredient15 && <Ingredient strIngredient={recipe.strIngredient15} strMeasure={recipe.strMeasure15}/>}   
                  {recipe.strIngredient16 && <Ingredient strIngredient={recipe.strIngredient16} strMeasure={recipe.strMeasure16}/>} 
                  {recipe.strIngredient17 && <Ingredient strIngredient={recipe.strIngredient17} strMeasure={recipe.strMeasure17}/>}   
                  {recipe.strIngredient18 && <Ingredient strIngredient={recipe.strIngredient18} strMeasure={recipe.strMeasure18}/>}   
                  {recipe.strIngredient19 && <Ingredient strIngredient={recipe.strIngredient19} strMeasure={recipe.strMeasure19}/>}   
                  {recipe.strIngredient20 && <Ingredient strIngredient={recipe.strIngredient20} strMeasure={recipe.strMeasure20}/>}    
                    <p className="instructions"><span>Instructions : </span><br/>{recipe.strInstructions}</p>
           </div>
           </div>
           }
        </ContainerStyle>
        </div>
    )
}
export default Meal;