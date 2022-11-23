import React from "react";
import {FaRegTrashAlt} from 'react-icons/fa'

const style={

}

const Todo=(props)=>{
   return (
      <li className={style.li}>
         <div className={style.row}>
            <input type="checkbox"/>
            <p className={style.text}>{props.todo}</p>
         </div>
         <button><FaRegTrashAlt/></button>
      </li>
   )
}

export default Todo;