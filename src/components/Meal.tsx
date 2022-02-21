import React from "react"
interface Props {
    idMeal:number,
    strCategory:string,
    strMealThumb:string,
    strMeal:string
}
const Meal:React.FC <Props> = ({idMeal,strCategory,strMealThumb,strMeal}) => {
    return (
        <h3> {strMeal} </h3>
    )
}
export default Meal;