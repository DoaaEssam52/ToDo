import React from "react";
import style from "../Styles/ToDoList.module.css";
import { useReducer } from "react";
import { useState } from "react";
import ToDo from "./ToDo";

export const ACTIONS = {
  add: "ADD",
  toggle: "TOGGLE",
  delete: "DELETE",
};
function reducer(currentState, { type, payload }) {
  switch (type) {
    case ACTIONS.add: {
      return [...currentState, newTask(payload)];
    }
    case ACTIONS.toggle: {
      return currentState.map((task)=>{
          if(task.id==payload.id){
              return {...task,completed:!task.completed}
          }
          return task;
      });
    }
    case ACTIONS.delete: {
      return currentState.filter((task)=>{
          return task.id!=payload.id;
      });
    }
    default:
      return currentState;
  }
}
function newTask(task) {
  return { id: Math.random()*1000, name: task, completed: 0 };
}
function ToDoList() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type:ACTIONS.add, payload:name });
    setName("");
  };
  return (
    <div className={style.ToDoList}>
      <div>
        {" "}
        <form onSubmit={handleClick}>
          <input
            value={name}
            className={style.ToDoList__input}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input type="submit" value="Add" className={style.ToDoList__add} />
        </form>
        {todos.length && (
          <div className={style.ToDoList__container}>
            {todos.map((task) => {
              return <ToDo key={task.id} todo={task} dispatch={dispatch} />
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
