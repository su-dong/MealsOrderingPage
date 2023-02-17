import React from 'react'
import Counter from '../Counter/Counter'
import classes from './Card.module.css'

export default function Card(props) {
    console.log(props.itemObj.image)
    return (
        <div className={classes.card}>
            <div className={classes.imgContainer}>
                <img className={classes.image} src={props.itemObj.image} alt='img' />
            </div>
            <div className={classes.textContainer}>
                <div className={classes.text}>
                    <h2>{props.itemObj.title}</h2>
                    <p>{props.itemObj.description}</p>
                </div>
                <div className={classes.bot}>
                    <div className={classes.price}><span>$</span>{props.itemObj.price}</div>
                    <Counter count={0}/>
                </div>
            </div>
        </div>
    )
}
