import React, { useState } from 'react'
import {BiMinusCircle, BiPlusCircle} from 'react-icons/bi'
import classes from './Counter.module.css'

export default function Counter(props) {

    const [count, setCount] = useState(props.count);

    const handleAdd = () =>{
        setCount((prev) =>{
          return  prev +1;
        });
    }

    const handleMins = () =>{
        setCount((prev) =>{
            return  prev -1;
          });
    }

    return (
        <div className={classes.counter}>
            {(count !==0)?
                <>
                    <BiMinusCircle onClick={handleMins} className={classes.icon}/>
                    <div>{count}</div>
                </>:'' }
            <BiPlusCircle onClick={handleAdd} className={classes.icon}/>
        </div>
    )
}
