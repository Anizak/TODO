import React from "react";
import style from "./ToDo.module.css";
import AddToDo from "../inputField/AddToDo";
import ToDoList from "../todolist/ToDoList";
import ModifyList from "../../modifylist/ModifyList";

const ToDo = () => {
  return (
    <div className={style.mainField}>
      <h1 className={style.text}>TODO LIST</h1>
      <AddToDo />
      <ToDoList />
      <ModifyList />
    </div>
  );
};

export default ToDo;
