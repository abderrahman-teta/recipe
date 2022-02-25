import React, {ChangeEvent, useEffect,useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {setRecipesAction} from "../redux/actions/setRecipesAction"
import './SelectCategory.css'
const SelectCategory:React.FC = () =>{
    const [category,setCategory] = useState('SeaFood');
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+category)
            .then(response => response.json())
            .then(result => dispatch(setRecipesAction(result.meals)))
            .catch(err => {
            console.error(err);
            });
    },[category])
    const handelChange = (e:ChangeEvent<HTMLSelectElement>) =>{
        setCategory(e.target.value)
    }
    return (
        <div className="select_container">
            <select value={category} onChange={handelChange} >
                <option value="SeaFood">SeaFood</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Chicken">Chicken</option>
                <option value="Pasta">Pasta</option>
                <option value="Side">Side</option>
            </select>
        </div>
    )
}
export default SelectCategory;