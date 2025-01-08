import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import TodoBoard from "../components/TodoBoard";
import api from "../api/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { jwtDecode } from "jwt-decode";

const TodoPage = ({ user, setUser }) => { 
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [userName, setUserName] = useState(""); // 사용자 이름을 저장할 state
  const [userId, setUserId] = useState(""); // 사용자 ID를 저장할 state
  const navigate = useNavigate(); 

  const getTasks = async () => {
    const response = await api.get("/tasks");
    setTodoList(response.data.data);
  };

  useEffect(() => {
    getTasks();
  }, []);
  
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log("디코딩된 토큰:", decodedToken);
        setUserName(decodedToken.userName || ""); // 사용자 이름 설정
        setUserId(decodedToken.userId || ""); // 사용자 ID 설정
      } catch (error) {
        console.error("토큰 디코딩 오류 :", error);
      }
    } else {
      console.log("토큰이 존재하지 않습니다");
    }
  }, []);

  const addTodo = async () => {
    try {
      const response = await api.post("/tasks", {
        task: todoValue,
        isComplete: false,
        userId: userId,  // userId를 함께 전달
        userName: userName,  // userName을 함께 전달
      });
      if (response.status === 200) {
        getTasks();
      }
      setTodoValue("");
    } catch (error) {
      console.log("error:", error);
    }
  };
  
  const deleteItem = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        getTasks();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const task = todoList.find((item) => item.id === id);
      const response = await api.put(`/tasks/${id}`, {
        isComplete: !task.isComplete,
      });
      if (response.status === 200) {
        getTasks();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="방명록을 작성해주세요"
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

export default TodoPage;
