import React ,{useEffect} from "react";
import {ContainerStyle } from "../styled/ContainerStyle";
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import {setRecipesAction} from "../redux/actions/setRecipesAction"
import RecipeCard from "./RecipeCard";
import './list.css'
const List:React.FC = () => {
    const state:any = useSelector<any>(state => state.recipes)
    const dispatch = useDispatch()
    console.log(state);
    /*const fetchData =async () => {
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a').catch(err =>console.log(err))
        console.log(res.data.meals);
        
    }*/
    useEffect(()=>{
       // fetchData()
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(response => response.json())
    .then(result => dispatch(setRecipesAction(result.meals)))
    .catch(err => {
      console.error(err);
    });
  },[])
type RECIPE = {
    idMeal:number,
    strCategory:string,
    strMeal:string,
    strMealThumb:string
}
    return(
        <div className="content">
        <div className="container">
            
            {state[0] && state[0].map((recipe : RECIPE)=>{
                return <RecipeCard key={recipe.idMeal} strMealThumb={recipe.strMealThumb} idMeal={recipe.idMeal} strMeal={recipe.strMeal}/>
            })}

        </div>
        </div>
        
    )
}
export default List;