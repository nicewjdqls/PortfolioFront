import { useState, useEffect } from "react";
import api from "../api/api";
import { CButton, CForm, CFormInput, CFormLabel, CFormFloating } from "@coreui/react";
import { useNavigate } from "react-router-dom";
import loginButton from "./Sign in Naver.png";

const LoginPage = ({ onChangePage, onLogin }) => {  // onLogin 받기
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    console.log("Stored Token:", storedToken);

    if (storedToken) {
      navigate("/"); // 이미 로그인된 상태라면 메인 페이지로 리다이렉트
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();

    console.log("로그인 요청 데이터:", { userId, userPw });

    try {
      const response = await api.post('/user/login', { userId, userPw });

      console.log("API 응답:", response);
      console.log("응답 데이터:", response.data);

      if (response.status === 200) {
        console.log("토큰 확인:", response.data.token);

        onLogin(response.data.user); // 로그인 후 onLogin 호출
        sessionStorage.setItem("token", response.data.token);

        console.log("저장된 토큰:", sessionStorage.getItem("token"));

        api.defaults.headers["authorization"] = "Bearer " + response.data.token;

        setError(""); // 로그인 성공 시 에러 메시지 초기화
        navigate("/"); // 로그인 후 메인 페이지로 이동
      } else {
        console.log("로그인 실패 메시지:", response.data.message);
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      setError(error.message);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin(event);
    }
  };

  return (
    <main className="login-page">
      <img src="welcome.png" alt="Welcome" />
      <div className="login-logo"></div>
      {error && (
        <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
          {error}
        </div>
      )}
      <CForm className="login-form" onSubmit={handleLogin}>
        <CFormFloating className="mb-3">
          <CFormInput
            type="text"
            id="floatingUserId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <CFormLabel htmlFor="floatingUserId">아이디</CFormLabel>
        </CFormFloating>

        <CFormFloating className="mb-3">
          <CFormInput
            type="password"
            id="floatingUserPw"
            value={userPw}
            onChange={(e) => setUserPw(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <CFormLabel htmlFor="floatingUserPw">비밀번호</CFormLabel>
        </CFormFloating>

        <CButton type="submit" color="primary" className="mb-3 w-100">
          로그인
        </CButton>
      </CForm>
    </main>
  );
};

export default LoginPage;
