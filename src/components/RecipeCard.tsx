import React from 'react'
import {CardHomeStyle} from '../styled/CardStylr'
import {Link} from 'react-router-dom'
interface Props {
    idMeal:number,
    strCategory?:string,
    strMeal?:string,
    strMealThumb?:string
}

const RecipeCard:React.FC <Props>= ({idMeal,strCategory,strMeal,strMealThumb}) =>{
    const url = "/"+idMeal
    return (
        <Link to={url} className="card">
       
        
            <img className="img" src={strMealThumb} alt={strMeal} />
            <div className="card_info">
                <h2 className="title">{strMeal} </h2>
               
            </div>
        
        </Link> 
)
    
}

export default RecipeCard