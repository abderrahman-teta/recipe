import React from "react";
import './Ingredient.css'
interface Props {
    strIngredient:string,
    strMeasure:string
}
const Ingredient:React.FC <Props>= ({strIngredient,strMeasure}) => {
    return(
              <div className="ingredient_container">
                  <label htmlFor={strIngredient}>
                      <span className="measure">{strMeasure}</span>
                      <span className="ingredient">{strIngredient}</span>
                  </label>
                  <input type="checkbox"  id={strIngredient} />
              </div>  
    )
}
export default Ingredient;