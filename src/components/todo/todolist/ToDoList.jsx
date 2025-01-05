import React, { useContext, useEffect } from 'react'
import styles from "./ToDoList.module.css"
import Item from '../item/Item'
import { ToDoContext } from '../../../contexts/ToDoContext'
import { useState } from 'react'

const ToDoList = () => {
  const {state} = useContext(ToDoContext)
  const [localtodo, setLocaltodo] = useState([])
  useEffect(() => {
    if(state.showFilter === "all"){
      setLocaltodo(state.todos);
    }
    else if(state.showFilter === "completed"){
      setLocaltodo(state.todos.filter((elem) => elem.completed));
    }
    else if(state.showFilter === "inprogress"){
      setLocaltodo(state.todos.filter((elem) => !elem.completed))
    }
    
  },[state]);
  
  return (
    <div className={styles.list}>
        {localtodo.map((elem) =>{
            return <Item key={elem.id} data={elem}/>
        })}
    </div>
  )
}

export default ToDoList