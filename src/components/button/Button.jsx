import React from "react";
import style from "./Button.module.css";
const Button = ({ children,onClick, ...props }) => {
  return (
    <button onClick={onClick} className={style.btn} style={{borderRadius : props.radius}}>
      {children}
    </button>
  );
};

export default Button;
