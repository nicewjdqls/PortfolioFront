import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; // react-router-dom을 사용하여 URL 경로에 따라 사이드바 열기
import { COffcanvas, COffcanvasBody, CButton } from '@coreui/react'; // CButton을 coreui에서 가져옵니다.
import './SideBarPage.css'; 
import LoginPage from "../Login/LoginPage";
import SignUpPage from "../SignUp/SignUpPage";

const SideBarPage = (props) => {
  const [visible, setVisible] = useState(false); // 사이드바 열기/닫기 상태 관리
  const [renderPage, setRenderPage] = useState("login");

  const location = useLocation(); // 현재 경로 가져오기

  // 페이지 경로가 "/sidebar"일 때 사이드바가 열리도록 useEffect 사용
  useEffect(() => {
    if (location.pathname === '/sidebar') {
      setVisible(true); // 경로가 /sidebar이면 사이드바 열기
    }
  }, [location]);

  // 페이지 전환 함수
  function onChangePage(mode) {
    setRenderPage(mode);
  }

  // 로그인 함수
  function onLogin() {
    if (props.onLogin) {
      props.onLogin(); // 부모로부터 전달받은 로그인 함수를 호출
    }
  }

  return (
    <>
      {/* 로그인 버튼 */}
      <CButton
        onClick={() => setVisible(true)}
        color="dark" // CoreUI의 color 속성 사용
        size="sm" // 사이즈 변경
        className="m-2 p-0 px-2"
        style={{ borderRadius: '8px', borderWidth: '2px' }}
      >
        로그인
      </CButton>

      {/* 사이드바 컴포넌트 */}
      <COffcanvas
        className="side-bar"
        placement="end"
        scroll={true}
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasBody>
          {renderPage === "login" ? (
            <LoginPage onChangePage={onChangePage} onLogin={onLogin} />
          ) : renderPage === "signUp" ? (
            <SignUpPage onChangePage={onChangePage} />
          ) : (
            <div>잘못된 페이지</div> // 기본값 처리
          )}
        </COffcanvasBody>
      </COffcanvas>
    </>
  );
};

export default SideBarPage;
