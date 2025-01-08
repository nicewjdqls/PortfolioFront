import { useState, useEffect } from "react";
import api from "../api/api";
import { CButton, CForm, CFormInput, CFormLabel, CFormFloating } from "@coreui/react";
import { useNavigate } from "react-router-dom";  // useNavigate 훅을 임포트
import loginButton from "./Sign in Naver.png";

const LoginPage = ({ onLogin, onChangePage }) => {  
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [error, setError] = useState('');
  const [hasRedirected, setHasRedirected] = useState(false); // 리다이렉션 여부를 관리하는 상태
  const navigate = useNavigate(); // useNavigate 사용하여 페이지 이동

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken && !hasRedirected) {
      navigate("/"); // 로그인된 상태라면 메인 페이지로 리다이렉트
      setHasRedirected(true); // 리다이렉션이 한 번 발생했음을 기록
    }
  }, [navigate, hasRedirected]); // hasRedirected 상태를 의존성 배열에 추가

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
        setHasRedirected(true); // 리다이렉션을 했다고 기록
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

  const handleSignUpClick = () => {
    onChangePage('signUp');  // 회원가입 페이지로 이동
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
        
        <CButton 
          type="button" 
          color="secondary" 
          className="mb-3 w-100"
          onClick={handleSignUpClick}  // 회원가입 버튼 클릭 시
        >
          회원가입
        </CButton>
      </CForm>
    </main>
  );
};

export default LoginPage;
