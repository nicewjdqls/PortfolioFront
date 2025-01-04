import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, delTask, putTask }) => {
  return (
    <div>
      <h2>방명록</h2>
      {todoList.length > 0 ? (
        todoList.map((item) => (
          <TodoItem key={item._id} item={item} delTask={delTask} putTask={putTask}/>
        ))
      ) : (
        <h2>There are no items to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
