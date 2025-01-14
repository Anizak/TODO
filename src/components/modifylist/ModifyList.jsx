import React, { useContext, useReducer, useState } from "react";
import styles from "./ModifyList.module.css";
import { ToDoContext } from "../../contexts/ToDoContext";
import Button from "../button/Button";
import { todos } from "../../services/todo.service";

const options = [
  {
    id: 1,
    value: "all",
    name: "All",
  },
  {
    id: 2,
    value: "completed",
    name: "Completed",
  },
  {
    id: 3,
    value: "incomplete",
    name: "  Incomplete",
  },
];

const ModifyList = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [filter, setFilter] = useState("all");

  const changeFilter = (value) => {
    setFilter(value);
    if (value === "all") {
      dispatch({ type: "all" });
    } else if (value === "completed") {
      dispatch({ type: "allcompleted" });
    } else if (value === "incomplete") {
      dispatch({ type: "inprogress" });
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.buttons}>
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
          <Button
            radius={"25px"}
            onClick={() => dispatch({ type: "deleteAll" })}
          >
            Delete All
          </Button>
        </div>
      </div>

      <div className={styles.filter_section}>
        <select
          onChange={(e) => {
            changeFilter(e.target.value);
          }}
          value={filter}
        >
          {options.map((elem) => {
            return (
              <option key={elem.id} value={elem.value}>
                {elem.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ModifyList;
