import React, { useContext, useReducer, useState } from "react";
import styles from "./ModifyList.module.css";
import { ToDoContext } from "../../contexts/ToDoContext";
import Button from "../button/Button";
import { todos } from "../../services/todo.service";

const ModifyList = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [filter, setFilter] = useState("All");

  const filteredTasks = todos.filter((task) => {
    if (filter === "All") return true;
    return filter === "Completed" ? todos.completed : !todos.completed;
  });
  return (
    <div className={styles.box}>
      <span>
        {state.todos.filter((elem) => elem.completed).length}/
        {state.todos.length}
      </span>
      <div className={styles.btn}>
        <Button
          radius={"25px"}
          onClick={() => dispatch({ type: "deleteCompleted" })}
        >
          Delete Completed
        </Button>
      </div>
      <div className={styles.btn}>
        <Button radius={"25px"} onClick={() => dispatch({ type: "deleteAll" })}>
          Delete All
        </Button>
      </div>
      <div className={styles.filter_section}>
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "All") {
              dispatch({ type: "all" });
            } else if (value === "Completed") {
              dispatch({ type: "allcompleted" });
            } else if (value === "Incomplete") {
              dispatch({ type: "inprogress" });
            }
            setFilter(value);
          }}
          value={filter}
        >
          <option value="All" onClick={() => dispatch({ type: "all" })}>
            All
          </option>
          <option
            value="Completed"
            onClick={() => dispatch({ type: "allcompleted" })}
          >
            Completed
          </option>
          <option
            value="Incomplete"
            onClick={() => dispatch({ type: "inprogress" })}
          >
            Incomplete
          </option>
        </select>
      </div>
    </div>
  );
};

export default ModifyList;
