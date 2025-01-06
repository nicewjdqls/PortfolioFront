import React, { useState } from "react";
import TodoBoard from "../components/TodoBoard";  // TodoBoard 컴포넌트 import
import { CRow, CCol, CContainer } from '@coreui/react';  // CoreUI에서 Row, Col, Container 가져오기
import { CButton } from '@coreui/react';  // CoreUI에서 CButton 가져오기

const AboutPage = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, task: "방명록 1", isComplete: false },
    { id: 2, task: "방명록 2", isComplete: false },
  ]);
  const [todoValue, setTodoValue] = useState("");

  const addTodo = () => {
    const newTask = {
      id: todoList.length + 1,
      task: todoValue,
      isComplete: false,
    };
    setTodoList([...todoList, newTask]);
    setTodoValue("");  // 입력 필드 초기화
  };

  const deleteItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  return (
    <CContainer>
      <CRow className="add-item-row">
        <CCol xs={12} sm={10}>
          <input
            type="text"
            placeholder="방명록을 작성하세요"
            onChange={(event) => setTodoValue(event.target.value)}
            className="input-box"
            value={todoValue}
          />
        </CCol>
        <CCol xs={12} sm={2}>
          <CButton onClick={addTodo} className="button-add">
            추가
          </CButton>
        </CCol>
      </CRow>

      <TodoBoard
        todoList={todoList}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
      />
    </CContainer>
  );
};

export default AboutPage;
