import React from "react";
import style from "../Styles/ToDo.module.css";
import { AiFillDelete } from "react-icons/ai";
import { GrCheckmark } from "react-icons/gr";
import { ACTIONS } from "./ToDoList";

function ToDo({ todo, dispatch }) {
  return (
    <div className={style.ToDo}>
      <div
        className={
          todo.completed ? style.ToDo__complete : style.ToDo__notcomplete
        }
      >
        {todo.name}
      </div>
      <div>
        <span
          className={style.ToDo__Icon}
          onClick={() => {
            dispatch({ type: ACTIONS.toggle, payload: { id: todo.id } });
          }}
        >
          <GrCheckmark />
        </span>
        <span
          className={style.ToDo__Icon}
          onClick={() => {
            dispatch({ type: ACTIONS.delete, payload: { id: todo.id } });
          }}
        >
          <AiFillDelete />
        </span>
      </div>
    </div>
  );
}

export default ToDo;
