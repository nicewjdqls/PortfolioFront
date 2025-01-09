import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import TodoBoard from "../components/TodoBoard";
import api from "../api/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Pagination } from "@mui/material"; // 페이지네이션 컴포넌트 추가
import { jwtDecode } from "jwt-decode";


const TodoPage = ({ user, setUser }) => {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [userName, setUserName] = useState(""); // 사용자 이름을 저장할 state
  const [userId, setUserId] = useState(""); // 사용자 ID를 저장할 state
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalPages, setTotalPages] = useState(1); // 총 페이지 수
  const navigate = useNavigate(); 

  const getTasks = async (page) => {
    try {
      const response = await api.get(`/tasks?page=${page}&limit=10`); // 페이지와 limit을 쿼리로 전달
      setTodoList(response.data.data);
      setTotalPages(response.data.totalPages); // 총 페이지 수 업데이트
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    getTasks(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserName(decodedToken.userName || ""); 
        setUserId(decodedToken.userId || "");
      } catch (error) {
        console.error("토큰 디코딩 오류 :", error);
      }
    } else {
      setUserName('비회원');
      setUserId('none');
    }
  }, []);

  const addTodo = async () => {
    try {
      const response = await api.post("/tasks", {
        task: todoValue,
        isComplete: false,
        userId: userId,  
        userName: userName,  
      });
      if (response.status === 200) {
        getTasks(currentPage); // 새로 추가된 작업을 현재 페이지에서 반영
      }
      setTodoValue("");
    } catch (error) {
      console.log("error:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`, {
        data: { userId: userId }
      });
      if (response.status === 200) {
        getTasks(currentPage); // 삭제 후 현재 페이지 반영
      }
    } catch (error) {
      console.log("삭제 중 오류 발생:", error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const task = todoList.find((item) => item.id === id);
      const response = await api.put(`/tasks/${id}`, {
        isComplete: !task.isComplete,
      });
      if (response.status === 200) {
        getTasks(currentPage); // 완료 상태 변경 후 새로고침
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

      {/* 페이지네이션 컴포넌트 추가 */}
      <Pagination
        count={totalPages} // 총 페이지 수
        page={currentPage} // 현재 페이지
        onChange={(e, page) => setCurrentPage(page)} // 페이지 변경 시 currentPage 상태 업데이트
        color="primary"
        size="large"
        sx={{ marginTop: 3 }}
      />
    </Container>
  );
};

export default TodoPage;
