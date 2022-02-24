import React from "react"
import {CardHomeStyle} from '../styled/CardStylr'

import './HomeCard.css'
interface Props {
    title:string,
    desc:string,
    image_url:string
}
const HomeCard:React.FC <Props> = ({title,desc,image_url}) => {
   
    return (
        <CardHomeStyle >
            <img className="img" src={image_url} alt={title} />
            <div className="card_info">
                <h2 className="title">{title} </h2>
                <p> {desc} </p>
            </div>
        </CardHomeStyle>
    )
}
export default HomeCard;