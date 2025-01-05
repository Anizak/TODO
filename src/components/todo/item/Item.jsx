import React, { useContext, useState } from "react";
import styles from "./Item.module.css";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuSave } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { ToDoContext } from "../../../contexts/ToDoContext";
import CustomModal from "../../popupwindow/CustomModal";


const Item = ({data}) => {
  const [edited, setEdited] = useState(false);
  const { dispatch } = useContext(ToDoContext);
  const [openDelete, setOpenDelete] = useState(false);
  const [value, setValue] = useState(data.name)

  const activate = () => {
    setEdited((prev) => !prev);
  };
  
  const isCompleted = () => {
      dispatch({
        type : "completed",
        payload: data.id
      })
  }

  const deleteToDo = () =>{
    setOpenDelete(true);
  }
  const closeDelete = (param) =>{
      setOpenDelete(param);
      
  }

  const cancel = () =>{
    setEdited(false);
    setValue(data.name)
  }

  const save = () => {
    dispatch({
      type : "save",
      payload : {
        id : data.id,
        name : value
      }
    }
  )
  }


  return (
    <div className={styles.item}>
      <input type="checkbox" className={styles.checkBox}  checked={data.completed} onChange={isCompleted}/>
      <input
        type="text"
        className={
          edited ? `${styles.activeItem} ${styles.inputItem}` : styles.inputItem
        }
        value={value}
        disabled={edited ? false : true}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={styles.buttonBox}>
        <button onClick={activate}>
          {edited ? (
            <LuSave className={styles.editIcon} onClick={edited ? save : activate}/>
          ) : (
            <MdOutlineEdit className={styles.editIcon} />
          )}
        </button>
        <button onClick={edited ? cancel : deleteToDo}>
          {edited ? (
            <IoClose className={styles.deleteIcon} />
          ) : (
            <RiDeleteBinLine className={styles.deleteIcon} />
          )}
        </button>
         {
          openDelete && <CustomModal onOpen={closeDelete} id={data.id}/>
          
         } 
      </div>
    </div>
  );
};

export default Item;
