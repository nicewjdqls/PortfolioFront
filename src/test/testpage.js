import React, { useState } from "react";
import TodoBoard from "../components/TodoBoard";  // TodoBoard 컴포넌트 import
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
    <Container>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="방명록을 작성하세요"
            onChange={(event) => setTodoValue(event.target.value)}
            className="input-box"
            value={todoValue}
          />
        </Col>
        <Col xs={12} sm={2}>
          <button onClick={addTodo} className="button-add">
            추가
          </button>
        </Col>
      </Row>

      <TodoBoard
        todoList={todoList}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
      />
    </Container>
  );
};

export default AboutPage;
