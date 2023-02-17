import React from 'react'
import Card from '../Card/Card'
import classes from "./Meals.module.css"

export default function Meals(props) {

    return (
        <div className={classes.board}>
            
            {props.mealData.map(item => <Card itemObj = {item}/>)}

        </div>
    )
}
