import React, { useContext } from "react";
import Modal from "react-modal";
import style from "./Modal.module.css";
import { ToDoContext } from "../../contexts/ToDoContext";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "230px",
    borderRadius: "20px",
  },
};



const CustomModal = ({onOpen, id}) => {
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const { dispatch } = useContext(ToDoContext);


  const deleteToDo = () =>{
    dispatch({
      type: "delete",
      payload: id
    })
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    onOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // appElement={'root'}
      >
        <div className={style.noticeBox}>
          <img
            className={style.dangersign}
            src="src/assets/danger_sign.png"
            alt="danger_sign"
          />
          <h2>Delete Task</h2>
          <span>Are you sure you want to delete the task?</span>
          <div className={style.buttonBox}>
            <button className={style.closeBtn} onClick={closeModal}>
              No, keep it!
            </button>
            <button className={style.deleteBtn} onClick={deleteToDo}>
              Yes, delete!
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
