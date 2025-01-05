import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./InputField.module.css";
import Button from "../../button/Button";
import { ToDoContext } from "../../../contexts/ToDoContext";

const AddToDo = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(ToDoContext);
  const inputRef = useRef(null);
  const errorSpanRef = useRef(null);

  useEffect(() => {
    if (value.trim() !== "") {
      inputRef.current.style.border = "none";
      errorSpanRef.current.style.display = "none";
    };
  }, [value]);

  const add = () => {
    if (value.trim() !== "") {
      const newItem = {
        id: Date.now(),
        name: value.trim(),
        completed: false,
      };
      dispatch({
        type: "add",
        payload: newItem,
      });
    } else {
      inputRef.current.style.border = "1px solid red";
      errorSpanRef.current.style.display = "flex";
    }
    setValue("");
  };

  return (
    <div className={style.inputField}>
      <div className={style.inputBox}>
        <input
        ref={inputRef}
        className={style.input}
        type="text"
        placeholder="Write your task...!"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span ref={errorSpanRef}>Write a task to add!</span>
      </div>
      <div className={style.btn}>
        <Button radius="20px" onClick={add}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddToDo;
