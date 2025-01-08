import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CButton } from '@coreui/react';  // CoreUI의 CButton을 사용
import { Row, Col, Container } from 'react-bootstrap'; // 방명록에서 Row와 Col을 사용
import TodoBoard from "../components/TodoBoard"; // TodoBoard 컴포넌트 가져오기
import api from "../api/api"; // api 호출을 위한 api 객체
import { jwtDecode } from "jwt-decode"; // jwtDecode 라이브러리 사용
import './MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [userName, setUserName] = useState(""); // 사용자 이름
  const [userId, setUserId] = useState(""); // 사용자 ID

  // 방명록 추가 기능
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
      // 비회원일 경우 userId와 userName을 'none'과 '비회원'으로 설정
      console.log("토큰이 존재하지 않습니다. 비회원 사용자로 설정합니다.");
      setUserName('비회원');
      setUserId('none');
    }
  }, []);
  
  // 방명록 항목 삭제
  const deleteItem = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`, {
        data: { userId: userId } // 로그인된 userId와 함께 전달
      });

      if (response.status === 200) {
        getTasks(); // 삭제 후 목록 새로고침
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("삭제 중 오류가 발생했습니다. 다시 시도해주세요.");
        console.error("error", error);
      }
    }
  };

  // 방명록 항목 완료 상태 변경
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

  const handleClick = () => {
    alert("이력서를 보여드립니다.");
    navigate('/about'); 
  };

  const handleBlogClick = () => {
    window.open('https://blog.naver.com/nicewjdqls', '_blank');
  };

  const handleGitClick = () => {
    window.open('https://github.com/nicewjdqls', '_blank');
  };

  return (
    <div className="main-page">
      <h1 className="attention-title">□ 저를 소개합니다</h1>
      <div id="about-and-cards-section" className="about-and-cards-section">
        <div className="about-image" onClick={handleClick}>
          <img src="/vivi.png" alt="구정빈" className="profile-image" />
        </div>
        <div id="about-section" className="about-section">
          <div className="about-content">
            <p>• 이름: 구정빈</p>
            <p>• 나이: 만33세</p>
            <p>• 학사: 배재대학교 전자공학과 졸업</p>
            <p>• 석사: 건국대학교 방위사업학과 졸업</p>
            <p>• 수료 내역: 2024.6.27 - 2024.12.27</p>
            <p>• KGitbank DevSecOps수료 (팀장/우수 수료생 선정)</p>
            <p>• 경력 사항: 2015.3 - 2024.6 육군 대위전역</p>
            <p>• 프로젝트 : DasomStudy Cafe 웹사이트 (5개월)</p>
            <div className="tags">
              <span className="tag">#구정빈</span>
              <span className="tag">#신입 개발자</span>
              <span className="tag">#자신감</span>
              <span className="tag">#취미는 바이올린</span>
              <span className="tag">#특기는 농구</span>
            </div>
            <CButton 
              color="primary" 
              className="click-button" 
              onClick={handleClick}
            >
              CLICK HERE!
            </CButton>
          </div>
        </div>
      </div>

      {/* 방명록 추가 영역 */}
      <h1 className="attention-title">□ 방명록</h1>
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

      {/* Project, Main stack 섹션 */}
      <h1 className="attention-title">□ Project</h1>
      <div className="cards-section">
        <Link to="/portfolio" className="card">
          <img src="/daslogo.png" alt="백엔드 엔지니어" />
        </Link>
        <div className="card" onClick={handleBlogClick}>
          <img src="/blog.png" alt="블로그" />
        </div>
        <div className="card" onClick={handleGitClick}>
          <img src="/git.png" alt="GitHub" />
        </div>
      </div>

      <h1 className="attention-title">□ Main stack</h1>
      <div className="main-stack-section">
        <img src="/stack.png" alt="Tech Stack"/>
      </div>
    </div>
  );
};

export default MainPage;
